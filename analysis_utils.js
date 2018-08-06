// DISPERSION & CENTRAL TENDENCY -------------------------------------//

//TODO accomodate multiple min values
const min = arr => {
  let result = { "value": Infinity, "origin": null };
  if (Array.isArray(arr) && (arr.length > 0)) {
    // simple array
    if (typeof(arr[0]) ==  'number') {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < result.value) {
          result.value = arr[i];
          result.origin = i;
        }
      }
      return result;
    }
    // array of objects
    else if (typeof(arr[0]) ==  'object') {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].value < result.value) {
          result.value = arr[i].value;
          result.origin = (arr[i].hasOwnProperty("label")) ? arr[i].label : i;
        }
      }
      return result;
    }
  }
  throw new Error("min() requires an input array");
};

//TODO accomodate multiple max values
const max = arr => {
  let result = { "value": -Infinity, "origin": null };
  if (Array.isArray(arr) && (arr.length > 0)) {
    // simple array
    if (typeof(arr[0]) ==  'number') {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result.value) {
          result.value = arr[i];
          result.origin = i;
        }
      }
      return result;
    }
    // array of objects
    else if (typeof(arr[0]) ==  'object') {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].value > result.value) {
          result.value = arr[i].value;
          result.origin = (arr[i].hasOwnProperty("label")) ? arr[i].label : i;
        }
      }
      return result;
    }
  }
  throw new Error("max() requires an non-zero-length input array");
};

const mode = arr => {
  let d = distinct(arr);
  let max = 1;
  let mode = [];
  d.forEach(function(k){
    let c = sample.filter(function(f){return f === k;}).length;
    if (c > max) {
      max = c;
      mode = [k];
    }
    else if (c == max) {
      mode.push(k);
    }
  });
  return mode;
};

const median = sample => {
  if (Array.isArray(sample) && sample.length > 0){
    let s = sample.slice(0).sort(Basic.ascending);
    if (s.length % 2 === 0) {
      return ((sample[Math.floor(sample.length/2)]) + (sample[Math.floor(sample.length/2)-1])) / 2;
    } else {
      return sample[Math.floor(sample.length / 2)];
    }
  } else {
    throw new Error("median() requires a non-zero-length array");
  }
}

/* Extend Math.log() to accept optional base argument */
Math.log = (function() {
  var log = Math.log;
  return function(n, base) {
    return log(n)/(base ? log(base) : 1);
  };
})();

const mean = function(sample, mode = 'arithmetic') {
  if (Array.isArray(sample) && sample.length > 0){
    if (mode == 'arithmetic') {
      return sample.reduce(function(sum, value){ return sum + value; }, 0) / sample.length;
    }
    else if (mode == 'geometric') {
      return Math.log((sample.reduce(function(product, value){ return product * value; }, 0)), sample.length);
    }
    else if (mode == 'harmonic') {
      return sample.length / sample.reduce(function(sum, value){ return sum + (1 / value); }, 0);
    }
  } else {
    throw new Error("mean() requires a non-zero-length array");
  }
}

var _variance = function(sample) {
  let target = sample.slice(0).sort(Basic.ascending);
  let result = {};
  let mean = _mean(sample);
  result.sse = sample.map(function(m){return (m - mean) * (m - mean);}).reduce(function(sum, value){ return sum + value; }, 0);
  result.rmse = Math.sqrt(result.sse / sample.length);
  result.range = target[sample.length-1] - target[0];
  result.iqr = _median(target.filter(function(f, i){ return i > (target.length / 2);})) - _median(target.filter(function(f, i){ return i <= (target.length / 2);}));
  result.mad = _median(target.map(function(m){ return Math.abs(mean - m); }));
  result.md = _median(target.map(function(m){ return mean - m; }));
  return result;
}

var _gini = function(sample) {
  let data = sample.slice(0).sort(Basic.ascending);
  let sum_of_differences = 0;
  for (let i = 0; i < sample.length; i++){
    for (let j = 0; j < sample.length; j++){
      sum_of_differences += Math.abs(sample[i] - sample[j]);
    }
  }
  return sum_of_differences / (2 * sample.length * Basic.sum(sample));
}

var _impurity = function(proportions) {
  let result = 1 - (proportions.reduce(function(sum, value){ return sum + Math.pow(value, 2)}, 0));
  return Number(result.toFixed(4));
}

// CONTINGENCY TABLES -----------------------------------------------------//

// RANK STATISTICS --------------------------------------------------------//

// RESAMPLING -------------------------------------------------------------//

// DISTANCE MATRICES ------------------------------------------------------//

// STEMPLOTS --------------------------------------------------------------//