# proxy-generics-shippo

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Proxy Generic Payment Processor for GoShippo.com.

Looking for [Proxy Engine?](https://github.com/calistyle/trailpack-proxy-engine)
Looking for [Proxy Generics?](https://github.com/calistyle/trailpack-proxy-generics)

## Install

```sh
$ npm install --save proxy-generics-shippo
```

## Configure

```js
// config/proxyGenerics.js
module.exports = {
  shippo: {
      adapter: require('proxy-generic-shippo'),
      options: {
          key: '<your api key>'
      }
  }
}
```

[npm-image]: https://img.shields.io/npm/v/proxy-generics-shippo.svg?style=flat-square
[npm-url]: https://npmjs.org/package/proxy-generics-shippo
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/proxy-generics-shippo/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/proxy-generics-shippo/tree/master
[daviddm-image]: http://img.shields.io/david//trailpack-proxy-generics-shippo.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/proxy-generics-shippo
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/proxy-generics-shippo.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/proxy-generics-shippo

