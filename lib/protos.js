
var classes = require('classes');


/**
 * Add a class to the view's el.
 *
 * @param {String} name
 * @return {View}
 */

exports.addClass = function (name) {
  classes(this.el).add(name);
  return this;
};


/**
 * Remove a class from the view's el.
 *
 * @param {String} name
 * @return {View}
 */

exports.removeClass = function (name) {
  classes(this.el).remove(name);
  return this;
};