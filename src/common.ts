export const hasOwnProperty = Object.prototype.hasOwnProperty
export const _toString = Object.prototype.toString
export const slice = Array.prototype.slice

export const emptyObject: Readonly<{}> = Object.freeze({})

/**
 * 执行一个空操作
 *
 * @export
 * @param {any} args
 */
export function noop (...rest: [any]): void {}

/**
 * 判断对象是否是纯粹的对象类型
 *
 * @export
 * @param {*} obj
 * @returns
 */
export function isPlainObject (obj: object): boolean {
  if (_toString.call(obj) === '[object Object]') {
    return true
  }
  return false
}

/**
 *  检测对象里是否包含有指定属性
 *
 * @export
 * @param {Object} obj
 * @param {String} key
 * @returns Boolean
 */
export function hasOwn (obj: object, key: string | number | symbol): boolean {
  return hasOwnProperty.call(obj, key)
}

/**
 *  混合对象里的属性到指定的对象上
 *
 * @export
 * @param {Object} to
 * @param {Object} _from
 * @returns Object
 */
export function extend (to: object, _from: object): object {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

/**
 * 确保只执行一次函数
 *
 * @export
 * @param {Function} fn
 * @returns Function
 */
export function once (fn: Function): Function {
  let called = false
  return function (...rest: [any]): void {
    if (!called) {
      called = true
      fn.apply(this, rest)
    }
  }
}

/**
 * 深度拷贝一个目标
 *
 * @export
 * @param {any} target
 * @returns any
 */
export function deepClone (target:any):object {
  if ([null, undefined, NaN, false].indexOf(target)) {
    return target
  }
  if (typeof target !== 'object' && typeof target !== 'function') {
    // 原始类型直接返回
    return target
  }
  const obj = Array.isArray(target) ? [] : {}
  for (const i in target) {
    if (hasOwn(target, i)) {
      obj[i] = typeof target[i] === 'object' ? deepClone(target[i]) : target[i]
    }
  }
  return obj
}

/**
 *
 * 判断是否是 string 对象
 * @param {any} obj
 * @returns
 */
export function isString (obj: any): Boolean {
  return typeof obj === 'string'
}

/**
 * @description 格式化字占位符，例如：”{1}，{2}“
 * @author pfzheng
 * @date 2020-08-04
 * @export
 * @returns {(string | Error)}
 */
export function format (...rest: Array<any>): string | Error {
  const args: Array<any> = slice.call(rest)
  const len: number = args.length
  if (len > 1) {
    let str: string = args[0]

    if (!isString(str)) {
      return new Error('The first value in the parameters must be a string type.')
    }

    for (let i: number = 1; i < len; i++) {
      str = str.replace(new RegExp('\\{' + i + '\\}', 'g'), args[i])
    }
    return str
  } else {
    return new Error('The number of parameters passed in is incorrect.')
  }
}

/**
 * @description 将数字进行货币格式化
 * @param value 要进行货币格式化的数字（支持String类型和Number类型）
 * @param unit 格式化货币的单元，默认是中国货币符号￥
 */
export function formatCurrency (value: string | number, unit: string = '￥'):string {
  // 如果值的类型为undefined / null 直接返回空字符串。
  if (value === undefined || value === null) {
    return ''
  }
  if (typeof value === 'string') {
    value = parseFloat(value)
  }
  value = value.toFixed(2)
  const [integer, decimal] = value.toString().split('.')
  const formatValue = `${integer}`.replace(/\B(?=(\d{3})+(?!\d))/gi, ',') + `.${decimal}`
  if (unit.length > 0) {
    return `${unit} ${formatValue}`
  } else {
    return formatValue
  }
}

/**
 * 判断传参是否是对象类型
 * @param obj
 * @returns
 */
export function isObject (obj:any):boolean {
  return obj !== null && typeof obj === 'object'
}

export function isFunction (target:any) {
  return typeof target === 'function'
}
