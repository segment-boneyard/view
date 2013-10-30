
var Classes = require('classes');
var domify = require('domify');
var Emitter = require('emitter');
var reactive = require('reactive');
var type = require('type');


/**
 * Expose `createView`.
 */

module.exports = createView;


/**
 * Create a new view constructor with the given `template`.
 * Optional `fn` will be assigned to `construct` events.
 *
 * @param {String} template
 * @param {Function} fn (optional)
 * @return {Function}
 */

function createView (template, fn) {
  if (!template) throw new Error('template required');

  /**
   * Initialize a new `View` with an optional `model`, `el` and `options`.
   *
   * @param {Object} model (optional)
   * @param {Element} el (optional)
   * @param {Object} options (optional)
   */

  function View (model, el, options) {
    options || (options = {});
    if ('element' == type(model)) options = el, el = model, model = null;
    if ('object' == type(el)) options = el, el = null;

    this.model = model || {};
    this.el = el || domify(template);
    this.options = options;
    this.reactive = reactive(this.el, this.model, this);
    this.View.emit('construct', this, this.model, this.el, this.options);
  }

  // statics
  Emitter(View);

  // prototypes
  View.prototype.template = template;
  View.prototype.View = View;
  Emitter(View.prototype);
  Classes(View.prototype);

  // assign optional `construct` listener
  if (fn) View.on('construct', fn);

  return View;
}