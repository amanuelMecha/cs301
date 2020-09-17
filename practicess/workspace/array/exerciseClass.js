// const arr = 1 4 2 3 7 8 8 9 12 3
// const odd_arr = arr.filter (n =>n% 2 !== 0)
// console.log(odd_arr)

 const input =[1,2,-1,3,-2,5,6];

// const positive = input.filter(n => n >=0);
// console.log(positive);

function filter(input){
    let temp_arr=[];
    let j=0;
    for(let i=0;i<input.length;i++){
        if(input[i] >=0 ){
            temp_arr[j]=input[i];
            j++;
        }
    }
    return temp_arr;
}

console.log(filter(input));