#clear-default

If there is no placeholder in your text inputs / textareas and you give your default values to your text inputs / textareas; clearDefault clears it to its default value when you focus.

##How is it working?

Just copy the clearDefault.js to your workplace. Add it to your html file and then call it in your page or in your js file.

```js
				
	$('input,textarea').clearDefault();

```

You can select tags,classes or ID's.

I recommend using it with document.ready
```js
				
	$(function(){				
		$('input,textarea').clearDefault();
	})

```