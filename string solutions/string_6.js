var arr = ["abd","aa","a","bcccc"];
var min;


for(let i=0;i<arr.length;i++){
   for(let j=0;j<arr.length;j++){
        if(arr[j].length < arr[i].length){
             min = arr[j];
        } 
   }
    if (arr[i] == min) {
            index = i;
            break;}
    
}
for (i = index; i < arr.length; i++) {
            arr[i] = arr[i + 1];
    }

console.log(arr);
