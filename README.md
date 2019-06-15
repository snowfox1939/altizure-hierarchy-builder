# altizure-hierarchy-builder
A tool for building hierarchy of 3D models from [Altizure.com](https://www.altizure.com/) into json file.

## How to use

```js

let hierarchy = buildHierarchy({
  directory: '/your/model/directory'
});

```

## Sample return value

please check sample output in [sample-hierarchy.json](https://github.com/CrashedBboy/altizure-hierarchy-builder/blob/master/sample-hierarchy.json)

* `model` list
  - tree hierarchy of all tiles
* `levels` list
  - each level's x/y boundaries
