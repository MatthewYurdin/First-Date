// SORTS ----------------------------------------------------- //
   
const ascending = (a, b) => a - b;

const descending = (a, b) => b - a;

// RANDOMNESS ------------------------------------------------ //

/**
 * Returns a random element from an array.
 * @param {object} arr - The array to randomly select from.
*/
const random_element = arr => arr[random_int(arr.length - 1)];

/**
 * Shuffles an array in-place.
 * @param {object} arr - The array to shuffle.
*/
const shuffle = arr => {
  let i = 0, j = 0, temp = null
  for (i = arr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  //why is this return value necessary?
  return true;
};

/**
 * Returns a random sample of size n from an array.
 * @param {object} arr - The array to randomly select from.
 * @param {number} n - The number of cases to select.
*/
const random_sample = (arr, n) => {
  let frame = arr.slice(0);
  shuffle(frame);
  return frame.filter((f, index) => index < n);
};

/**
 * Returns a random intenger between zero and max.
 * @param {number} max - The maximum of the range to select from. Defaults to 1,000,000.
*/
const random_int = (max = 1000000) => Number((Math.random() * max).toFixed(0));

/**
 * Returns a random real nuber between zero and max.
 * @param {number} max - The maximum of the range to select from. Defaults to 1,000,000.
 * @param {number} precision - The amount of numbers to the right of the decimal point. Defaults to 5.
*/
const random_real = (max = 1000000, precision = 5) => Number((Math.random() * max).toFixed(5));

//Returns random boolean assuming specified proportion of true values
/**
 * Returns a random boolean value.
 * @param {number} proportion - The assumed proportion of true value in the population. Defaults to 0.500.
*/
const coin_flip = (proportion = 0.5000) => (Math.random() <= proportion) ? true : false;

/**
 * Returns either (x - shift) or (x + shift) assuming random selection from a population evenly split between the two.
 * @param {number} x - The number to randomly add or substract shift from.
 * @param {number} shift - The number to randomly add or substract from x.
*/
const plus_or_minus = (x, shift) => coin_flip() ? x + shift : x - shift;

/**
 * Returns an array of length N and data type (i.e., integer, real, order, rank, ID string, or null value) equal to mode
 * @param {number} N - The length of the array to generate.
 * @param {number} mode - The data type with which to fill the array.
*/
const dummy_array = (N = 1000, mode = 'empty') => {
  // modes: empty, order, boolean, numbers, words, IDs
  let dummy = [];
  for (let i = 0; i < N; i++){
    if (mode == 'empty') {
      dummy.push(null);
    }
    else if (mode == 'order') {
      dummy.push(i);
    }
    else if (mode == 'rank') {
      dummy.push(i + 1);
    }
    else if (mode == 'boolean') {
      dummy.push(coin_flip());
    }
    else if (mode == 'real') {
      dummy.push(random_real(1000000));
    }
    else if (mode == 'integer') {
      dummy.push(random_int(1000000));
    }
    else if (mode == 'ids') {
      dummy.push(generate_id(12));
    }
  }
  return dummy;
};

// COMBINATORICS ------------------------------------------------ //

/**
 * Returns the factorial of {num}.
 * @param {number} num - Must be less than 40.
*/
const factorial = num => {
  //if less than 20, compute actual factorial
  //if between 20 and 39, compute Stirling approximation
  //if 40 or more, return null
  //TODO handle cases >= 40 with string arithmetic
  if (num === 0 || num === 1) {
    return 1;
  }
  else if (num < 20) {
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  else if (num < 40) {
    return Math.ceil(Math.sqrt(2 * Math.PI * num) * Math.pow((num / Math.E ), num));
  }
  else {
    throw new Error('factorial() can presently handle only inputs less than 40');
  }
};

/**
 * Returns the the number of different combinations of {k} items that can be chosen from {n} total items.
 * @param {number} n - The number of items to choose from.
 * @param {number} k - The number of items to choose
*/

const combinations = (n, k) => factorial(n) / (factorial(k) * factorial(n - k));

/**
 * Returns the the number of different combinations of {k} not-necessarily-unique items that can be chosen from {n} total items.
 * @param {number} n - The number of items to choose from.
 * @param {number} k - The number of items to choose
*/
const multicombinations = (n, k) => combinations((n + k - 1), k);

/**
 * Returns the the number of possible subsets of any length that can be chosen from {n} total items.
 * @param {number} n - The total number of items to choose from.
*/
const subsets = n => Math.pow(2, n);

/**
 * Returns the the number of different permutations of {k} items that can be chosen from {n} total items.
 * @param {number} n - The number of items to choose from.
 * @param {number} k - The number of items to choose
*/
const permutations = (n, k) => factorial(n) / factorial(n - k);


// ARITHMETIC ------------------------------------------------ //

/**
 * Returns the sum of values in {array} or {array[key]}.
 * @param {array} arr - May be 1d_array, a 2d_array with {key} equal to index, an array_of_objects with {key} equal to the target property.
 * @param {string|index} key - Optional. The target index of a 2d_array or the target property name of an array_of_objects
*/
const sum = (arr, key = null) => {
	let value = 0;
	for (let a = 0; a < arr.length; a++ ){
		value += (!!key) ? arr[a][key] : arr[a];
	}
	return value;
}

/**
 * Returns the product of values in {array} or {array[key]}.
 * @param {array} arr - May be 1d_array, a 2d_array with {key} equal to index, an array_of_objects with {key} equal to the target property.
 * @param {string|index} key - Optional. The target index of a 2d_array or the target property name of an array_of_objects
*/
const product = (arr, key = null) => {
	let value = 0;
	for (let a = 0; a < list.length; a++){
		value *= (!!key) ? arr[a][key] : arr[a];
	}
	return value;
};


// DATA INSPECTION, COMBINATION, TRANSFORMATION ----------------/

/* There are four valid dataset structures

  Object of arrays...{"label":[1,2,3,4,5],"age":[6,7,8,9,0]}

  Array of objects...[{"name":"mike","alive":true},{"name":"mozart","alive":false}]

  One-dimensional array...[5,4,6,7,9]

  Two_dimensional array...[["adam", "andrew", "alex"],["jermaine", "jack", "joshua"],["nero", "nike", "nick"]]

*/

/**
 * Returns true of {element} is in {list}, which may be an array or a string.
 * @param {array|string} list - The array or string in which to search for {element}.
 * @param {value} element - The value or substring to search {list} for,
*/
const includes_element = (list, element) => (list.indexOf(element) > -1);

/**
 * Returns true {prop} is a property of {list}, which must be an object.
 * @param {object} list - The object in which to search for property {prop}.
 * @param {string} prop - The name of a property to search for.,
*/
const includes_property = (list, prop) => includes_element(Object.keys(list), prop);

/**
 * Returns an array of distinct values from array {arr}.
 * @param {array} arr - The array containing all the non-necessarily-unique values.
*/
const distinct_values = (arr) => {
  let result = [];
  for (let i=0; i < arr.length; i++){
    if (arr[i] !== null){
      if (!includes_element(result, arr[i])) result.push(arr[i]);
    }
  }
  return result;
}

/**
 * Returns number of unique values in array {arr}. This includes null values.
 * @param {array} arr - The array of all the values.
*/
//TODO handle empty places in array?
const count_missing_values = (arr) => arr.filter(f => (!f)).length;

/**
 * Returns true if value {thing} is of type string, number, or boolean.
 * @param {    } thing - The value to test.
*/
const scalar = thing => (/string|number|boolean/).test(typeof thing);

/**
 * Returns type (string, intenger, real, boolean, mixed) of values in {arr}.
 * @param {array} arr - The array of values to check for type.
*/
const detect_type = (arr) => {
  let types = [];
  for (let i = 0; i < arr.length; i++){
    if (!scalar(arr[i])){
      throw new Error("User provided non-scalar data to detect_type().")
    } else {
      if (typeof arr[i] === "number"){
        if (arr[i].toString().indexOf(".") > -1){
          types.push("real");
        } else {
          types.push("integer");
        }
      }
      else {
        types.push(typeof arr[i]);
      }
    }
  }
  let dv = distinct_values(types);
  if (dv.length === 1) {
    return types[0];
  }
  else if ((dv.length === 2) && (includes_element(dv, "integer")) && (includes_element(dv, "real"))) {
    return "real";
  }
  else if (dv.length > 1) {
    return 'mixed';
  }
  else {
    return null;
  }
}

/**
 * Returns useful information of values in {arr}.
 * @param {array} arr - The array of values to probe.
 * @param {string|intenger} name - The variable name or array index to give to data in {arr}.
*/
const test_variable = (arr, name) => {
  const variable = {};
  variable.name = name;
  variable.missing = count_missing_values(arr);
  variable.nonmissing = arr.length - variable.missing;
  let values = distinct_values(arr);
  variable.distinct = values.length;
  variable.type = detect_type(values);
  variable.id = ((includes_element(["integer", "string"], variable.type)) && (variable.missing === 0)) ? true : false;
  variable.valid = ((variable.type !== "mixed" ) && (variable.nonmissing > 0)) ? true : false;
  display_widths = arr.map(m => (m === null) ? 1 : m.toString().length);
  display_widths.push(name.toString().length);
  variable.display_size = display_widths.sort(descending)[0];
  return variable;
}

const test_1d = (arr) => {
  let result = {};
  result.structure = "1d_array"
  result.variables = [];
  result.variables.push(test_variable(arr, 0));
  result.valid = (result.variables[0].valid) ? true : false;
  return result;
}

const test_2d = (arr) => {
  let result = {};
  result.structure = '2d_array';
  result.variables = [];
  for (let i = 0; i < arr[0].length; i++){
    result.variables.push(test_variable(arr.map(m => m[i]), i));
  }
  result.valid = (result.variables.filter(f => f.valid).length > 0) ? true : false;
  return result;
}

const test_array_of_objects = list => {
  const result = {};
  result.structure = 'array_of_objects';
  result.variables = [];
  const props = Object.keys(list[0]);
  for (let i = 0; i < props.length; i++){
    result.variables.push(test_variable(list.map(m => m[props[i]]), props[i]));
  }
  result.valid = (result.variables.filter(f => f.valid).length > 0) ? true : false;
  return result;
}

const test_object_of_arrays = list => {
  const result = {};
  result.structure = 'object_of_arrays';
  result.variables = [];
  const props = Object.keys(list);
  for (let i = 0; i < props.length; i++){
    result.variables.push(test_variable(list[props[i]], props[i]));
  }
  result.valid = (result.variables.filter(f => f.valid).length > 0) ? true : false;
  return result;
}

/**
 * Returns a metadata object See below.
 * @param {object} dataset - The object to derive metadata from.
 * metaadata() returns an object:
    
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
*/
const metadata = dataset => {
  let result;
  if (dataset) {
    if (Array.isArray(dataset)) {
      const test_value = dataset[0];
      if (Array.isArray(dataset[0])){
        result = test_2d(dataset);
      }
      else if (typeof test === "object"){
        result = test_array_of_objects(dataset);
      }
      else {
        result = test_1d(dataset);
      }
    }
    else {
      result = test_object_of_arrays(dataset);
    }
    if (result.valid) return result;
  }
  throw new Error("metadata(): No valid data provided");

}

const common_elements = (arr1, arr2) => {
  let common = [];
  for (i in arr1){
    if (includes_element(arr2, i)) common.push(i);
  }
  for (j in arr2){
    if (includes_element(arr1, j)) common.push(j);
  }
  return distinct_values(common);
}

/**
 * Prints {dataset} to the console and the log.
 * @param {object}  dataset.
 *
*/
const print_data = (dataset) => {
  let std = standardize_structure(dataset);
  let msg = "print_data(): Dataset (" + std.standard.length + " rows):\n\n" + print_text(std, "\t");
  console.log(msg);
  update_log(Date.now(), msg);
}

/**
 * Returns a new object combining {top} and {bottom}.
 * @param {array|object} top - Dataset.
 * @param {array|object} bottom - Dataset.
 * TODO limit 2d_array case to equal inner array length; limit array_of_objects case to common properties
*/
const glue = (top, bottom, ) => {
  const top_md = metadata(top);
  const bottom_md = metadata(bottom);
  if (top_md.structure === bottom_md.structure){
    if (includes_element(["1d_array","2d_array","array_of_objects"], top_md.structure)) {
      return top.concat(bottom);
    }
    else if (top_md.structure === "object_of_arrays"){
      let common = common_elements(top_md.variables.map(a => a.name),bottom_md.variables.map(a => a.name));
      let result = {};
      for (c in common){
        result[c] = (top.map(m => m[c])).concat(bottom.map(m => m[c]));
      }
      return result;
    }
  } else {
    throw new Error("glue(): datasets must be of same type");
  }
}

const marry = (left, right) => [];

const drop = (dataset, properties = []) => {
  let meta = metadata(dataset);
  if (meta.structure === ("object_of_arrays")){
    for (let i = 0; i < properties.length; i++){
      dataset.delete(properties[i]);
    }
    return true;
  }
  else if (meta.structure === ("array_of_objects")){
    for (let i = 0; i < dataset.length; i++){
      for (let j = 0; j < properties.length; j++){
        dataset[i].delete(properties[j]);
      }
    }
    return true;
  }
  else {
    throw new Error("drop(): Input may only be 'object_of_arrays' or 'arrays_of_objects.'");
  }
}

// SET OPERATORS --------------------------------/

//Return unique elements in either x or y
const union = (x, y) => distinct_values(glue(x, y));

//Return unique elements found in both x and y
const intersection = (x, y) => union(x, y).filter(f => ((includes_element(x, f)) && (includes_element(y, f))));

//Return array x minus array y
const difference = ( x, y ) => {
  const inter = intersection( x, y );
  return union(x, y).filter(f => includes_element(inter, f) === false);
};

//TODO add functions that format dataset for output
/**
 * Downloads a dataset.
 * @constructor
 * @param {object} dataset - The name of the dataset object.
 * @param {string} filename - The file name, including file extension, of the downloaded dataset. Valid output formats: .js, .json, .csv, .tsv, .json, .R, or .py. See _____ for examples.
 */
const save_data = (dataset, file_name) => {
    let file_format = file_name.split(".")[1];
    console.log("file_format: " + file_format);
    let mime;
    if (file_format === 'json') {
        mime = 'text/json';
        dataset = JSON.stringify(dataset);
    }
    if (file_format === 'js') {
        mime = 'text/javascript';
        dataset = 'var ' + file_name.split(".")[0] + ' = ' + JSON.stringify(dataset) + ';';
    }
    else if (file_format === 'csv'){
        mime = 'text/csv';
        dataset = print_text2(standardize_structure(dataset), ",");
    }
    else if (file_format === 'tsv'){
        mime = 'text/tab-separated-values';
        dataset = print_text2(standardize_structure(dataset), "  ");
    }
    else if (file_format === 'R') {
        mime = 'text/x-r';
        dataset = print_r(standardize_structure(dataset), file_name.split(".")[0]);
    }
    else if (file_format === 'py') {
        mime = 'text/x-python';
        dataset = print_py(standardize_structure(dataset), file_name.split(".")[0]);
    }
    else {
        throw new Error('save_data(): Valid output formats are ".js", ".json", ".csv", ".tsv", ".R", or ".py".');
    }
    let element = document.createElement('a');
    element.setAttribute('href', ('data:' + mime + ';charset=utf-8,' + encodeURIComponent(dataset)));
    element.setAttribute('download', file_name);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    //TODO: How do I print name of specified dataset?
    Log.text += update_log(Date.now(), "User downloaded a copy of a dataset as '" + file_name + "'.");
}

const standardize_structure = dataset => {
  const result = {};
  result.meta = metadata(dataset);
  //console.log(JSON.stringify(result.meta));
  if (result.meta.structure === "1d_array"){
    result.standard = dataset.map(m => [m]);
    return result;
  }
  else if (result.meta.structure === "2d_array"){
    result.standard = dataset;
    return result;
  }
  else if (result.meta.structure === "array_of_objects"){
    let names = meta.variables.map(m => m.name);
    let result = {};
    result.standard = [];
    for (let i = 0; i < dataset.length; i++){
      let row = [];
      for (let j = 0; j < names.length; j++){
        row.push(dataset[i][names[j]]);
      }
      result.standard.push(row);
    }
    return result;
  }
  else if (result.meta.structure === "object_of_arrays"){
    let names = result.meta.variables.map(m => m.name);
    console.log(names);
    result.standard = [];
    for (let i = 0; i < dataset[names[0]].length; i++){
      let row = [];
      for (let j = 0; j < names.length; j++){
        row.push(dataset[names[j]][i]);
      }
      result.standard.push(row);
    }
    return result;
  }
}

const add_spaces = (text, size) => {
  let result = text;
  for (let i = 0; i < (size - text.toString().length); i++){
    result += " ";
  }
  return result;
}

const print_text = (d, delim) =>{
  let result = "";
  let variables = d.meta.variables.map(m => m.name);
  let widths = d.meta.variables.map(m => m.display_size);
  for (let i = 0; i < variables.length; i++){
    result += add_spaces(variables[i], widths[i]);
    result += (i === (variables[i] - 1)) ? "" : delim;
  }
  result += "\n";
  for (let i = 0; i < d.standard.length; i++){
    for (let j = 0; j < variables.length; j++){
      result += add_spaces(d.standard[i][j], widths[j]) + delim;
      result += (j === (variables[j] - 1)) ? "" : delim;
    }
    result += "\n";
  }
  return result
}

const print_text2 = (d, delim) =>{
  let result = "";
  let variables = d.meta.variables.map(m => m.name);
  result += variables.join(delim) + "\n";
  for (let i = 0; i < d.standard.length; i++){
    for (let j = 0; j < variables.length; j++){
      result += d.standard[i][j];
      if (j < (variables.length - 1)) {
        result += delim;
      }
      else {
        result += "\n";
      }
    }
  }
  return result
}

const print_r = (d, name) =>{
  const r_convert = (type, value) => {
    console.log(type + " + " + value);
    if (includes_element([null, 'undefined', "NaN"], value)){
      return "NA";
    }
    else if (type === 'character') {
      return ("'" + value + "'");
    }
    else if (type === 'mixed'){
      return ("'" + value + "'");
    }
    else if (type === 'logical'){
      if (value === true){
        return 'TRUE';
      }
      else if (value === false){
        return 'FALSE';
      }
    }
    else {
      return value;
    }
  }
  let result = "setwd()\n" + name + " <- data.frame(";
  const types = {"real": "numeric", "integer": "numeric", "string":"character", "mixed":"character", "boolean":"logical"};
  let vars = d.meta.variables.map(m => [m.name,m.type]);
  for (let i = 0; i < vars.length; i++){
    result += vars[i][0] + " = " + types[vars[i][1]] + "(" + d.standard.length + ")";
    if (i < (vars.length-1)){
      result += ", ";
    }
    else result += ")\n";
  }
  for (let i = 0; i < vars.length; i++){
    result += name + "$" + vars[i][0] + " <- c(";
    for (let j = 0; j < d.standard.length; j++){
      result += r_convert(types[vars[i][1]], d.standard[j][i]);
      if (j < (d.standard.length - 1)) {
        result += ", ";
      }
    }
    result += ")\n";
  }
  return result;
  //Make this:
  //matty <- data.frame(id = character(3), max1 = numeric(3), max2 = numeric(3))
  //matty$id <- c("horrible", "terrible", "hopeless")
  //matty$max1 <- c(1000, 997, 765)
  //matty$max2 <- c(1000, 997, 765)
  
}

const print_py = (d, name) =>{
  const py_convert = (type, value) => {
    if (type === "float") {
      return (!!value) ? value : "NaN";
    }
    else if (type === "int") {
      return (!!value) ? value : "NaN";
    }
    else if (type === "string") {
      return (!!value) ? '"' + value + '"' : '""';
    }
    else if (type === "bool") {
      return (value === true) ? "True" : "False";
    }
  }
  let result = name + " = {";
  const types = {"real": "float", "integer": "int", "string": "string", "boolean": "bool", "mixed": "string"};
  let vars = d.meta.variables.map(m => [m.name,m.type]);
  for (let i = 0; i < vars.length; i++){
    result += ("'" + vars[i][0] + "': [");
    for (let j = 0; j < d.standard.length; j++){
      result += py_convert(types[vars[i][1]], d.standard[j][i]);
      if (j < (d.standard.length - 1)) {
        result += ", ";
      }
      else {
        result += "]";
      }
    }
    if (i < (vars.length - 1)){
      result += ", ";
    }
    else {
      result += "}\n";
    }
  }
  return result;
}