console.log('welcome to node.js')

function add (n1,n2){
    return n1+n2
}

result = add(100,200)
console.log("result of addition is ",result)


// multiply using arrow function

let multiply =(n1,n2) => n1*n2

result = multiply(10,20)
console.log("result of multiplication is ",result)

const  si = (p,r,t)=> p*r*t/100

const simpleinterest = (p,r,t) =>{
    return p*r*t/100
}

console.log("simple interest is ",si(1000,5,2))
