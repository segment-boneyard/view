describe('view', function () {
  var assert = require('assert')
    , view = require('view');

  it('should return a constructor', function () {
    var View = view('<div></div>');
    assert('function' === typeof View);
  });

  it('should have emitter methods', function () {
    var View = view('<div></div>');
    var v = new View();
    assert(v.emit);
    assert(v.on);
    assert(v.once);
    assert(v.off);
  });

  it('should expose its template', function () {
    var template = '<div></div>';
    var View = view(template);
    assert(template === View.prototype.template);
  });

  it('should emit construct', function (done) {
    var View = view('<div></div>');
    var instance;
    var model = {};
    var el = document.createElement('div');
    var options = {};
    var constructed = false;
    View.on('construct', function (view, m, e, o) {
      constructed = true;
      instance = view;
      assert(model === m);
      assert(el === e);
      assert(options === o);
      done();
    });
    var v = new View(model, el, options);
    assert(constructed);
    assert(instance === v);
  });

  it('should emit construct on domified el', function (done) {
    var View = view('<div></div>');
    var instance;
    var model = {};
    var options = {};
    var constructed = false;
    View.on('construct', function (view, m, e, o) {
      constructed = true;
      instance = view;
      assert(model === m);
      assert(view.el === e);
      assert(options === o);
      done();
    });
    var v = new View(model, null, options);
    assert(constructed);
    assert(instance === v);
  });

  it('should assign optional construct listener', function (done) {
    var View = view('<div></div>', function (view, m, e, o) {
      constructed = true;
      instance = view;
      assert(model === m);
      assert(el === e);
      assert(options === o);
      done();
    });
    var instance;
    var model = {};
    var el = document.createElement('div');
    var options = {};
    var constructed = false;
    var v = new View(model, el, options);
    assert(constructed);
    assert(instance === v);
  });
});

describe('View', function () {
  var assert = require('assert')
    , view = require('view');

  var View = view('<div></div>');

  describe('#emitter', function () {
    it('should have emitter methods', function () {
      var view = new View();
      assert(view.emit);
      assert(view.on);
      assert(view.once);
      assert(view.off);
    });
  });

  describe('#model', function () {
    it('should copy over its model', function () {
      var model = {};
      var view = new View(model);
      assert(model === view.model);
    });

    it('should generate an empty model', function () {
      var view = new View();
      assert('object' === typeof view.model);
    });
  });

  describe('#el', function () {
    it('should create its el', function () {
      var view = new View();
      assert(view.el);
      assert('DIV' === view.el.nodeName);
    });

    it('should accept an existing el', function () {
      var div = document.createElement('div');
      var view = new View(null, div);
      assert(div === view.el);
    });

    it('should have a model override', function () {
      var div = document.createElement('div');
      var view = new View(div);
      assert(div === view.el);
    });
  });

  describe('#options', function () {
    it('should copy over its options', function () {
      var options = {};
      var view = new View(null, null, options);
      assert(options === view.options);
    });

    it('should have an el override', function () {
      var options = {};
      var view = new View(null, options);
      assert(options === view.options);
    });
  });

  describe('#addClass', function () {
    it('should add a class to the el', function () {
      var view = new View();
      view.addClass('name');
      assert(view.el.classList.contains('name'));
    });
  });

  describe('#removeClass', function () {
    it('should remove a class from the el', function () {
      var view = new View();
      view.addClass('name');
      view.removeClass('name');
      assert(!view.el.classList.contains('name'));
    });
  });

  describe('#find', function () {
    it('should find a class or element inside of view', function () {
      var View = view('<div><span class="btn">button</span></div>');
      var createView = new View();
      var span = createView.find('span');
      var btn = createView.find('.btn');
      assert(span !== null);
      assert(btn !== null);
    });
  });

  describe('#findAll', function () {
    it('should find all classes or elements inside of view', function () {
      var View = view('<div><span class="btn">open</span><span class="btn">close</span></div>');
      var createView = new View();
      var spans = createView.findAll('span');
      var btns = createView.findAll('span');
      assert(spans.length);
      assert(btns.length);
    });
  });
});