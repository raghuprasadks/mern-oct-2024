console.log("functions")

function greet(){
    console.log("welcome to js")
}
greet()

function customgreet(name){
    console.log(name, " welcome to js")
}

customgreet("joseph")
console.log("nameless functions ")
add = function(n1,n2){
    res = n1+n2
    console.log("result is ",res)
}

console.log(add)
add(100,200)

mul = function(n1,n2){
    return n1*n2
}

result = mul(10,20)
console.log("function with return value ",result)

greetarrow = ()=>console.log("welcome to arrow function")
greetarrow()

multiplyarrow =(n1,n2)=>n1*n2
result = multiplyarrow(5,10)
console.log("multiply arrow function ",result)

si = (p,r,t)=>{
    retur (p*r*t)/100
}

interest =si(10000,6,1)
console.log(" simple interest arrow function ",interest)