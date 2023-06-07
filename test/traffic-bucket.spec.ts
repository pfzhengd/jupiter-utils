import TrafficBucket from '../src/traffic-bucket'

// 模拟访问流量
// function simulateTraffic (trafficBucket:TrafficBucket) {
//   // 随机选择一个分桶
//   const selectedBucket = trafficBucket.getBucket()

//   // 增加分桶的访问计数
//   trafficBucket.increment(selectedBucket)

//   // // 打印结果
//   // console.log(`访问流量落入分桶 ${selectedBucket}`)
//   // console.log('当前访问计数:', TrafficBucket)
// }

test('TrafficBucket 0', (done) => {
  const trafficBucket = new TrafficBucket({
    bucketA: {
      bucketName: 'bucketA',
      bucketSize: 100,
      bucketTime: 0
    }
  })
  expect(trafficBucket).toBeInstanceOf(TrafficBucket)
  expect(trafficBucket.options).toEqual({
    bucketA: {
      bucketName: 'bucketA',
      bucketSize: 100,
      bucketTime: 0
    }
  })
  expect(trafficBucket.getBucket()).toBe('bucketA')
  expect(trafficBucket.increment('defaultBucket')).toBe(undefined)
  expect(trafficBucket.increment('bucketA')).toBe(undefined)
  expect(trafficBucket.increment('bucketB')).toBe(undefined)
  done()
})

test('TrafficBucket1', (done) => {
  expect(() => {
    return new TrafficBucket({})
  }).toThrow('TrafficBucket: options is empty')

  expect(() => {
    return new TrafficBucket({
      bucketA: {
        bucketName: 'bucketA',
        bucketSize: 10,
        bucketTime: 0
      },
      bucketB: {
        bucketName: 'bucketA',
        bucketSize: 110,
        bucketTime: 0
      }
    })
  }).toThrow('TrafficBucket: bucketSizeSum is not equal to 1')
  done()
})

// test('TrafficBucket2', (done) => {
//   const trafficBucket = new TrafficBucket({
//     bucketA: {
//       bucketName: 'bucketA',
//       bucketSize: 10,
//       bucketTime: 0
//     },
//     bucketB: {
//       bucketName: 'bucketB',
//       bucketSize: 90,
//       bucketTime: 0
//     }
//   })

//   // 模拟多次访问
//   for (let i = 0; i < 10; i++) {
//     simulateTraffic(trafficBucket)
//   }
//   console.log(trafficBucket)
//   expect(trafficBucket.options.bucketA.bucketTime).toBe(1)
//   expect(trafficBucket.options.bucketB.bucketTime).toBe(9)
//   done()
// })

// test('TrafficBucket3', (done) => {
//   const trafficBucket = new TrafficBucket({
//     bucketC: {
//       bucketName: 'bucketC',
//       bucketSize: 0.2,
//       bucketTime: 0
//     },
//     bucketD: {
//       bucketName: 'bucketD',
//       bucketSize: 0.8,
//       bucketTime: 0
//     }
//   })

//   // 模拟多次访问
//   for (let i = 0; i < 100; i++) {
//     simulateTraffic(trafficBucket)
//   }
//   console.log(trafficBucket)
//   expect(trafficBucket.options.bucketC.bucketTime).toBe(20)
//   expect(trafficBucket.options.bucketD.bucketTime).toBe(80)
//   done()
// })
