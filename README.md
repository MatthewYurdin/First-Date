# First-Date.js
This is my Toolbox for Exploratory Data Analysis, especially datasets I'm handling for the first time. It handles rectangular datasets in various formats. Results may be printed to the console or added as SVG images to the host html file. Datasets can be exported in easy-to-read formats for R, SAS, Python, Excel, etc. 

## Quick Start

Just include `<script>` tags for FD.js and your data.

```
<html>
  <head>   
    <script type="text/javascript" src="scripts/FD.js"></script>
    <script type="text/javascript" src="scripts/my_data.js"></script>
  </head>
  <body>
  </body>
</html>
```

## Documentation

### Valid Formats

Most of the utilities in this library require assigning data to a ***dataset***, which can accommodate four input data formats. Each should be formatted as in the following examples:

- One-dimensional array
  `let my_data = [1979, 1941, 1977, 2009, 2009, 2011, 2016];`
- Two-dimensional array
  `var some_data = [["Matthew", 39, false],["Joel", 40, true], ["Kirstin", 41, true],["Zohar, 10, false]];`
  
- Object-of-arrays
  `var dataset = {"age": [4, 8, 11, 40, 41], "hobby": ["trains", "dance", "gymnastics", "camping", "marathons"]};`
  
- Array-of-objects
  `var data_frame = [{"ssn": 323791234, "alive": false}, {"ssn": 999103014, "alive": true}, {"ssn": 172330101, "alive":true}];`

### Dataset Functions

 - `dataset(name, d)`: Creates a dataset assigned to ***name*** with data ***d***. ***d*** must be in one the four valid structures (see above). If ***d*** is not an Object-of-arrays, it will be converted to one. If no name is specified, function will return a list of available datasets.

 - `data(name)`: Returns dataset assigned to ***name***. Output is formatted as an Object-ofarrays.
 
 - `declare_id(name, variable)`: Sets metatdata ID flag on ***variable*** to `true`. ***name*** refers to the target dataset. 
 
### Logging & Settings

- show_log():
- save_log():
- user_update():
- settings():

### Randomness

- random_element():
- shuffle():
- random_sample():,
- random_int():
- random_real():
- coin_flip():
- plus_or_minus():
- dummy_array():

### Inspection & Combination

- metadata():
- print_data():
- scalar():
- distinct_values():
- includes_element():
- includes_property():
- drop():
- TODO glue():
- TODO marry():
- standardize_structure():
- save_data():

### Arithmetic

 - sum():
 - product():
 - TODO string_sum():
 - TODO string_product():
 - TODO string_quotient():
    
### Set Operators

- union():
- intersection():
- difference():

### Combinatorics

- factorial():
- combinations():
- permutations():
- subsets():
- multicombinations():

### Sorting

- ascending():
- descending():

### Univariate Distributions & Central Tendencies

- TODO min():
- TODO max():
- TODO mean():
- TODO median():
- TODO mode():
- TODO mad():
- TODO variance():
- TODO gini():
- TODO impurity():
- TODO stemplot():

### Data Missingness

- TODO corpus_plot():

### Anomoly-detection

- TODO thread_plot(): 

### Clustering

- TODO distance_matrix():
- TODO reduction_sort():

### Contingency Tables

- TODO contingency_table():
- TODO fisher_exact():
- TODO chisq():

### Comparing Distributions
- TODO super_stemplot():
- TODO mann_whitney():
- TODO wilcoxon():
- TODO jaccard1():
- TODO jaccard2():
- TODO consistency():

### Detecting Relationships

- maeda_plot():
