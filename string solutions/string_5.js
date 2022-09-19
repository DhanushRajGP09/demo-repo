var arr = ["a", "b", "", "", "bcd","c"]
var j=0;
while (j<arr.length) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "") {
        for (i; i < arr.length; i++) {
            arr[i] = arr[i + 1];}   
        }
        if(arr[i] == undefined){
            arr.length--;}}
    j++;   
}
console.log(arr);



// remove empty strings from arrays using for each and new arr---------------------
// const arr = ['a', '', '', 'b', '', 'c'];

// const results = [];

// arr.forEach(element => {
//   if (element !== '') {
//     results.push(element);
//   }
// });

// console.log(results); 

