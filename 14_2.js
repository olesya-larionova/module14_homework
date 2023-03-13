const jsonString = `
{
  "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const people = JSON.parse(jsonString,  function(k, v){
  
   if (k === 'age') {return +v;}
  return v;
  
});

console.log(people);
