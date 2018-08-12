# First-Date.js
This is my toolbox for exploring datasets that I'm seeing for the first time. It can handle rectangular datasets in various formats (see below). Results may be printed to the console or, in some cases, added as SVG images to the host html file. Data can also be exported in easy-to-read formats for R, SAS, Python, Excel, etc. 

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

Many of the functions in this library require first assigning data to a ***dataset***, which can accommodate four input data formats:

- **One-dimensional array**
  `let my_data = [1979, 1941, 1977, 2009, 2009, 2011, 2016];`

- **Two-dimensional array**
  `var some_data = [["Matthew", 39, false],["Joel", 40, true], ["Kirstin", 41, true],["Zohar, 10, false]];`
  
- **Object-of-arrays**
  `var dset = {"age": [4, 8, 11, 40, 41], "hobby": ["trains", "dance", "gymnastics", "camping", "marathons"]};`
  
- **Array-of-objects**
  `var data_frame = [{"ssn": 323791234, "alive": false}, {"ssn": 999103014, "alive": true}, {"ssn": 172330101, "alive":true}];`

### Logging & Settings

- `FD.show_log()`: Print the session log to the console.

- `FD.save_log()`: Downloads the log as a text file. By default, the file name is the session ID.

- `FD.user_update(message)`: Adds ***message*** to the log. 

- `FD.settings(setting, value)`: Modifies session settings so ***setting*** equals ***value***. If ***setting*** is not specified, returns a list of settings and their current values. 


### Data Management

 - `FD.dataset(name, d)`: Creates a dataset assigned to `name` with data `d`. `d` must be in one of the four valid structures (see above). If `d` is not an Object-of-arrays, it will be converted to one. If `name` is not specified, function will return a list of available datasets.

 - `FD.metadata(arr)`: Returns a metadata object:
    ```
    {"structure":"1d-array"|"2d-array"|"array_of_objects"|"object_of_arrays",
         "valid":true|false,
         "variables": {
           "name": Name or index,
           "type":"string"|"integer"|"real"|"boolean"|"mixed",
           "id": true|false,
           "missing": # of cases,
           "nonmissing": # of cases,
           "display_width": # of characters
           "valid": true|false
         }
       }
    ```
 - `FD.standardize_structure(d)`: Returns dataset `d` converted to an Array-of-objects. 'd' must be in one of the four supported formats.
 
 - `FD.extract(name)`: Returns dataset assigned to `name`. Output will be formatted as an Object-of-arrays.
 
 - `FD.declare_id(name, variable)`: Sets metatdata ID flag on `variable` to `true`. `name` refers to the target dataset.
 
 - `FD.undeclare_id(name, variable)`: Sets metatdata ID flag on `variable` to `false`. `name` refers to the target dataset.
 
 - `FD.common_variables(name1, name2)`: Returns an array of variable names common to both datasets ***name1*** and ***name2***.
 
 - `FD.print_dataset(name)`: Pretty-prints dataset `name` to the console and the session log.
 
 - `FD.save_data(name, file_name)`: Downloads dataset `name` as `file_name`, which should include file extension. Supported file formats: `.js`, `.json`, `.csv`, `.tsv`, `.R`, `.py`. 
 
 - `FD.drop(name, variables)`: Removes `variables` from dataset `name`. `variables` must be an array of string variable names.
 
 - `FD.glue(name1, name2)`: Returns concatenation of datasets `name1` and `name2`. Result will be an Array-of-objects. 
 
 - `FD.inner_join(name1, name2)`: Returns an Array-of-objects including only matching observations from datasets `name1` and `name2`. Matching is done on all variables common to both datasets. All variables are retained.

 - `FD.left_join(name1, name2)`: Returns an Array-of-objects including only observations from the dataset `name1` and matching observations from dataset `name2`. Retains all variables.

 - `FD.includes_element(arr, element)`: Returns `true` if `element` is found in `arr`, which may be an Array or a String; otherwise returns false. 
 
 - `FD.includes_property(obj, prop)`: Returns `true` if `prop` is a property of `obj`; otherwise, returns false.
 
 - `FD.distinct_values(arr)`: Returns an array of distinct values from `arr`.
 
 ### Randomness

 - `random_element(arr)`: Returns a randomly-chosen element from Array `arr`.
 
 - `shuffle(name)`: Shuffles dataset `name` in place.
 
 - `random_sample(name, n)`: Returns a simple random sample (Array-of-objects) of `n` records from dataset `name`.
 
 - `random_int(max = 1000000)`: Returns a randomly-chosen integer between zero and `max`.
 
 - `random_real(max, precision = 5)`: Returns a randomly-chosen real number (with `precision` places to the right of the decimal point) between 0 and `max`. 
 
 - `coin_flip(proportion = 0.5000)`: Returns a randomly-chosen boolean value assuming a population where `proportion` of values are `true`. 
 
 - `plus_or_minus(x, shift)`: Returns either (`x` - `shift`) or (`x` + `shift`) assuming random selection from a population evenly split between the two.
 
 - `dummy_array(N = 1000, mode = 'empty')`: Returns Array of length `N` and data type (i.e., integer, real, order, rank, ID, string, or null value) equal to `mode`.

### Combinatorics

- `factorial(num)`: Returns `num`!, i.e., `num` x (`num` - 1) x (`num` - 2) ... x (`num` - (`num` - 1)) 

- `combinations(n, k)`: Returns the number of combinations of `k` items that can be chosen from a collection `n` total items, where the order of items does not matter.

- `permutations(n, k)`: Returns the the number of permutations of `k` items that can be chosen from a collection of `n` total items, in which the order of items defines a single permutation.

- `subsets(n)`: Returns the number of possible subsets that can be chosen from `n` items.

- `multicombinations(n, k)`: Returns the number of sequence of `k` not necessarily distinct items chosen from collection of `n` items, where order is not taken into account.


 
 ### Set Operators

- `union(x, y)`: Returns elements found in either Array `x` or Array `y`.

- `intersection(x, y)`: Returns elements found in both Array `x` and in Array `y`.

- `difference(x, y)`: Returns elements found in array ***x*** but not found in array ***y***.

 
 ### Arithmetic Operators

### Arithmetic

 - `sum(arr, key = null)`:
 
 - `product(arr, key = null)`:
 
 - **TODO** `string_sum(x, y)`:
 
 - **TODO** `string_product(x, y)`:
 
 - **TODO** `string_quotient(dividend, divisor)`:

### Sorting

- `ascending()`: Function to supply to `Array.sort()`.
- `descending()`: Function to supply to `Array.sort()`

### Univariate Distributions & Central Tendencies

- TODO `min()`:
- TODO `max()`:
- TODO `mean()`:
- TODO `median()`:
- TODO `mode()`:
- TODO `mad()`:
- TODO `variance()`:
- TODO `gini()`:
- TODO `impurity()`:
- TODO `stemplot()`:

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
