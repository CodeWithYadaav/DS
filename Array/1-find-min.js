// Write a function to find the maximum and minimum elements in an array.

//without using in-built functions
function findMin(a){
    let min=a[0]
    for(let i=0;i<a.length;i++){
        if(a[i]<min){
            min = a[i]
        }
    }
    return min
}

const a =[3,4,5,6,7,89,9]
console.log(`find min of :::`,findMin(a));

//getting max value using in-built function
function findMax(a){
    return Math.max(...a);
}

console.log(`finding max of::`,findMax(a));