//testing connection

function by(name){
  return function(o,p){
    var a, b;
    if(typeof o === "object" && typeof p === "object" && o && p) {
      a = o[name];
      b = p[name];
      if (a === b) {
        return 0;
      }
      if (typeof a === typeof b) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    }
    else{
      throw ("error");
    }
  }
}
// calculate each element's sortedkey 
function keySort(key){
  var b = key.split("");
  b.sort();
  var c = b.join("");
  return c;
}
// convert number array to a object array contains a property called 'Sortedkey'
function convert(array){
  var ar = new Array();
  for(var i = 0;i < test.length;i++){
    var key  = keySort(test[i]);
    ar.push({
      value: test[i],
      Sortkey: key
    });
    //console.log("key ", key);

   }
   return ar;
}
