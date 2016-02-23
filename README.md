# batteries-layout

batteries-layout started out as an experiment for using escaped characters in CSS selectors, but quickly grew to the idea of creating a *lightweight* library that contains layout specific classes like `grid` or `container`. It's main goal is to provide a semantic way of creating a page layout that you can costumize later on. 


### Why...

You may ask yourself *"Why in hell should we need another grid framework, we've got like 9000 of them?"*. You're right. But can you do something this fancy in a regular CSS framework: 

```html
<div class="container grid">
	<div class="mobile stacked row">
		<div class="10% column">
			I'm a 10% wide column ...
		</div>
		<div class="2/3 column">
			... and I'm 66% wide. 
		</div>
	</div>
</div>
```


### Lightweight

Although generating a class for every percentage seems like it would create a lot of unused classes, you'll quickly notice that the amount of "duplicate" code is actually reduced to only the different class' width. Also note that you can adjust the size of the column steps to fit your needs in the [variables.less](src/definitions/variables.less). 


## Documentation

You can find detailed documentation [here](DOCUMENTATION.md). 


### Quick start

- [Download a release](https://github.com/batteries-css/batteries-layout/releases/latest)
- Clone the repository
	- then run `npm install`
	- and `gulp`


## Bugs and feature requests

Remember that this project started out as an experiment, so there's no guarantee it will actually work in production. If you find a bug or you have an idea of how to improve batteries-layout, just [file a new issue](https://github.com/batteries-css/batteries-layout/issues/new). 


## License

All code in this repository is released under the [MIT license](LICENSE). 