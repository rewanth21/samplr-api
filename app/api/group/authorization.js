"use strict";

const Errors = require('app/errors');
const CommonAuth = require('api/common/authorization');

// Modules
const Group = require('modules/group');

class GroupAuth extends CommonAuth {

  /**
   * Requires user to own group in url
   *
   * @method requiresGroupOwner
   */
  requiresGroupOwner(req, res, next) {
    this.requiresLogin(req, res, err => {
      if (err) return next(err);

      Group
        .read(req.body.groupId || req.params.id)
        .pluck('userId')
        .execute((err, group) => {
          if (err || !group) return next(new Errors.NotFoundError());
          return group.userId === req.userId ? next() : next(new Errors.ForbiddenError());
        });
    });
  }
}

module.exports = new GroupAuth();
