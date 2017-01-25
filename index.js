/* eslint no-console: [0] */
'use strict'

module.exports = class ProxyGenericsShippo {
  constructor(options) {
    this.options = options
  }

  /**
   * Create Shippo Instance
   * @returns {*} Shippo Instance
   */
  shippo() {
    return require('shippo')(
      this.options.secret
    )
  }
}

