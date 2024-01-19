# [0.7.0](https://github.com/pfzhengd/jupiter-utils/compare/v0.6.3...v0.7.0) (2024-01-19)


### Features

* 增加 deepMerge 函数及优化 noop 的TS声明类型 ([392e1e7](https://github.com/pfzhengd/jupiter-utils/commit/392e1e78af3d883a35228e714db4b69a22fdfdd3))



## [0.6.3](https://github.com/pfzhengd/jupiter-utils/compare/v0.6.2...v0.6.3) (2023-12-09)


### Features

* 增加对象浅比较函数 ([abcf1b2](https://github.com/pfzhengd/jupiter-utils/commit/abcf1b290115082115fd5c0b043ed8e04c858e6a))
* 增加时间戳格式化函数 ([886431c](https://github.com/pfzhengd/jupiter-utils/commit/886431c3158993fb2156ea9055f0386dcbbb89ea))



## [0.6.2](https://github.com/pfzhengd/jupiter-utils/compare/v0.6.1...v0.6.2) (2023-10-18)


### Performance Improvements

* 将 stateManager 改成具名导出 ([7f3a005](https://github.com/pfzhengd/jupiter-utils/commit/7f3a005aadc9765761b622a5e544f4546e6c2b35))



## [0.6.1](https://github.com/pfzhengd/jupiter-utils/compare/v0.6.0...v0.6.1) (2023-10-18)


### Performance Improvements

* 将状态管理的引用入口放在 index 文件中 ([eed8c66](https://github.com/pfzhengd/jupiter-utils/commit/eed8c662303dd9a1392f39c3af53d43ba3c978a3))



# [0.6.0](https://github.com/pfzhengd/jupiter-utils/compare/v0.5.1...v0.6.0) (2023-10-18)


### Features

* 增加状态管理模块 ([8bf8ac7](https://github.com/pfzhengd/jupiter-utils/commit/8bf8ac7d19fa3765c812dfedf2802a33114df52f))



## [0.5.1](https://github.com/pfzhengd/jupiter-utils/compare/v0.5.0...v0.5.1) (2023-10-16)


### Bug Fixes

* getSubscribers 函数后，内部也无法正常工作。 ([b08612b](https://github.com/pfzhengd/jupiter-utils/commit/b08612bd561683dbb988ddcea4a07857781cd071))



# [0.5.0](https://github.com/pfzhengd/jupiter-utils/compare/v0.4.4...v0.5.0) (2023-10-16)


### Features

* IBroadcaster 支持 getSubscribers ([385d012](https://github.com/pfzhengd/jupiter-utils/commit/385d012f984f11e4d9c61e85975f5df82060c448))



## [0.4.4](https://github.com/pfzhengd/jupiter-utils/compare/v0.4.3...v0.4.4) (2023-09-14)


### Features

* 在给定长度的数组中，通过平均分配指定的数字，使每个元素的值尽可能接近平均值 ([91dfa48](https://github.com/pfzhengd/jupiter-utils/commit/91dfa48162f7efe49209e9d2f1ccd6cd39396d83))



## [0.4.3](https://github.com/pfzhengd/jupiter-utils/compare/v0.4.2...v0.4.3) (2023-08-29)


### Features

* 增加一个将 8.5K,8.5M,8.5B,8.5T,8.5Q 转换成数字的函数 ([2e760f0](https://github.com/pfzhengd/jupiter-utils/commit/2e760f06d392fda1cccb3e855c77c5e339b3209e))



## [0.4.2](https://github.com/pfzhengd/jupiter-utils/compare/v0.4.1...v0.4.2) (2023-07-31)


### Features

* once 支持异步函数 ([5e3bb22](https://github.com/pfzhengd/jupiter-utils/commit/5e3bb226df8ceb5fa99c202e1783044a6a9fa1e5))



## [0.4.1](https://github.com/pfzhengd/jupiter-utils/compare/v0.4.0...v0.4.1) (2023-07-21)


### Features

* 1、Broadcaster 增加类型输出；2、支持 es 、cjs 两种文件构建的输出。 ([f1059d1](https://github.com/pfzhengd/jupiter-utils/commit/f1059d1c037488184fe9ccaf39cfb7c5f7848384))



# [0.4.0](https://github.com/pfzhengd/jupiter-utils/compare/v0.3.0...v0.4.0) (2023-06-27)


### Features

* 添加 def 、setPropertyReadonly ([df57bdf](https://github.com/pfzhengd/jupiter-utils/commit/df57bdf4e3be3d97e33b3fcb43541dd1fbb88880))



# [0.3.0](https://github.com/pfzhengd/jupiter-utils/compare/v0.2.4...v0.3.0) (2023-06-10)


### Features

* 添加 debonuce 函数 ([5e6780a](https://github.com/pfzhengd/jupiter-utils/commit/5e6780abb99bf0bed82799f80d63a870fcbe8784))



## [0.2.4](https://github.com/pfzhengd/jupiter-utils/compare/v0.2.3...v0.2.4) (2023-06-08)


### Features

* 给 LocalDataBase 增加 一个 get 函数 ([a2cd681](https://github.com/pfzhengd/jupiter-utils/commit/a2cd681945a876b6788fbbde6e36e482167f1f4a))



## [0.2.3](https://github.com/pfzhengd/jupiter-utils/compare/v0.2.1...v0.2.3) (2023-06-08)



## [0.2.1](https://github.com/pfzhengd/jupiter-utils/compare/v0.2.0...v0.2.1) (2023-06-08)


### Bug Fixes

* TrafficBucket 没有导出 ([e990ab2](https://github.com/pfzhengd/jupiter-utils/commit/e990ab2354b688ad934e442b94bbc341f6fa97a4))



# [0.2.0](https://github.com/pfzhengd/jupiter-utils/compare/v0.1.1...v0.2.0) (2023-06-07)


### Features

* 1、添加 LocalDatabase 类 ([1fd53e2](https://github.com/pfzhengd/jupiter-utils/commit/1fd53e29286b95d5b8586f4e0d4a23656f999721))
* 添加 isEmptyObject 函数 ([d50a9c4](https://github.com/pfzhengd/jupiter-utils/commit/d50a9c40ba554c2360669d4c75d5f585da056c80))



## [0.1.1](https://github.com/pfzhengd/jupiter-utils/compare/v0.1.0...v0.1.1) (2023-05-25)



# [0.1.0](https://github.com/pfzhengd/jupiter-utils/compare/v0.0.5...v0.1.0) (2023-05-25)


### Features

* 增加图片批量预加载的能力 ([fd77357](https://github.com/pfzhengd/jupiter-utils/commit/fd77357272df93b82712d667e0181066410e5b6e))



## [0.0.5](https://github.com/pfzhengd/jupiter-utils/compare/v0.0.4...v0.0.5) (2023-05-23)


### Features

* 增加 ø 的能力 ([e7e1c8a](https://github.com/pfzhengd/jupiter-utils/commit/e7e1c8a10b74f695c67610da16ffaf01b6138266))


### Performance Improvements

* 优化 formatCurrency 的参数类型声明. ([7eb7ebe](https://github.com/pfzhengd/jupiter-utils/commit/7eb7ebeebb2bfc72594e7ce2a9951b4b472b6be2))



## [0.0.4](https://github.com/pfzhengd/jupiter-utils/compare/v0.0.3...v0.0.4) (2023-05-12)


### Features

* formatCurrency 函数支持对象参数 ([300bc1e](https://github.com/pfzhengd/jupiter-utils/commit/300bc1ea8aa463c20c04d35f7420bc329e4b8198))



## [0.0.3](https://github.com/pfzhengd/jupiter-utils/compare/v0.0.2...v0.0.3) (2023-05-06)


### Performance Improvements

* 优化 formatCurrency 函数，如果 unit ([081f580](https://github.com/pfzhengd/jupiter-utils/commit/081f580c1314513dc7de355c548e3c152d181bcb))



## [0.0.2](https://github.com/pfzhengd/jupiter-utils/compare/v0.0.2-beta.3...v0.0.2) (2023-04-28)



## [0.0.2-beta.3](https://github.com/pfzhengd/jupiter-utils/compare/v0.0.2-beta.2...v0.0.2-beta.3) (2023-04-26)



## [0.0.2-beta.2](https://github.com/pfzhengd/jupiter-utils/compare/v0.0.2-beta.1...v0.0.2-beta.2) (2023-04-26)



## [0.0.2-beta.1](https://github.com/pfzhengd/jupiter-utils/compare/v0.0.2-beta.0...v0.0.2-beta.1) (2023-04-26)



## [0.0.2-beta.0](https://github.com/pfzhengd/jupiter-utils/compare/v0.0.1...v0.0.2-beta.0) (2023-04-26)


### Features

* 增加 isFunction 函数 ([03e02f6](https://github.com/pfzhengd/jupiter-utils/commit/03e02f6f36bfb44b799b6d9b70fe099e2932bb54))
* 增加 percies-calculation 功能 ([0e5371c](https://github.com/pfzhengd/jupiter-utils/commit/0e5371cbf7624d882df8c6dec84f0c242a1b5f89))



## 0.0.1 (2021-10-16)



