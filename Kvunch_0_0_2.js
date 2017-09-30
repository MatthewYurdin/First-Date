var Kvunch = (function() {
  
  'use strict';
  
  const SETTINGS = {DEFAULT_OUTPUT_FORMAT: "js"};
  
  // Goals -------- small x means underway ------------------------ //
  
  //CONTINGENCY TABLES

  // 1.    [ ] Fisher's Exact Test for Contingency Tables (Two Categorical Variables and One Count Variable).
  //
  
  // 2.    [x] Chi-Squared Test for Contingency Tables (Two Categorical Variables and One Count Variable).
  //

  //CENTRAL TENDENCY

  // 3.   [x] Mean (arithmetic, geometric, harmonic)
  //

  // 4.   [x] Variance (SSE, RMSE, Range, IQR, MedianAD)
  //

  // 5.   [ ] Median and Modal Values
  //

  // 9.   [ ] Shuffling (a.k.a, Label Exchange or Permutation Test) for N-way Comparisons of Mean/Median/Mode (Interval-level Variable + Categorical Variable)
  //

  // 10.  [ ] Bootstrapping for Confidence Intervals of the Mean (Interval-level Variable)
  //

  //COMBINATORICS

  // 11. [x] Factorial and supporting functions for string-based arithmetic
  //

  //CLUSTERING
  
  // 12. [ ] Distance Matrix
  //
  
  // 13. [ ] Reduction Sort
  //

  //RANK-BASED

  // 14. [x] Mann-Whitney Rank-Sum Test (Interval-level or Ordinal Variable + Binary or Two-valued Categorical Variable).
  //

  // 15. [ ] Wilcoxon Signed-Rank Test for Paired Measurements (Two Interval-level or Ordinal Variables).
  //

  //SPECIAL MEASURES

  // 16. [x] Gini Index (measure of equality in distribution)
  //

  // 17. [x] Gini Impurity (Probability of random observation, randomly labelled according to distribution of labels, being labeled incorrectly?)
  //

  // 18. [ ] Jaccard Index for Interval Data (Using Stem-and-Leaf Plot to Compute Union & Intersection).
  //

  // 19. [ ] Jaccard Index for Set Membership.
  //

  // 20. [ ] Consistency 1-Sample (Probability of randomly choosing two observations from the same group/label)
  //

  // 21. [ ] Consistency 2-Sample (Probability of randomly choosing 1 observation from each sample with same group/label)
  //

  // 22. [ ] Console Stem-and-Leaf Plot (Interval Variable w/ fewer than 300 Observations)
  //


  // Other TODOs ----------------------------------------------------- //
  
  // Add pairwise Pr(x1 > x2)?
  
  
  // ---------------------------------------------------------------- //
  
var _contingency_table = function(sample){
  //data includes either two or three variables
  if ( (Object.keys(sample[0]).length === 3 ) && ( Basic.includes(sample[0], "count") ) ) {
    let result = {};
    let variables = Object.keys(sample[0]);
    result.row_variable = variables[0];
    result.column_variable = variables[1];
    result.row_levels = Basic.distinct_values(sample.map(function(m){return m[variables[0]];}));
    result.column_levels = Basic.distinct_values(sample.map(function(m){return m[variables[1]];}));
    result.R = result.row_levels.map(function(m){ return sample.filter(function(f){return f[result.row_variable] === m;}).reduce(function(sum, value){ return sum + value.count; }, 0);});
    result.C = result.column_levels.map(function(m){ return sample.filter(function(f){return f[result.column_variable] === m;}).reduce(function(sum, value){ return sum + value.count; }, 0);});
    result.O = result.row_levels.map(function(m){ return result.column_levels.map(function(n){ return sample.filter(function(f){return ((f[results.row_variable] === m) && (f[results.rcolumn_variable] === n));}).reduce(function(sum, value){ return sum + value.count; }, 0);});}); return result;
    return result;
  }
  else if (Object.keys(sample[0]).length === 2){
    let result = {};
    let variables = Object.keys(sample[0]);
    result.row_variable = variables[0];
    result.column_variable = variables[1];
    result.row_levels = Basic.distinct(sample.map(function(m){return m[variables[0]];}));
    result.column_levels = Basic.distinct(sample.map(function(m){return m[variables[1]];}));
    result.R = result.row_levels.map(function(m){ return sample.filter(function(f){return f[result.row_variable] === m;}).length;});
    result.C = result.column_levels.map(function(m){ return sample.filter(function(f){return f[result.column_variable] === m;}).length;});
    result.O = result.row_levels.map(function(m){ return result.column_levels.map(function(n){ return sample.filter(function(f){return ((f[result.row_variable] === m) && (f[result.column_variable] === n));}).length;});});
    return result;
  }
  else {
    throw new Error("Kvunch.contingency_table() requires as input an array of objects with either two variables (for table rows and columns) or three variables including one called 'count'");
  }
}

var fisher_exact_test = function(ct){
  if (ct.N > 40) {
    console.log("Contingency table values are too large for Fisher Exact Test.");
    return null;
  } else {
    let text = "Fisher Exact Test for Contingency Table of " + ct.labels.row.name + " by " + ct.labels.column.name + "\n";
    let row_fact_product = ct.R.reduce(function(product, value) {
      return product * factorial(value);
    }, 0);
    let col_fact_product = ct.C.reduce(function(product, value) {
      return product * factorial(value);
    }, 0);;
    let obs_fact_product = Organ.flatten(ct.O).reduce(function(product, value) {
      return product * factorial(value);
    }, 0);
    let result = ((row_fact_product * col_fact_product) / factorial(ct.N)) / obs_fact_product;
    return Number(result.toFixed(4));
  }
}

var fisher_exact_test = function(ct){
  if (ct.N > 40) {
    console.log("Contingency table values are too large for Fisher Exact Test.");
    return null;
  } else {
    let text = "Fisher Exact Test for Contingency Table of " + ct.labels.row.name + " by " + ct.labels.column.name + "\n";
    let row_fact_product = ct.R.reduce(function(product, value) {
      return product * factorial(value);
    }, 0);
    let col_fact_product = ct.C.reduce(function(product, value) {
      return product * factorial(value);
    }, 0);
    let obs_fact_product = Organ.flatten(ct.O).reduce(function(product, value) {
      return product * factorial(value);
    }, 0);
    let result = ((row_fact_product * col_fact_product) / factorial(ct.N)) / obs_fact_product;
    return Number(result.toFixed(4));
  }
}

var fisher2 = function(value, row, column, row_totals, column_totals){
  //enumerate ways to have value or lower in [row, column]
  //compute probability for each scenario
  //compute sum of probabilities
  return 0;
}

var _chi_squared_test = function(ct){
  //compute expected values
  if (ct.O.filter(function(f){return f < 5;}).length > 0) {
    console.log("Contingency table has at least one value < 5, so ChiSq is not appropriate.")
    return null;
  }
  else {
    let text = "Chi-Squared for Contingency Table of " + ct.labels.row.name + " by " + ct.labels.column.name + "\n";
    let df = (ct.R.length - 1) * (ct.C.length - 1);
    let sse = 0;
    let se = 0;
    for (let c = 0; c < ct.C.length; c++){
      for (let r = 0; r < ct.R.length; r++){
        let expected = ct.C[c] * ct.R[r] / ct.N;
        let observed = ct.O[c][r];
        text += ct.labels.column.name + "=" + ct.labels.column.levels[c] + "\t" + ct.labels.row.name + "=" + ct.labels.row.levels[r] + ":\t" + observed + " (" + expected + ")\n";
        sse += Math.pow((observed - expected), 2);
        se += expected;
      }
    }
    text += "GRAND TOTAL: " + ct.N + "\n\n";
    let result = Number((sse / se).toFixed(4));
    text += "Chi-Squared: " + result + " (" + df + " degrees of freedom)\n\n";
    update_log(text);
    return {"chisq": result, "df": df};
  }
}

/* Combinatorics */

var _factorial = function( num ) {
  //if less than 20, compute actual factorial
  //if between 20 and 39, compute Stirling approximation
  //if 40 or more, use string arithmetic
  if (num === 0 || num === 1) {
    return 1;
  }
  else if ( num < 20 ) {
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  else if ( num < 40 ) {
    return Math.ceil(Math.sqrt(2 * Math.PI * num) * Math.pow((num / Math.E),num));
  }
  else {
    let result = num.toString();
    for (let j = num - 1; j > 1; j--){
      result = _string_multiply(result, j.toString());
    }
    return result;
  }
}

function _string_add(a, b) {
  var zrx = /^0+/; // remove leading zeros
  a = a.replace(zrx, '').split('').reverse();
  b = b.replace(zrx, '').split('').reverse();
  var result = [], max = Math.max(a.length, b.length);
  for (var memo = 0, i = 0; i < max; i++) {
    var res = parseInt(a[i] || 0) + parseInt(b[i] || 0) + memo;
    result[i] = res % 10;
    memo = (res - result[i]) / 10;
  }
  if (memo) {
    result.push(memo);
  }
  return result.reverse().join('');
}

function _string_substract(a, b) {
  let zrx = /^0+/; // remove leading zeros
  a = a.replace(zrx, '').split('').reverse();
  b = b.replace(zrx, '').split('').reverse();
  let res;
  let result = [], max = Math.max(a.length, b.length);
  for (var i = 0; i < max; i++) {
    if (parseInt(a[i] || 0) < parseInt(b[i] || 0)) {
      a[i+1] --;
      res = (10 + parseInt(a[i] || 0)) - parseInt(b[i] || 0);
    } else {
      res = parseInt(a[i] || 0) - parseInt(b[i] || 0);
    }
    result[i] = res;
  }
  return result.reverse().join('');
}

function _string_multiply(factor1, factor2){
  let zrx = /^0+/; // remove leading zeros
  factor1 = factor1.replace(zrx, '');
  factor2 = factor2.replace(zrx, '');
  if (factor1 === '' || factor2 === ''){
    return '0';
  }
  else {
    let result = '0';
    for (var i = 0; i < Number(factor1); i++){
      result = _string_add(result, factor2);
    }
    return result;
  }
}

function _string_less_than(c1, c2){
  let zrx = /^0+/; // remove leading zeros
  c1 = c1.replace(zrx, '').split('').reverse();
  c2 = c2.replace(zrx, '').split('').reverse();
  if (c1 === c2){
    return false;
  }
  else if (c1.length < c2.length) {
    return true;
  }
  else if (c2.length < c1.length) {
    return false;
  } 
  else {
    for (let digit = 0; digit < c1.length; digit++){
      if (c1[digit] < c2[digit]) {
        return true;
      }
      else if (c1[digit] > c2[digit]) {
        return false;
      }
    }
  }
  return false;
}

/* Clustering */

var _distance_matrix = function(sample){
  //sample has id and value attributes
  if (Array.isArray(sample) && Basic.includes(sample[0], "id") && Basic.includes(sample[0], "value")) {
    let result = [];
    for (let a = 0; a < sample.length; a++){
      for (let b = 0; b < sample.length; b++){
        if (a !== b){
          result.push({ "id_1": sample[a].id, "id_2": sample[b].id, "distance": Number((Math.abs(sample[a].value - sample[b].value)).toFixed(4)) });
        }
      }
    }
    return result;
  } else {
    throw new Error("Kvunch.distance_matrix() requires as input an array-of-objects with an 'id' and a 'value' property");
  }
}

var _pull = function(id_1, id_2, data){
  return data.filter(function(f){return f.id_1 === id_1 && f.id_2 === id_2}).map(function(m){return m.distance;});
}

var _test_inside_position = function(t, c1, c2, data){
  return _pull(t, c1, data) < _pull(c1, c2, data) || _pull(t, c2, data) < _pull(c1, c2, data) ? true : false;
}

var _test_outside_position = function(t, c1, c2, data){
  return (_pull(t, c1, data) < _pull(t, c2, data)) ? true : false;
}

//TODO add gaps and scoring
var _reduction_sort = function(dm, reverse = false, scale = 100, gaps = 3){
  //dm = array of objects w/ id1, id2, difference
  //sample has id and value attributes
  if ( Array.isArray(dm) && Basic.includes(dm[0], "id_1") && Basic.includes(dm[0], "id_2") && Basic.includes(dm[0], "distance") ) {
    let result = [];
    let ids = Basic.distinct( dm.map(function(m){return m.id_1;}) );
    let best = (reverse) ? ids.map(function(m){ return dm.filter(function(f){return f.id_1 === m}).sort(Basic.descending)[0]; }) : ids.map(function(m){ return dm.filter(function(f){return f.id_1 === m}).sort(Basic.ascending)[0]; }).sort(function(a, b){ return a.distance - b.distance;});
    let list = [best[0].id_1, best[1].id_1];
    for (let d = 2; d < best.length; d++){
      let cold_flag = true;
      for (let t = 0; t < (list.length - 1); t++){
        if ((cold_flag) && (_test_inside_position(best[d].id_1, list[t], list[t+1], dm))){
          list = Basic.insert(list, (t+1), best[d].id_1);
          cold_flag = false;
        }      
      }
      if (cold_flag) {
        if (_test_outside_position(best[d].id_1, list[0], list[list.length - 1], dm)){
          list = Basic.insert(list, 0, best[d].id_1);
        } else {
          list.push(best[d].id_1);
        }
      }
    }
    return list;
  } else {
    throw new Error("Kvunch.reduction_sort() requires as input an array-of-objects with properties: 'id_1', 'id_2' & 'distance'");
  }
}

/* Descriptive Measures */

var _min = function(arr){
  let result = { "value": Infinity, "origin": null };
  // simple array
  if ( typeof( arr[0] ) ==  'number' ) {
    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] < result.value ) {
        result.value = arr[i];
        result.origin = i;
      }
    }
    return result;
  } 
  // array of objects
  else if ( typeof( arr[0] ) ==  'object') {
    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i].value < result.value ) {
        result.value = arr[i].value;
        result.origin = (arr[i].hasOwnProperty("label")) ? arr[i].label : i;
      }
    }
    return result;
  }
  else {
    return null;
  }
}

var _max = function(arr){
  let result = { "value": -Infinity, "origin": null };
  // simple array
  if ( typeof( arr[0] ) ==  'number' ) {
    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] < result.value ) {
        result.value = arr[i];
        result.origin = i;
      }
    }
    return result;
  } 
  // array of objects
  else if ( typeof( arr[0] ) ==  'object') {
    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i].value > result.value ) {
        result.value = arr[i].value;
        result.origin = ( arr[i].hasOwnProperty( "label" ) ) ? arr[i].label : i;
      }
    }
    return result;
  }
  else {
    return null;
  }
}

var _mode = function( sample ){
  let d = Basic.distinct( sample );
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
}

var _median = function( sample ){
  if (Array.isArray( sample ) && sample.length > 0){
    let s = sample.slice(0).sort(Basic.ascending);
    if (s.length % 2 === 0) {
      return ((sample[Math.floor(sample.length/2)]) + (sample[Math.floor(sample.length/2)-1])) / 2;
    } else {
      return sample[Math.floor(sample.length / 2)];
    }
  } else {
    throw new Error("Kvunch.median requires a non-zero-length array");
  }
}

/* Extend Math.log() to accept optional base argument */
Math.log = (function() {
  var log = Math.log;
  return function(n, base) {
    return log(n)/(base ? log(base) : 1);
  };
})();

var _mean = function( sample, mode = 'arithmetic' ) {
  if (Array.isArray( sample ) && sample.length > 0){
    if ( mode == 'arithmetic' ) {
      return sample.reduce(function(sum, value){ return sum + value; }, 0) / sample.length;
    }
    else if ( mode == 'geometric' ) {
      return Math.log((sample.reduce(function(product, value){ return product * value; }, 0)), sample.length);
    }
    else if ( mode == 'harmonic' ) {
      return sample.length / sample.reduce(function(sum, value){ return sum + (1 / value); }, 0);
    }
  } else {
    throw new Error("Kvunch.mean requires a non-zero-length array");
  }
}

var _variance = function( sample ) {
  let target = sample.slice(0).sort(Basic.ascending);
  let result = {};
  let mean = _mean( sample );
  result.sse = sample.map(function(m){return (m - mean) * (m - mean);}).reduce(function(sum, value){ return sum + value; }, 0);
  result.rmse = Math.sqrt(result.sse / sample.length);
  result.range = target[sample.length-1] - target[0];
  result.iqr = _median(target.filter(function(f, i){ return i > (target.length / 2);})) - _median(target.filter(function(f, i){ return i <= (target.length / 2);}));
  result.mad = _median(target.map(function(m){ return Math.abs( mean - m ); }));
  result.md = _median(target.map(function(m){ return mean - m; }));
  return result;
}

var _gini = function( sample ) {
  let data = sample.slice(0).sort( Basik.compare_asc );
  let summation = data.reduce(function(sum, value){ return sum + ((2 * (i + 1)) - data.length - 1) * value; }, 0);
  return Number((summation / ( Math.pow( data.length, 2 ) * _mean( data ) )).toFixed(4));
}

var _impurity = function( proportions ) {
  let result = 1 - ( proportions.reduce(function( sum, value ){ return sum + Math.pow( value, 2 )}, 0 ));
  return Number(result.toFixed(4));
}
//  --------------------------------------------------------------- //

var _mann_whitney = function(sample1, sample2){
  if (sample1.length + sample2.length < 100){
    //complete enumeration
    let real_rank_sums = _mann_whitney_rank(Basik.flatten(sample1, sample2));
    //In how many rankings of N things do the first sample1.length have rank-sums of real_rank_sums[0];
    let repititions = 1000;
    let sim_rank_sums = [];
    let dummy_ranks = dummy_array((sample1.length + sample2.length));
    for (var rep = 0; rep < repititions; rep++){
      shuffle(dummy_ranks);
      sim_rank_sums.push(dummy_ranks.filter(function(f, i){return i < sample1.length;}).reduce(function(sum, value) { return sum + value;}, 0));
    }
    return {"rank_sums": real_rank_sums, "distribution": sim_rank_sums};
  } else {
    console.log("Too many data points for this Mann-Whitney implementation.");
    return null;
  }
}

//TODO does this need two samples or 1? If two how to keep track of which?
var _mann_whitney_rank = function(arr){
  let d = Basic.distinct(arr);
  let c = d.map(function(m){return {"value": m, "count": arr.filter(function(f){return f === m;}).length};});
  // (2) Rank by distinct values
  let r = c.map(function(m, i){
    let rank = (m.count === 1) ? i + 1 : i + m.count / 2; 
    return {"value": m.value, "count": m.count, "rank": rank};
  });
  // (3) Lookup arr ranks by value
  let ranked = arr.map(function(m){
    let rank = (r.filter(function(f){return m.value === f.value;})[0]).rank;
    return {"label": m.label, sample, value, rank}; 
  });
  // (4) Sum ranks
  let rank_sums = [];
  rank_sums[0] = ranked.filter(function(f){return f.sample === 0;}).reduce(function(sum, value) { return sum + value;}, 0);
  rank_sums[1] = ranked.filter(function(f){return f.sample === 1;}).reduce(function(sum, value) { return sum + value;}, 0);//is this really needed?
  return rank_sums;
}

var _wilcoxon = function(sample1, sample2){
  return {};
}

var _bootstrap = function(sample){
  return {};
}

var _random_permutation = function(sample){
  return {};
}


//TODO fix lack of empty stems
var _stemplot = function( sample, title = "Stem-and-Leaf Plot:" ) {
  if (!Array.isArray(sample)) {
    throw new Error("Kvunch.stemplot requires one input array");
  } else {
    let stems = Basic.distinct( sample.map(function(m){ return Math.floor( m / 10 ); }) );
    sample.sort(Basic.compare_asc);
    let result = title + "\n\n" + stems.map(function(m){return m + "|" + sample.filter(function(f){return Math.round(f % 10) === m; }).map(function(k){return Math.round(k % 10); }).join(""); }).join("\n");
    return result;
  }
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

factorial: function(x){return _factorial(x); },
string_add: function(x, y){return _string_add(x, y); },
string_substract: function(x, y){return _string_substract(x, y); },
string_multiply: function(x, y){return _string_multiply(x, y); },
string_less_than: function(x, y){return _string_less_than(x, y); },
factorial: function(x){return _factorial(x); },
min: function(x){return _min(x); },
max: function(x){return _max(x); },
mean: function(x, y){return _mean(x, y); },
median: function(x){return _median(x);},
mode: function(x){return _mode(x);},
variance: function(x){return _variance(x); },
distance_matrix: function(x){ return _distance_matrix(x); },
reduction_sort: function(x, y, z){ return _reduction_sort(x, y, z); },
gini: function(x){return _gini(x); },
impurity: function(x){return _impurity(x); },
contingency_table: function(x){return _contingency_table(x); },
chisq: function(x){return _chi_squared_test(_contingency_table(x)); },
mann_whitney: function(x, y){ return _mann_whitney( x, y ); },
wilcoxon: function(x, y){ return _mann_whitney( x, y ); },
bootstrap: function(x){ return _bootstrap( x ); },
random_permutation: function(x){ return _random_permutation( x ); },
stemplot: function(x, y){return _stemplot(x, y); },
/* Testing */ 
test: function(assert){let result = eval(assert) === true ? "passed" : "failed"; update_log("Test (" + assert + ") " + result); console.log("Test (" + assert + ") " + result + "."); } 

};


}());