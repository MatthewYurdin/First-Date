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

//if a tie, report multiple values
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
    let s = sample.slice(0).sort(compare_ascending);
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

/**
 * Calculates the specified type of mean from an array of real or integer values.
 * @param {object} arr - The array of numbers.
 * @param {string} mode - The type of mean: "arithmetic," "geometric," or "harmonic."
 */
//TODO fix harmonic and geometric
const mean = (arr, mode ='arithmetic') => {
  if (Array.isArray(arr) && arr.length > 0){
    if (mode == 'arithmetic') {
      return arr.reduce(function(sum, value){ return sum + value; }, 0) / arr.length;
    }
    else if (mode == 'geometric') {
      return Math.pow(arr.reduce((product, n) => (product * n), 1), (1 / arr.length));
      //return Math.log((arr.reduce(function(product, value){ return product * value; }, 0)), arr.length);
    }
    else if (mode == 'harmonic') {
      return arr.length / arr.reduce((inv_sum, n) => (inv_sum + (1 / n)), 0);
    }
  } else {
    throw new Error("mean() requires a non-zero-length numeric array");
  }
}

const variance = arr => {
  let target = arr.slice(0).sort(ascending);
  let result = {};
  let mean = mean(arr);
  result.sse = sample.map(function(m){return (m - mean) * (m - mean);}).reduce(function(sum, value){ return sum + value; }, 0);
  result.rmse = Math.sqrt(result.sse / sample.length);
  result.range = target[sample.length-1] - target[0];
  result.iqr = _median(target.filter(function(f, i){ return i > (target.length / 2);})) - _median(target.filter(function(f, i){ return i <= (target.length / 2);}));
  result.mad = _median(target.map(function(m){ return Math.abs(mean - m); }));
  result.md = _median(target.map(function(m){ return mean - m; }));
  return result;
}

const gini = arr => {
  let data = arr.slice(0).sort(compare_ascending);
  let sum_of_differences = 0;
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      sum_of_differences += Math.abs(arr[i] - arr[j]);
    }
  }
  return sum_of_differences / (2 * arr.length * sum(arr));
}

const impurity = proportions => {
  let result = 1 - (proportions.reduce(function(sum, value){ return sum + Math.pow(value, 2)}, 0));
  return Number(result.toFixed(4));
}

// CONTINGENCY TABLES -----------------------------------------------------//

// RANK STATISTICS --------------------------------------------------------//

// RESAMPLING -------------------------------------------------------------//

// DISTANCE MATRICES ------------------------------------------------------//

// STEMPLOTS --------------------------------------------------------------//