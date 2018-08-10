# First-Date.js
This is my Toolbox for Exploratory Data Analysis. It handles rectangular datasets in various formats. Results are printed to the console or added as SVG images to the host html file. Datasets can be exported in easy-to-read formats for R, SAS, Python, or Excel. 

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

The library will accommodate four rectangular data formats. Each should be assigned as in the following examples:

- One-dimensional array
  `var my_data = [1979, 1941, 1977, 2009, 2009, 2011, 2016];`
- Two-dimensional array
  `var some_data = [["Matthew", 39, false],["Joel", 40, true], ["Kirstin", 41, true],["Zohar, 10, false]];`
  
- Object-of-arrays
  `var dataset = {"age": [4, 8, 11, 40, 41], "hobby": ["trains", "dance", "gymnastics", "camping", "marathons"]};`
  
- Array-of-objects
  `var data_frame = [{"ssn": 323791234, "alive": false}, {"ssn": 999103014, "alive": true}, {"ssn": 172330101, "alive":true}];`


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
