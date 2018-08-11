# First-Date.js
This is my Toolbox for Exploratory Data Analysis, especially for datasets I'm seeing for the first time. It handles rectangular datasets in various formats. Results may be printed to the console or in some cases, added as SVG images to the host html file. Datasets can also be exported in easy-to-read formats for R, SAS, Python, Excel, etc. 

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

Many of the utilities in this library require assigning data to a ***dataset***, which can accommodate four input data formats. Each should be formatted as in one of the examples:

- One-dimensional array
  `let my_data = [1979, 1941, 1977, 2009, 2009, 2011, 2016];`
- Two-dimensional array
  `var some_data = [["Matthew", 39, false],["Joel", 40, true], ["Kirstin", 41, true],["Zohar, 10, false]];`
  
- Object-of-arrays
  `var dataset = {"age": [4, 8, 11, 40, 41], "hobby": ["trains", "dance", "gymnastics", "camping", "marathons"]};`
  
- Array-of-objects
  `var data_frame = [{"ssn": 323791234, "alive": false}, {"ssn": 999103014, "alive": true}, {"ssn": 172330101, "alive":true}];`

### Dataset Functions

 - `FD.dataset(name, d)`: Creates a dataset assigned to ***name*** with data ***d***. ***d*** must be in one the four valid structures (see above). If ***d*** is not an Object-of-arrays, it will be converted to one. If no name is specified, function will return a list of available datasets.

 - `FD.data(name)`: Returns dataset assigned to ***name***. Output will be formatted as an Object-of-arrays.
 
 - `FD.declare_id(name, variable)`: Sets metatdata ID flag on ***variable*** to `true`. ***name*** refers to the target dataset.
 
 - `FD.undeclare_id(name, variable)`: Sets metatdata ID flag on ***variable*** to `false`. ***name*** refers to the target dataset.
 
 -`FD.common_variables(d1, d2)`: Returns array of variable names common to both datasets ***d1*** and ***d2***.
 
 -`FD.print_dataset(d)`: Prints dataset ***d*** to the console and the log.
 
 -`FD.drop(d, variables)`: Removes ***variables*** from dataset ***d***. ***d*** must be a string. ***variables*** must be an array of string variable names.
 
 -`FD.glue(top, bottom)`: Returns concatenation of datasets ***top*** and ***bottom***. Result will be an Array-of-objects. 
 
 -``:
 
 -``:
 
 -``:
 
 -``:
 
 -``:

### Array Functions

 -``:
 
 -``:
 
 -``:
 
 -``:
 
 -``:
 
 
 ### Randomness

 -``:
 
 -``:
 
 -``:
 
 -``:
 
 -``:

### Combinatorics

 -``:
 
 -``:
 
 -``:
 
 -``:
 
 -``:
 
 ### Set Operators

 -``:
 
 -``:
 
 -``:
 
 -``:
 
 -``:
 
 ### Arithmetic Operators

 -``:
 
 -``:
 
 -``:
 
 -``:
 
 -``:
### Logging & Settings

- `FD.show_log()`: Print the session log to the console.

- `FD.save_log()`: Downloads the log as a text file. By default, the file name is the session ID.

- `FD.user_update(message)`: Adds ***message*** to the log. 

- `FD.settings(setting, value)`: Modifies session settings so ***setting*** equals ***value***. If ***setting*** is not specified, returns a list of settings and their current values. 


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
