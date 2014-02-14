use cities;

function map_closest(){
   var pitt = [-80.064879, 40.612044];
   var phil = [-74.978052, 40.089738];

   function distance(a, b) {
       var dx = a[0] - b[0];
       var dy = a[1] - b[1];
       return Math.sqrt(dx * dx + dy * dy);
   }

   if (distance(this.loc, pitt) < distance(this.loc, phil)) {
       emit("pitt", 1);
   } else {
       emit("phil", 1);
   }
}

function reduce(key, values){
   var total_cities = 0;

   for (v in values){
       print (key + " - " + values[v]);
       total_cities = total_cities + values[v];
   }

   return total_cities;
}

//https://raw.github.com/georgeOsdDev/m102/master/week3/hw3-4.js
function reduce(key,values){
 var total = 0;
 for (var i=0,len=values.length;i<len;i++){
   total += values[i];
 }
 return total;
}

function map_closest2(){
   var pitt = [-80.064879, 40.612044];
   var phil = [-74.978052, 40.089738];

   function distance(a, b) {
       var dx = a[0] - b[0];
       var dy = a[1] - b[1];
       return Math.sqrt(dx * dx + dy * dy);
   }

   if (distance(this.loc, pitt) < distance(this.loc, phil)) {
       emit("pitt", {count: 1});
   } else {
       emit("phil", {count: 1});
   }
}

function reduce2(key, values){
   var total_cities = 0;

   for (v in values){
       print (key + " - " + values[v]);
       total_cities = total_cities + values[v].count;
   }

   return {count: total_cities};
}

db.zips.mapReduce(
   map_closest2,
   reduce2,
   {
       out: {inline: 1},
       query: { state: "PA" }
   }
   )
