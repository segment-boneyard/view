
var domify = require('domify')
  , Emitter = require('emitter')
  , protos = require('./protos')
  , reactive = require('reactive')
  , type = require('type');


/**
 * Expose `createView`.
 */

module.exports = createView;


/**
 * Create a new view constructor with the given `template`.
 *
 * @param {String} template
 * @return {Function}
 */

function createView (template) {
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

    if ('element' === type(model)) {
      options = el;
      el = model;
      model = null;
    }

    if ('object' === type(el)) {
      options = el;
      el = null;
    }

    this.model = model;
    this.el = el || domify(template);
    this.options = options;
    this.reactive = reactive(this.el, this.model || {}, this);
    this.view.emit('construct', this, model, el, options);
  }

  // mixin emitter
  Emitter(View);

  // statics
  View.template = template;

  // prototypes
  View.prototype.View = View;
  for (var key in protos) View.prototype[key] = protos[key];

  return View;
}