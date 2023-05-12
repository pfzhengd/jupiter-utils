import {
  isPlainObject,
  hasOwn,
  extend,
  deepClone,
  once,
  isString,
  format,
  formatCurrency,
  isFunction
} from '../src/common'

test('isPlainObject ?', () => {
  expect(isPlainObject([])).toBe(false)
  expect(isPlainObject({})).toBe(true)
  expect(isPlainObject({ a: 2 })).toBe(true)
})

test('hasOwn ?', () => {
  expect(hasOwn({ a: 1 }, 'a')).toBe(true)
  expect(hasOwn([1, 2, 3], 'b')).toBe(false)
  expect(hasOwn({}, '__proto__')).toBe(false)
})

test('extend ?', () => {
  const result:any = extend({ a: 1 }, { b: 2 })
  expect(hasOwn(result, 'b')).toBe(true)
  console.log('result', JSON.stringify(result))
  expect(result.b).toEqual(2)
  expect(result.a).toEqual(1)
})

test('deepClone ?', () => {
  const result:any = deepClone({
    b: 2,
    c: {
      c1: '2.1',
      c2: '2.2'
    },
    a: 1,
    e: [1, 2, 3, 4]
  })

  console.log('result', JSON.stringify(result))
  expect(hasOwn(result, 'c')).toBe(true)
  expect(hasOwn(result.c, 'c1')).toBe(true)
  expect(hasOwn(result.c, 'c2')).toBe(true)
  expect(hasOwn(result.c, 'c2')).toBe(true)
})

test('once ?', () => {
  let counter = 0
  const fn = once((a:number, b:number) => {
    console.log('我只执行了一次。')
    counter += (a + b)
  })
  fn(1, 2)
  fn(1, 2)
  expect(counter).toBe(3)
})

test('isString ?', done => {
  expect(isString({})).toBe(false)
  expect(isString(true)).toBe(false)
  expect(isString('')).toBe(true)
  done()
})

test('format ?', done => {
  expect(format('{1},{2}', 'a', 'b')).toBe('a,b')
  expect(format('{1},{2}')).toEqual(new Error('The number of parameters passed in is incorrect.'))
  expect(format(1, 2)).toEqual(new Error('The first value in the parameters must be a string type.'))
  expect(format('{0}', 1)).toBe('{0}')
  done()
})

test('formatCurrency', done => {
  expect(formatCurrency(undefined)).toBe('')
  expect(formatCurrency(null)).toBe('')
  expect(formatCurrency(0)).toBe('￥ 0.00')
  expect(formatCurrency(undefined)).toBe('')
  expect(formatCurrency(142)).toBe('￥ 142.00')
  expect(formatCurrency(13542)).toBe('￥ 13,542.00')
  expect(formatCurrency(123242)).toBe('￥ 123,242.00')
  expect(formatCurrency(123456789)).toBe('￥ 123,456,789.00')
  expect(formatCurrency(123456789.5)).toBe('￥ 123,456,789.50')
  expect(formatCurrency(123456789, { unit: '$' })).toBe('$ 123,456,789.00')
  expect(formatCurrency(123456789, '$')).toBe('$ 123,456,789.00')
  expect(formatCurrency('123456789.00', { unit: '$' })).toBe('$ 123,456,789.00')
  expect(formatCurrency('123456789.0000', { unit: '$' })).toBe('$ 123,456,789.00')
  expect(formatCurrency('123456789', { unit: '$', decimalPlaces: 1 })).toBe('$ 123,456,789.0')
  expect(formatCurrency('123456789', { unit: '$', decimalPlaces: 0 })).toBe('$ 123,456,789')
  expect(formatCurrency(123456789, { unit: '' })).toBe('123,456,789.00')
  done()
})

test('isFunction', done => {
  function test () {}
  expect(isFunction(test)).toEqual(true)
  expect(isFunction({})).toEqual(false)
  expect(isFunction(1)).toEqual(false)
  expect(isFunction(true)).toEqual(false)
  expect(isFunction(undefined)).toEqual(false)
  expect(isFunction(null)).toEqual(false)
  expect(isFunction('')).toEqual(false)
  done()
})
