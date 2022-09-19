var str1 = "Hello";
var str2 = "eHllo";
const arr = [];
const arr2 = [];
for(let i=0;i<str2.length;i++){
    arr.push(str2[i]);
    arr2.push(str1[i]);
}
arr.sort();
if(JSON.stringify(arr) === JSON.stringify(arr2)){
    console.log("Anagram");
}
else {
    console.log("not an anagram");
}

