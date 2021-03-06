import {
  fullTime,
  getDate,
  formatDate,
  TDate,
  getDiffTime,
  getDiffTimeDescription,
  getDiffDays
} from '../src/date'

test('fullTime ?', () => {
  expect(fullTime(0)).toBe('00')
  expect(fullTime(9)).toBe('09')
  expect(fullTime(10)).toBe('10')
})

test('getDate ?', () => {
  const result1:TDate = {
    years: 2020,
    months: 7,
    days: 10,
    hours: 8,
    minutes: 0,
    seconds: 0
  }
  expect(getDate('2020-07-10')).toStrictEqual(result1)

  const result2:TDate = {
    years: 2020,
    months: 8,
    days: 2,
    hours: 15,
    minutes: 0,
    seconds: 23
  }
  expect(getDate(new Date('2020-08-02 15:00:23'))).toStrictEqual(result2)

  const date = new Date()
  const result3:TDate = {
    years: date.getFullYear(),
    months: date.getMonth() + 1,
    days: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }
  expect(getDate(date.getTime())).toStrictEqual(result3)
})

test('formatDate ?', () => {
  expect(formatDate('yyyy-MM-dd', null)).toBe(null)
  expect(formatDate('yyyy-MM-dd', undefined)).toBe(undefined)
  expect(formatDate('yyyy-MM-dd', '2020-08-02')).toBe('2020-08-02')
  expect(formatDate('yyyy-MM-dd hh:mm:ss', '2020-08-02 15:03:22')).toBe('2020-08-02 15:03:22')
})

test('getDiffTime ?', done => {
  expect(getDiffTime('1986-07-03 15:03:23', '2020-08-03 18:02:01')).toStrictEqual(
    { years: 34, months: 1, days: 1, hours: 3, minutes: 58, seconds: 38 }
  )
  expect(getDiffTime('2019-02-03', '2020-03-03')).toStrictEqual(
    { years: 1, months: 0, days: 28, hours: 0, minutes: 0, seconds: 0 }
  )
  expect(getDiffTime('', '', 7286)).toStrictEqual(
    { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 7 }
  )
  done()
})

test('getDiffDays ?', done => {
  expect(getDiffDays('2021-05-05', '2021-05-04')).toEqual(1)
  expect(getDiffDays(new Date('2021-05-05'), new Date('2021-05-04'))).toEqual(1)
  expect(getDiffDays(new Date('2021-05-05'), '2021-05-04')).toEqual(1)
  expect(getDiffDays('2021-05-05', new Date('2021-05-04'))).toEqual(1)
  expect(getDiffDays(new Date('2021-05-24'), new Date('2021-05-11'))).toEqual(13)
  done()
})

test('getDiffTimeDescription ?', done => {
  expect(getDiffTimeDescription('1986-07-03 15:03:23', '2020-08-03 18:02:01')).toBe('34???1??????1???3??????58???38???')
  expect(getDiffTimeDescription('2019-07-03 15:03:23', '2020-08-03 18:02:01', 0, 2)).toBe('1???1??????')
  console.log(getDiffTimeDescription('2016-09-27T15:59:17.000Z', new Date(), 0, 2))
  expect(getDiffTimeDescription('', '', 7286)).toBe('0???0??????0???0??????0???7???')
  done()
})
