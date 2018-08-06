const test = ( assert ) => {
  let result = eval(assert) === true ? "passed" : "failed";
  update_log("Test (" + assert + ") " + result);
  console.log("Test (" + assert + ") " + result + ".");
};
