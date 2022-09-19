// print the non repeating character in a string.

// var a = 'Hello';

// for(let i=0;i<a.length;i++){
//     let count =0;
//     for(let j=0;j<a.length;j++){
//         if(a[i] == a[j] ){
//             count++;
//         }
//         }
//         if(count < 2){
//             console.log(a[i]);
//         }   
// }

// print the second non repeating character in a string.

var a = 'hello HEllo';
const arr = [];
for(let i=0;i<a.length;i++){
    let count =0;
    for(let j=0;j<a.length;j++){
        if(a[i] === a[j] ){
            count++;
        }
        }
        if(count < 2){
            arr.push(a[i]);
            
        }   
}
console.log(arr[1]);
