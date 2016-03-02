#clear-default

If you don't use placeholder and giving your default values to your inputs / textareas. ClearDefault Cleas it to its default value when focus.

##How is it working?

Just copy the clearDefault.js to your workplace. And then call it in your page or in your js file.

```js
				
	$('input,textarea').clearDefault();

```

You can give tag names or classes or ID's.

I recommend using it with document.ready
```js
				
	$(function(){				
		$('input,textarea').clearDefault();
	})

```