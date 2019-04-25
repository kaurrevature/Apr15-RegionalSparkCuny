//O(n)-> best case, O(n^2)-> worst case
function bubbleSort(arr){
    //implement Bubble sort
    //check variable to see if more iteration is required
    var swap;
    var n=arr.length-1;
    do {
        debugger;
        swap=false;        
        for (let i = 0; i < n; i++) {
            if (arr[i]>arr[i+1]) {
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swap=true;
                console.log(arr);
            }            
        }
        n--;
    } 
    while(swap);
    return arr;
}
console.log(bubbleSort([5,1,4,3,8]));
//O(n)
/*function Sum(n){
    var r=0;
    for (let i = 0; i < n; i++) {
        r += i;        
    }
    return r
}*/
//O(3)=>O(1);
/*
Big O notations
O(5+n)=> O(n)
O(3)=>O(1)
O(n+2n)=> O(n)
O(500)=>O(1)
O(n^2+2n+3)=>O(n^2

    //Shorhands:

    Ignore : constants (arithmatic operations, assignments, reading array indexes)
    loops: consider n operations depending on value of n
*/
function Sum(n){
    return n*(n+1)/2;
}
//O(n)+O(n)=> O(2n)=> O(n)
function printUpAndDown(n)
{
    //O(n)
    //n+n+n=> O(3n)=> n
for (let i = 0; i <n; i++) {
    console.log(i);    
}
//O(n)
for (let j = n; j >=0; j--) {
    console.log(j);    
}
}

//O(n*n)=>O(n^2)
function readPairs(n){
    for (let i = 0; i < n; i++) {//1*n
        //2*n
        for (let j = 0; j < n; j++) {
            console.log(i+','+j);
        }   
    }
}
