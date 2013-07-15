# View

  Create reactive views.

## Installation

    $ component install segmentio/view

## Example

```js
var view = require('view')
  , template = require('./template.html');

var View = view(template);
var view = new View(model);

view.el;       // DOM element
view.reactive; // reactive instance
view.model;    // model
view.emit;     // component/emitter
view.on;       // component/emitter
view.off;      // component/emitter
```

## API

### view(template)
  Returns a new View constructor that uses the given `template`.

### View(model, el, options)
  The signature of the `View` created. All optional.

## License

  MIT
