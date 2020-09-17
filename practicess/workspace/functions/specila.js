let interest =0.005
let intial = 100;
let final =103;
let months=0;;



while(intial<103){
    let x =intial*interest;
    
    intial += x;
    months++;
}
console.log(months);
