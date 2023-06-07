import { hasOwn, isEmptyObject } from './index'

export interface BucketOption {
  bucketName: string,
  bucketSize: number,
  bucketTime: number,
  callback?: Function
}

export default class TrafficBucket {
  options:Record<string, BucketOption>
  constructor (options:Record<string, BucketOption>) {
    this.options = options
    this.checkOptions(options)
  }

  private checkOptions (options:Record<string, BucketOption>) {
    if (isEmptyObject(options)) {
      throw new Error('TrafficBucket: options is empty')
    }
    let bucketSizeSum = 0
    for (const bucket in options) {
      bucketSizeSum += options[bucket].bucketSize
    }
    if (bucketSizeSum !== 100) {
      throw new Error('TrafficBucket: bucketSizeSum is not equal to 1')
    }
  }

  public getBucket () {
    const random = Math.floor(Math.random() * 100)
    let cumulativeProbability = 0
    for (const bucketName in this.options) {
      cumulativeProbability += this.options[bucketName].bucketSize
      if (random <= cumulativeProbability) {
        return bucketName
      }
    }
    console.warn('TrafficBucket: no bucket matched', random.toString())
    return 'noBucketMatched'
  }

  public increment (bucketName:string) {
    if (hasOwn(this.options, bucketName)) {
      const bucket = this.options[bucketName]
      bucket.bucketTime++
      if (bucket.callback) {
        bucket.callback()
      }
    } else {
      console.warn(`TrafficBucket: bucket ${bucketName} not exist`)
    }
  }
}
