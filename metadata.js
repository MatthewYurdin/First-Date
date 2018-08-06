/*
  
  {
    "valid": true|false,
    "layout": object-of-arrays|array-of-objects|1Darray|2Darray,
    "rows": ,
    "variables": [{"name":,"type":},{"name": ,"type":],
    "ids": ["name", "ssn"]
  }


  Object of arrays...{"label":[1,2,3,4,5],"value":[6,7,8,9,0]}

  Array of objects...[{"name":"mike","alive":true},{"name":"mozart","alive":false}]

  One-dimensional array...[5,4,6,7,9]

  Two_dimensional array...[["adam", "andrew"],["jermaine", "jack"],["joe", "bob"]]

*/

//TODO move these "includes" functions to dataset_utils
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

//TODO delete console.log's, assign a mix of real and integer to real
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
      //console.log("Value = " + arr[i] + ", type = " + types[types.length-1]);
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

const compare_desc = (a, b) => b - a;

const test_variable = (arr, name) => {
  const variable = {};
  variable.name = name;
  variable.missing = count_missing_values(arr);
  variable.nonmissing = arr.length - variable.missing;
  let values = distinct_values(arr);
  variable.type = detect_type(values);
  variable.id = ((includes_element(["integer", "string"], variable.type)) && (variable.missing === 0)) ? true : false;
  variable.valid = ((variable.type !== "mixed" ) && (variable.nonmissing > 0)) ? true : false;
  display_widths = arr.map(m => (m === null) ? 1 : m.toString().length);
  display_widths.push(name.toString().length);
  variable.display_size = display_widths.sort(compare_desc)[0];
  return variable;
}

//TODO after debugging, change variable.distinct_value to length
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

const metadata = list => {
  let result;
  if (list) {
    
    if (Array.isArray(list)) {
      const test_value = list[0];
      
      if (Array.isArray(list[0])){
        result = test_2d(list);
      }
      
      else if (typeof test === "object"){
        result = test_array_of_objects(list);
      }

      else {
        result = test_1d(list);
      }

    }

    else {
      result = test_object_of_arrays(list);
    }

    if (result.valid) return result;
    
  }

  throw new Error("metadata(): No valid data provided");

}