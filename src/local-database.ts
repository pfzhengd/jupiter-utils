import { LocalDataBaseOptions } from '../types'
import { isFunction } from './common'

export class LocalDataBase {
  key:string
  data:unknown
  options:LocalDataBaseOptions
  constructor (options:LocalDataBaseOptions) {
    if (typeof localStorage !== 'object') {
      throw new Error('LocalStorage is not a valid Object')
    }
    this.options = options || this._createEmpty()
    this.key = options.key
    this._initData()
  }

  private _createEmpty () {
    return Object.create(null)
  }

  private _initData () {
    const data = localStorage.getItem(this.key)
    if (data) {
      this.data = JSON.parse(data)
    } else {
      if (isFunction(this.options.initData)) {
        this.data = this.options.initData()
      } else {
        this.data = this._createEmpty()
      }
      this.saveup()
    }
  }

  saveup () {
    localStorage.setItem(this.key, JSON.stringify(this.data))
  }

  cleanup () {
    localStorage.removeItem(this.key)
  }

  update (data:unknown) {
    this.data = data
    this.saveup()
  }
}
