# Kvunch.js
This is my Toolbox for Data Analysis of the everyday, nothing-too-weird variety. It's Vanilla JavaScript only, but depends on Basic.js, which handles logs, names, and list operators, and Rumpf.js, which exports datasets formatted for R and Python. 

## Quick Start

Just include Basic.js, Rumpf.js and Kvunch.js in `<script>` tags.

'''
<html>
  <head>   
    <script type="text/javascript" src="Basic_0_0_2.js"></script>
    <script type="text/javascript" src="Rumpf_0_0_1.js"></script>
    <script type="text/javascript" src="Kvunch_0_0_2.js"></script>
  </head>
  <body>
  </body>
</html>
'''

## Documentation

### Randomness

These functions come from Basic.js.

- Basic.random: function( a ){return _random( a ); },
- Basic.shuffle: function( a ) {return _shuffle( a ); },
- Basic.random_sample: function( a, b ) {return _random_sample( a, b ); },
- Basic.noise: function( a ){return _noise( a ); },
- Basic.coin_flip: function( a ){return _coin_flip( a ); },
- Basic.plus_or_minus: function( a, b ){return _plus_or_minus( a, b ); },
- Basic.dummy_array: function( a, b ){return _dummy_array( a, b ); },noise: function( a ){return _noise( a ); },

### List Operators
Most of the following functions are overloaded and can handle an array or scalar values, an array of o...

- Basic.distinct: function( a ){return _distinct( a ); },
- Basic.includes: function( a, b ){return _includes( a, b ); },
- Basic.insert: function( a, b, c ){ return _insert( a, b, c ); },
- Basic.remove: function( a, b ){return _remove( a, b ); },
- Basic.flatten: function( a ){return _flatten( a ); },
- Basic.glue: function( a, b ) {return _glue( a, b ); },
- Basic.marry: function( a, b ) {return _marry( a, b ); },
- Basic.transform: function( a ){return _transform( a ); },

### Set Operators

- Basic.union: function( a, b ) {return _union( a, b ); },
- Basic.intersection: function( a, b ) {return _intersection( a, b ); },
- Basic.difference: function( a, b ) {return _difference( a, b ); },

### Sorting

- Basic.ascending
- Basic.descending

### Typing

- Basic.scalar: function( a ){ return _scalar( a ); },
- Basic.detect_layout: function( a ){ return _detect_layout( a ); },

### Resampling

- Kvunch.random_permutation
- Kvunch.bootstrap

### Clustering

- Kvunch.distance_matrix
- Kvunch.reduction_sort

### Contingency Tables

- Kvunch.contingency_table
- Kvunch.fisher_exact
- Kvunch.chisq

### Describing Univariate Distributions

- Kvunch.min: function(x){return _min(x); },
- Kvunch.max: function(x){return _max(x); },
- Kvunch.mean: function(x, y){return _mean(x, y); },
- Kvunch.median: function(x){return _median(x);},
- Kvunch.mode: function(x){return _mode(x);},
- Kvunch.variance: function(x){return _variance(x); },
- Kvunch.gini: function(x){return _gini(x); },
- Kvunch.impurity: function(x){return _impurity(x); },

### Comparing Distributions
- Kvunch.mann_whitney: function(x, y){ return _mann_whitney( x, y ); },
- Kvunch.wilcoxon: function(x, y){ return _mann_whitney( x, y ); },
- Kvunch.jaccard1
- Kvunch.jaccard2
- Kvunch.consistency

## Combinatorics
- Kvunch.factorial

## Other Stuff

- Basic.show_log
- Basic.save_log
- Basic.user_update
- Basic.settings
