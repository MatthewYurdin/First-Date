var Rumpf = (function() {
  
  'use strict';
  
  const SETTINGS = {DEFAULT_OUTPUT_FORMAT: "js"};
  
  // Goals -------- small x means underway ------------------------ //
  
  // Primary Function: Prepare data structure to be output as JSON, JSO, R, Python, or CSV, and pass to Basic save_data function

  // Secondary Function: Guess usage of variables and return metadata object

var _save(obj, format = 'R', name = null)
  //must pass filename, mime type, object name, data in object-of-arrays layout, variable types, etc.
  return Basic.download_data();
}

var _print(obj, format = 'R', name = null)
  //prints data to console in specified format
  return obj;
}

var _guess_type(variable){
  return "ID";
  return "UNIQUEID";
  return "CATEGORICAL";
  return "BINARY";
  return "ORDINAL";
  return "INTERVAL";
}
     



function _slurp(obj, name = 'unspecified'){
  let id = (name == 'unspecified') ? Basik.generate_name() : name;
  Rektangles[id] = obj;
  Rektangles[id].Metadata = {};
  Object.keys(obj[0]).forEach(function(k){
    Rektangles[id].Metadata[k] = _generate_metadata(id, k);
  });
  Basik.module_update("Rektangle.js: '" + id + "' was added with the following variables:\n" + Object.keys(Data.Metadata[id]).map(function(m){return JSON.stringify(Data.Metadata[id][m]);}).join("\n"));
  console.log("New Rektangle is called '" + id + "'");
}

function _generate_metadata(r, id){
  let m = {};
  m.variable = id;
  m.js_type = get_type_JS(Data.Rektangles[r].map(function(k){return k[id];}));
  let d = distinct_values(Data.Rektangles[r].map(function(k){return k[id];}));
  m.unique = d.length;
  m.range = [d[0], d[d.length-1]];
  return m;
}

function _test_table(types, names, rows){
  let id = generate_id();
  let t_table = [];
  let arr = [];
  for (var r = 0; r < rows; r++){
    let obj = {};
    for (var v = 0; v < types.length; v++){
      if (types[v] == "string"){
        obj[names[v]] = Basik.generate_name();
      } else if (types[v] == 'number'){
        obj[names[v]] = Basik.noise();
      } else if (types[v] == 'boolean'){
        obj[names[v]] = Math.random() > 0.3333;
      }
    }
    t_table.push(obj);
  }
  slurp(t_table, id);
  //console.log(JSON.stringify(t_table));
}

  function convert_dataset_for_output(_dataset, _format){
    let _result = { text: "" };
    _result.filename = 'Kvunch_' + Log.session + '_' + _dataset + "." + _format;
    switch (_format) {
      case 'R':
        _result.mime = 'text/plain';
        _result.text += "# Kvunch Rektangle (session = " + Log.session + ")\nsetwd('/Working/Directory')\n" + _dataset + " <- data.frame(";
        _result.text += Object.keys(Data.Rektangles[_dataset]).map(function(k) { return  k + " = "  + get_type_R(Data.Rektangles[_dataset][k]) + "(" + Data.Rektangles[_dataset][k].length + ")"; }).join(", ") + ")\n";
        _result.text += Object.keys(Data.Rektangles[_dataset]).map(function(v) { return _dataset + "$" + v + " <- c(" + get_converted_values_R(Data.Rektangles[_dataset][v]).join(", ") + ")"; }).join("\n");
      break;
      case 'py':
        _result.mime = 'text/plain';
        _result.text += "# Kvunch Rektangle (session = " + Log.session + ")\n";
        _result.text += _dataset + " = {";
        _result.text += Object.keys(Data.Rektangles[_dataset]).map(function(k) { return  "'" + k + "': [" + get_converted_values_Python(Data.Rektangles[_dataset][k]).join(", ") + "]"; }).join(", ");
        _result.text += "}\n";
      break;
      case "js":
        _result.mime = 'text/javascript';
        _result.text += "var " + Log.session + '_' + _dataset + " = " + JSON.stringify(Data.Rektangles[_dataset]) + ";";
      break;
    }
    return _result;
  }

  function get_type_JS(arr){
    let arr_types = [];
    for (var i = 0; i < arr.length; i++){
      arr_types.push(typeof(arr[i]));
    }
    let d = distinct_values(arr_types);
    return d.join("/");  
  }

  function get_type_R(arr){
    const types = {"number": "numeric", "string": "character", "boolean": "logical"};
    let arr_types = [];
    for (var i = 0; i < arr.length; i++){
      arr_types.push(types[typeof(arr[i])]);
    }
    let d = distinct_values(arr_types);
    return (d.length === 1) ? d[0] : "character";  
  }

  function get_type_Python(arr){
    let arr_types = [];
    for (var i = 0; i < arr.length; i++){
      arr_types.push(typeof(arr[i]));
    }
    let d = distinct_values(arr_types);
    return (d.length === 1) ? d[0] : "character";  
  }

  function get_converted_values_Python(arr){
    let arr_types = [];
    let converted = [];
    for (var i = 0; i < arr.length; i++){
        arr_types.push(typeof(arr[i]));
    }
    let d = distinct_values(arr_types);
    for (var j = 0; j < arr.length; j++){
      let val;
      if (d.length > 1 || d == "string"){// mixed type set to character
        val = (arr[j] === null) ? "''" : "'" + arr[j] + "'";
      } else if (d == "number") {// numeric get NA for missing
        val = (arr[j] === null || isNaN(arr[j])) ? "NaN" : arr[j];
      } else if (d == "boolean") {//logical set to 1/0
        val = (arr[j] === null) ? "NaN" : arr[j]*1;
      }
      converted.push(val);
    }
    return converted;
  }

  function get_converted_values_R(arr){
    const types = {"number": "numeric", "string": "character", "boolean": "logical"};
    let arr_types = [];
    let converted = [];
    for (var i = 0; i < arr.length; i++){
        arr_types.push(types[typeof(arr[i])]);
    }
    let d = distinct_values(arr_types);
    for (var j = 0; j < arr.length; j++){
      let val;
      if (d.length > 1 || d == "character"){// mixed type set to character
        val = (arr[j] === null) ? "NA" : "'" + arr[j] + "'";
      } else if (d == "numeric") {// numeric get NA for missing
        val = (arr[j] === null || isNaN(arr[j])) ? "NA" : arr[j];
      } else if (d == "logical") {//logical set to 1/0
        val = (arr[j] === null) ? "NA" : arr[j]*1;
      }
      converted.push(val);
    }
    return converted;
  }

  function sanity_check(table, variable){
    let d = distinct_values(Data.Rektangles[table].map(function(m){return m[variable];}));
    let t = get_type_JS(Data.Rektangles[table].map(function(m){return m[variable];}));
    return  t + " variable '" + variable + "' has " + Data.Rektangles[table][variable].length + " values (range = " + d[0] + " to " + d[d.length-1] + ") including " + d.length + " distinct values.";
  }
  
  function print_dataset(id){
    let name = Log.session + "_" + id;
    return "var " + name + " = " + JSON.stringify(Data.Rektangles[id]) + ";";
  }


   // Expose public methods ------------------------------------------- //
   

  return {
    
    /* Settings management */
    
    settings: function(setting = "unspecified", value = "unspecified"){
      if (setting == "unspecified") {
        console.log(JSON.stringify(SETTINGS));
      } else if (value == "unspecified") {
        console.log(SETTINGS[setting]);
      } else {
        return update_SETTINGS(setting, value);
      }
    },

    /* Data management */ 
    
    show_rektangle: function(dataset){
      return print_dataset(dataset);
    },
    
    save_rektangle: function(what, how = SETTINGS.DEFAULT_OUTPUT_FORMAT){
      return Basik.download_data(what, how);
    },
    
    clear_rektangles: function(which = []){
      if (which.length === 0) {
        Rektangles = {};
        Basik.module_update("Cleaned out all Rektangles.");
      }
      else {
        which.forEach(function(d){
          delete Rektangles[d];
        });
        module_update("Cleaned out Rektangles " + which.join(", "));
      }
    },

    fake_data: function(what = ["string", "boolean", "number"], who = ["Name", "Programmer", "Score"], how_many = 100){
      return _test_table(what, who, how_many);
    },

    make_rektangle: function(what, who){
      return _slurp(what, who);
    },

    /* Testing */
    
    test: function(assert){
      let result = eval(assert) === true ? "passed" : "failed";
      Basik.module_update("Test (" + assert + ") " + result);
      console.log("Test (" + assert + ") " + result + ".");
    }

  };
  
}());