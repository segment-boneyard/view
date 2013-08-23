# View

  Create reactive views.

## Installation

    $ component install segmentio/view

## Example

```js
var createView = require('view')
  , template = require('./template.html');

var View = createView(template);
var view = new View(model);

view.el;       // DOM element
view.reactive; // reactive instance
view.model;    // model
view.emit;     // component/emitter
view.on;       // component/emitter
view.off;      // component/emitter
```

## API

### view(template[, fn])
  Returns a new View constructor that uses the given `template`.
  Optional `fn` will be assigned to `construct` events.

### View(model, el, options)
  The signature of the `View` created. All optional.

## License

  MIT
