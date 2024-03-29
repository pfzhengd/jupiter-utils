import { isString, hasOwn, format, _toString } from './common'

export type TDate = {
  years: string | number
  months: string | number
  days: string | number
  hours: string | number
  minutes: string | number
  seconds: string | number
}

/**
 * @description 格式化日期,format是格式化的格式，date是要格式化的日期
 * @author pfzheng
 * @date 2020-08-03
 * @export
 * @param {string} format
 * @param {(Date|string)} data
 * @returns
 */
export function formatDate (
  format: string,
  data: Date | string | number | TDate
):Date | string | number | TDate|Error {
  if (_toString.call(data) === '[object Null]' || _toString.call(data) === '[object Undefined]') {
    return data
  }
  if (typeof format !== 'string') {
    return new Error('format is not defined.')
  }
  const date: TDate = hasOwn(data as TDate, 'years')
    ? (data as TDate)
    : getDate(data as Date | string)
  return format
    .replace(/yyyy/gi, date.years.toString())
    .replace(/MM/, fullTime(date.months))
    .replace(/dd/gi, fullTime(date.days))
    .replace(/hh/gi, fullTime(date.hours))
    .replace(/mm/, fullTime(date.minutes))
    .replace(/ss/gi, fullTime(date.seconds))
}

/**
 * @description 根据参数返回年月日时分秒对象,为空则返回当前时间
 * @author pfzheng
 * @date 2020-08-03
 * @export
 * @param {(string|Date)} param
 * @returns {TDate}
 */
export function getDate (param: string | number | Date): TDate {
  const date: Date = (isString(param) || typeof param === 'number')
    ? new Date(param)
    : (param as Date) || new Date()
  return {
    years: date.getFullYear(),
    months: date.getMonth() + 1,
    days: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }
}

/**
 * @description 填充时间,判断时间是否是十位数，不是则前位补0
 * @author pfzheng
 * @date 2020-08-03
 * @export
 * @param {string} time
 * @returns {string}
 */
export function fullTime (time: string | number): string {
  let value: number
  if (isString(time)) {
    value = parseInt(time as string)
  } else {
    value = time as number
  }
  return (value >= 10 ? value : '0' + value).toString()
}

/**
 * @description 获取两个时是的间隔，返回年月日时分秒
 * @author pfzheng
 * @date 2020-08-04
 * @export
 * @param {(string|Date)} start
 * @param {(string|Date)} end
 * @returns {string}
 */
export function getDiffTime (start?: string | Date, end?: string | Date, diffTime:number = 0): TDate {
  if (isString(start)) {
    start = new Date(start)
  }

  if (isString(end)) {
    end = new Date(end)
  }

  start = start as Date
  end = end as Date

  const intervalMonth = 365.242199 / 12

  if (diffTime === 0) {
    diffTime = end.getTime() - start.getTime()
  }

  const diffTimeYears = Math.floor(
    diffTime / (12 * intervalMonth * 24 * 60 * 60 * 1000)
  )

  const timeMonths = diffTime % (12 * intervalMonth * 24 * 60 * 60 * 1000)
  const diffTimeMonths = Math.floor(
    timeMonths / (intervalMonth * 24 * 60 * 60 * 1000)
  )

  const timeDays = diffTime % (intervalMonth * 24 * 60 * 60 * 1000)
  const diffTimeDays = Math.floor(timeDays / (24 * 60 * 60 * 1000))

  const timeHours = diffTime % (24 * 60 * 60 * 1000)
  const diffTimeHours = Math.floor(timeHours / (60 * 60 * 1000))

  const timeMinutes = timeHours % (60 * 60 * 1000)
  const diffTimeMinutes = Math.floor(timeMinutes / (60 * 1000))

  const timeSeconds = timeMinutes % (60 * 1000)
  const diffTimeSeconds = Math.floor(timeSeconds / 1000)

  return {
    years: diffTimeYears,
    months: diffTimeMonths,
    days: diffTimeDays,
    hours: diffTimeHours,
    minutes: diffTimeMinutes,
    seconds: diffTimeSeconds
  }
}

/**
 * @description 获取时间差并指定显示的位数,参数num值设置了后，template模块字符串要从年到秒填全。
 * @author pfzheng
 * @date 2020-08-04
 * @export
 * @param {(string | Date)} start
 * @param {(string | Date)} end
 * @param {string} [template]
 * @returns {string}
 */
export function getDiffTimeDescription (
  start?: string | Date,
  end?: string | Date,
  diffTime:number = 0,
  num?: number,
  template?: string
): string | Error {
  const date: TDate = getDiffTime(start, end, diffTime)
  template = template || '{1}年{2}个月{3}日{4}小时{5}分{6}秒'
  const items: Array<number> = []
  Object.keys(date).forEach((key) => {
    items.push(date[key])
  })
  const texts: Array<string> = template.match(/{\d+}[^{]+/gi)

  if (num) {
    const index: number = items.findIndex((item) => {
      return item > 0
    })
    if (texts.length === items.length) {
      const subItems = items.slice(index, num)
      const subTexts = texts.slice(index, num).map((text, index) => {
        text = text.replace(/{\d+}/, `{${index + 1}}`.toString())
        return text
      })
      return format(subTexts.join(''), ...subItems) as string
    } else {
      return new Error(`The parameter name "template" is invalid.
      If you set the parameter name "num",the parameter name "template"
      must be complete from year to seconds.`)
    }
  }

  return format(template, ...items)
}

/** 将传参值转换成Date类型 */
function convertToDate (param:string | Date):Date {
  return typeof param === 'string' ? new Date(param) : param
}

/**
 * 获取两个时间差的天数
 * */
export function getDiffDays (start:string | Date, end:string | Date):number {
  const _start = convertToDate(start)
  const _end = convertToDate(end)
  const diffTimes = _start.getTime() - _end.getTime()
  const days = diffTimes / (24 * 60 * 60 * 1000)
  return days
}

/**
 * 格式化时间戳
 * @param timestamp
 * @returns
 */
export function formatTimestamp (timestamp:number) {
  const date = new Date(timestamp)
  const now = new Date()

  // 检查是否是当天时间
  if (date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()) {
    // 当天时间，格式化为 "hh:mm AM/PM"
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const formattedHours = hours % 12 || 12 // 将小时转换为 12 小时制
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    return `${formattedHours}:${formattedMinutes} ${ampm}`
  } else {
    // 超出当天时间，格式化为 "年月日时分"
    const year = date.getFullYear()
    const month = date.getMonth() + 1 // 月份从 0 开始，需要加 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return `${year}-${month}-${day} ${hours}:${minutes}`
  }
}

export default {}
