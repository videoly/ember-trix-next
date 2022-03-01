ember-trix-next
==============================================================================

A simple trix editor wrapper


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-trix-next
```


Usage
------------------------------------------------------------------------------

In the most cases it would be enough just to use the inline variant of the component:

```
<TrixEditor @initialValue="some text" />
```

Or you can customize the markup:

```
<TrixEditor as |trix|>
  <p>Some HTML before toolbar</p>
  <trix.toolbar />
  <p>Some HTML between toolbar and editor</p>
  <trix.editor @initialValue="some text" />
  <p>Some HTML after editor</p>
</TrixEditor>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).