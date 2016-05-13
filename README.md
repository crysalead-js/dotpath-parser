# dotpath-parser

[![Build Status](https://travis-ci.org/crysalead-js/dotpath-parser.svg?branch=master)](https://travis-ci.org/crysalead-js/dotpath-parser)

Splits a dotted path string into an Array of keys where string keys represent Object properties while integer keys represent Array indices.

## Usage

```js
dotpath('this.is.0.an.1.example');
// => [ 'this', 'is', 0, 'an', 1, 'example' ]
```
