// SORTS ----------------------------------------------------- //
   
const ascending = (a, b) => a - b;

const descending = (a, b) => b - a;

// RANDOMNESS ------------------------------------------------ //

const random_element = arr => arr[random_int(arr.length - 1)];

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

//Return simple random sample of n items from arr
const random_sample = (arr, n) => {
  let frame = arr.slice(0);
  shuffle(frame);
  return frame.filter((f, index) => index < n);
};

//Return random integer > 0 and <= max
const random_int = (max = 1000000) => Number((Math.random() * max).toFixed(0));

//Return random real number > 0 and <= max.
const random_real = (max = 1000000, precision = 5) => Number((Math.random() * max).toFixed(5));

//Returns random boolean assuming specified proportion of true values
const coin_flip = (proportion = 0.5000) => (Math.random() <= proportion) ? true : false;

//Returns either (x + shift) or (x - shift) assuming random selection and 50% chance or each
const plus_or_minus = (x, shift) => coin_flip() ? x + shift : x - shift;

//Returns array of length N with values selected by mode
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

const factorial = num => {
  //if less than 20, compute actual factorial
  //if between 20 and 39, compute Stirling approximation
  //if 40 or more, return null
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
    throw new Error('factorial() can presently handle only inputs les than 40');
  }
};

const combinations = (n, k) => factorial(n) / (factorial(k) * factorial(n - k));

const multicombinations = (n, k) => combinations((n + k - 1), k);

const subsets = n => Math.pow(2, n);

const permutations = (n, k) => factorial(n) / factorial(n - k);

//list must be an array
const sum = (list, key = null) => {
	let value = 0;
	for (let a = 0; a < list.length; a++ ){
		value += (key === null) ? list[a] : list[a][key];
	}
	return value;
};

//TODO why does this always return zero?
const product = (list, key = null) => {
	let value = 0;
	for (let a = 0; a < list.length; a++){
		value *= ( key === null ) ? list[a] : list[a][key];
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

const includes_element = (list, element) => (list.indexOf(element) > -1);

const includes_property = (list, prop) => includes_element(Object.keys(list), prop);

const distinct_values = (arr) => {
  let result = [];
  for (let i=0; i < arr.length; i++){
    if (arr[i] !== null){
      
      if (!includes_element(result, arr[i])) result.push(arr[i]);
    
    }
  }
  return result;
}

//TODO handle empty places in array
const count_missing_values = (arr) => {
  let count = 0;
  for (let i=0; i < arr.length; i++){
    if (arr[i] === null) count += 1;
  }
  return count;
}

const scalar = thing => (/string|number|boolean/).test(typeof thing);

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
  result.structure = "1d-array"
  result.variables = [];
  result.variables.push(test_variable(arr, 0));
  result.valid = (result.variables[0].valid) ? true : false;
  return result;
}

const test_2d = (arr) => {
  let result = {};
  result.structure = '2d-array';
  result.variables = [];
  for (let i = 0; i < arr[0].length; i++){
    result.variables.push(test_variable(arr.map(m => m[i]), i));
  }
  result.valid = (result.variables.filter(f => f.valid).length > 0) ? true : false;
  return result;
}

const test_array_of_objects = list => {
  const result = {};
  result.structure = 'array-of-objects';
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
  result.structure = 'object-of-arrays';
  result.variables = [];
  const props = Object.keys(list);
  for (let i = 0; i < props.length; i++){
    result.variables.push(test_variable(list[props[i]], props[i]));
  }
  result.valid = (result.variables.filter(f => f.valid).length > 0) ? true : false;
  return result;
}

/*
    metaadata() returns an object:
    
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
  if (list) {
    if (Array.isArray(list)) {
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

const glue = (top, bottom) => [];

const marry = (left, right) => [];

const insert = (list, index) => true;

const remove = (list, element) => true;

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
    let mime;
    if (file_format == 'txt') {
        mime = 'text/plain';
        dataset = JSON.stringify(dataset);
    }
    if (file_format == 'js') {
        mime = 'text/javascript';
        dataset = 'var ' + file_name.split(".")[0] + ' = ' + JSON.stringify(dataset) + ';';
    }
    else if (file_format == 'csv'){
        mime = 'text/csv';
        dataset = JSON.stringify(dataset);
    }
    else if (file_format == 'tsv'){
        mime = 'text/csv';
        dataset = JSON.stringify(dataset);
    }
    else if (file_format == 'json') {
        mime = 'text/json';
        dataset = JSON.stringify(dataset);
    }
    else if (file_format == 'R') {
        mime = 'text/plain';
        dataset = JSON.stringify(dataset);
    }
    else if (file_format == 'py') {
        mime = 'text/plain';
        dataset = JSON.stringify(dataset);
    }
    else {
        throw new Error('Valid output formats are ".js", ".json", ".csv", ".tsv", ".R", or ".py".');
    }
    let element = document.createElement('a');
    element.setAttribute('href', ('data:' + mime + ';charset=utf-8,' + encodeURIComponent(dataset)));
    element.setAttribute('download', file_name);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    //TODO: How do I print name of specified dataset?
    Log.text += update_log(Date.now(), "User downloaded a copy of a dataset as 'Dataset_" + Log.session + "." + file_format + "'.");
}

const format_output = (dataset, format) => {
  if (format === "js") {
    return "var first_date_data = " + JSON.stringify(dataset) + ";";
  }
  else if (format === "json") {
    return JSON.stringify(dataset);
  }
  else if (format === "csv") {
    return print_text(dataset, "\c");
  }
  else if (format === "tsv") {
    return print_text(dataset, "\t");
  }
  else if (format === "R") {
    return print_R(dataset);
  }
  else if (format === "py") {
    return print_py(dataset);
  }
}

const print_text = (d, f) =>{

}

const print_r = () =>{
  
}

const print_py = () =>{
  
}