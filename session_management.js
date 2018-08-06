const SETTINGS = {DEFAULT_OUTPUT_FORMAT: "js"};

// NAME & ID GENERATION ------------------------------------------- //
 const generate_id = len => {
  const id_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let id = "";
  for ( let i = 0; i < len; i++ ){
    id += id_chars.substr(   Math.round(  ( Math.random() * ( id_chars.length-1 ) )  ), 1   );
  }
  return id;
}

// LOG MANAGEMENT ---------------------------------------------------- //

const Log = { text: "", updated: null };
Log.session = generate_id(9);
Log.initialized = new Date();
//Initialize Log
//Should this .map() use templating?
Log.text += "Basic.js (session '" + Log.session + "') initialized " +
            Log.initialized.toString() +
            " with settings:\n" +
            Object.entries(SETTINGS)
                .map( e => "  " + e[0] + " = " + e[1])
                .join("\n") +
            "\n\n";

const update_time = now => "@+" + ( (now - Log.initialized)/1000 ).toFixed( 2 ) +  " seconds: ";

const log_message = msg => msg + "\n\n";

const update_log = (now, message) => Log.text += update_time( now ) + log_message( message );

/**
 * Update settings.
 * @constructor
 * @param {object} setting - The name of the setting to update.
 * @param {object} value - The name of the value to assign to `setting`.
 */
const settings = (setting, value) => {
    SETTINGS[setting] = value;
    Log.text += update_log("Settings updated..." + setting + " = " + value);
};

/**
 * Prints session log to console..
 
 */
const show_log = () => console.log( Log.text );

/**
 * Prints user text to log.
 * @constructor
 * @param {string} user_text - The text to add to the session log.
 */
const user_update = ( user_text = "User updated the log.") => { let currently = Date.now(); Log.text += update_log( Date.now(), ( "from user..." + user_text ) ); };

/**
 * Downloads a session log.
 
 */
const save_log = () => {
 let element = document.createElement('a');
 element.setAttribute('href', ('data:text/plain;charset=utf-8,' + encodeURIComponent(Log.text)));
 element.setAttribute('download', ('session_log_' + Log.session + ".txt"));
 element.style.display = 'none';
 document.body.appendChild(element);
 element.click();
 document.body.removeChild(element);
 update_log("User downloaded a copy of the log as 'session_log_" + Log.session + ".txt'");
}

//TODO add functions that format CSV and TXT for output
/**
 * Downloads a dataset.
 * @constructor
 * @param {      } dataset - The name of the dataset object.
 * @param {string} filename - The file name of the downloaded dataset.
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
    else if (file_format == 'json') {
        mime = 'text/json';
        dataset = JSON.stringify(dataset);
    }
    else {
        throw new Error('Valid output formats are "js", "json", "csv", or "txt"');
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