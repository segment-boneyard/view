# View

  Create reactive views easily.

## Installation

    $ component install segmentio/view

## Example

```js
var createView = require('view');
var template = require('./template.html');

var View = createView(template);
var view = new View(model);

view.el;              // Element
view.reactive;        // Reactive
view.model;           // Model
view.find('.btn');    // Element
view.findAll('.btn'); // NodeList
view.emit;            // component/emitter
view.on;              // component/emitter
view.once;            // component/emitter
view.off;             // component/emitter
```

## API

### view(template[, fn])
  Returns a new View constructor that uses the given `template`.
  Optional `fn` will be bound to the `construct` event.

### View(model, el, options)
  The signature of the `View` created. All optional.

### View#template
  The template of the view, useful for inheritance if you need to override it.

### View#el
  The view's element once it's `domify`'d.

## License

  MIT
