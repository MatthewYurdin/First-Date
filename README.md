# First-Date.js
This is my Toolbox for Exploratory Data Analysis. It handles rectangular datasets in various formats. Results are printed to the console or added as SVG images to the host html file. Datasets can be exported in easy-to-read formats for R and Python. 

## Quick Start

Just include session_management.js, dataset_utils.js and analysis_utils.js in `<script>` tags.

'''
<html>
  <head>   
    <script type="text/javascript" src="scripts/session_management.js"></script>
    <script type="text/javascript" src="scripts/dataset_utils.js"></script>
    <script type="text/javascript" src="analysis_utils.js"></script>
  </head>
  <body>
  </body>
</html>
'''

## Documentation

### Valid Formats

The functions will accommodate four rectangular data formats. Each should be assigned as in the following examples:

- One-dimensional array
  `var my_data = [1979, 1941, 1977, 2009, 2009, 2011, 2016];`
- Two-dimensional array
  `var some_data = [["Matthew", 39, false],["Joel", 40, true], ["Kirstin", 41, true],["Zohar, 10, false]];`
  
- Object-of-arrays
  `var dataset = {"age": [4, 8, 11, 40, 41], "hobby": ["trains", "dance", "gymnastics", "camping", "marathons"]};`
  
- Array-of-objects
  `var data_frame = [{"ssn": 323791234, "alive": false}, {"ssn": 999103014, "alive": true}, {"ssn": 172330101, "alive":true}];`


### Randomness

These functions come from dataset-utils.js.

- random():
- shuffle():
- random_sample():,
- noise():
- coin_flip():
- plus_or_minus():
- dummy_array():,

### Inspection & Combination
Most of the following functions are overloaded and can handle an array or scalar values, an array of o...

- metadata():
- scalar():
- distinct_values():
- distinct():
- includes_element():
- includes_property():
- insert():
- remove():
- glue():
- marry():
- transform():
- save_data():

### Set Operators

- union():
- intersection():
- difference:

### Combinatorics

- factorial():
- combinations():
- subsets():
- multicombinations():

### Sorting

- compare_ascending():
- compare_descending():

### Univariate distributions & central tendencies

- min():
- max():
- mean():
- median():
- mode():
- mad():
- variance():
- gini():
- impurity():
- stemplot
### Data missingness

### Anomoly-detection
 
### Clustering

- distance_matrix():
- reduction_sort():

### Contingency Tables

- contingency_table():
- fisher_exact():
- chisq():

### Comparing Distributions
- Kvunch.mann_whitney: function(x, y){ return _mann_whitney( x, y ); },
- Kvunch.wilcoxon: function(x, y){ return _mann_whitney( x, y ); },
- Kvunch.jaccard1
- Kvunch.jaccard2
- Kvunch.consistency



## Other Stuff

- Basic.show_log
- Basic.save_log
- Basic.user_update
- Basic.settings
