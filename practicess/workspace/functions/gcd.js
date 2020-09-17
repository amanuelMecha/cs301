function testGCD(){
    let x = 102;
    let y = 18;
   console.log(gcd(x,y));

}

function gcd(a,b){
    a= Math.abs(a);
    b =Math.abs(b);
    if(a<b){
        let swap =a;
        a=b;
        b=swap;
    }
    do{
        let r =a%b;
        a=b;
        b=r;
    }while(b != 0);
  return a;
}

testGCD();