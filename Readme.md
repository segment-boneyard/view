# View

  Create reactive views.

## Installation

    $ component install segmentio/view

## Example

```
var createView = require('view')
  , template = require('./template.html');

var View = createView(template);
var view = new View(model);

view.el;              // DOM element
view.reactive;        // reactive instance
view.model;           // model
view.emit;            // component/emitter
view.on;              // component/emitter
view.off;             // component/emitter
view.find('.btn');    // DOM element
view.findAll('.btn'); // NodeList
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
