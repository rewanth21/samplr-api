"use strict";

const CommonModel = require('modules/common').Model;

class AuthModel extends CommonModel {

  schema() {
    return {
      token: this.type.string()
    };
  }
}

module.exports = AuthModel;
