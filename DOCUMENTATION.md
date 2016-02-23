# batteries-layout / Documentation


### Table of contents
- [Containers](#containers)
- [Centered containers](#centered-containers)
- [Grid system](#grid-system)
- [Helpers](#helpers)


## Containers

batteries containers are just like the containers you're used to, they stay in the center of the screen to match [`@viewport-width-desktop`](src/definitions/variables.less) and resize as soon as the viewport is too small for the container to fit in. 

```html
<div class="container">
	content in container
</div>
```


## Centered containers

Remember the last time you needed to search how to center something? It's now as simple as writing: 

```html
<div class="page sized container">
	<div class="fully centered">
		I'm centered
	</div>
</div>
```

The `page sized` class is optional, the inner container supports `fully`, `vertically` and `horizontally` centering. 


## Grid system

The batteries grid is similar to other grids. Please note that, depending on your configuration in the [variables.less](src/definitions/variables.less), the availabilty of certain percentages may differ from this example. 

```html
<div class="grid">
	<div class="row">
		<div class="column">
			100% wide
		</div>
	</div>
	<div class="forced stacked row">
		<div class="50% column">
			50% wide
		</div>
		<div class="3/6 column">
			50% wide. 
		</div>
	</div>
	<div class="mobile stacked row">
		<div class="1/3 column">
			33% wide
		</div>
		<div class="4/6 column">
			all fractions (in [0, 1]) of three and of six are available
		</div>
	</div>
</div>
```

The `grid` block can additionally be a container, so all container rules apply to it too. 


## Helpers
`fluid` blocks take up 100% width. 

```html
<input class="fluid text field">
```