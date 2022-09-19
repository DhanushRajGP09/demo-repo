var a=['a','b','b','c','c','d','e','f','b'];
const newArr = [];
var str = '';
for(let i=0;i<a.length;i++){
    for(let j=i;j<a.length;j++){
        if(a[i]==a[j] && i != j){
           str += a[i]; }
    }   
}
console.log(str);
function Max() {
var max = 0;
var maxChar = [];
str.split('').forEach(function(char){
if(str.split(char).length > max) {
    max = str.split(char).length;
    maxChar.push(char);}
  });
console.log(maxChar);
};
Max();