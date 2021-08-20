
// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

const findNum=(A,B)=>{


let result=[]

for(let i=0;i<A.length;i++){
    for(let j=i+1;j<A.length;j++){

        if(A[i]+A[j]===B){
            
    result.push( A[i] +","+A[j] )
        }

    }
}

return  result;
}

let arr1=[1,2,5,9,7,8,6,3,4];

let num=10;

console.log(findNum(arr1,num))


// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

let arr2=[2,1,8,7,3,8,4,5]

for(var i=0; i<arr2.length/2 ; i++){

    let x=arr2.shift()
    let y=arr2.push(x)

}
console.log(arr2)
// Q3. Write a program to check if two strings are a rotation of each other?
let str1="Hello"
let str2="olleH"
str1=str1.toLocaleLowerCase().split("").sort().join("")
str2=str2.toLocaleLowerCase().split("").sort().join("")

if(str1.length !== str2.length){
    console.log("Given two strings are not a rotation")
}else{

        if(str1===str2){

    console.log("Given two strings are  a rotation")
        
}else if(str1 !== str2 ){
    console.log("Given two strings are not a rotation")
}

}       
   
 // Q4. Write a program to print the first non-repeated character from a string?

let str3="aabbcddeffghhijjkl"

let obj1={}
let count=0

for(let i=0;i<str3.length;i++){
    if(obj1[str3[i]]){
       obj1[str3[i]] = obj1[str3[i]]+1

    }else {
        obj1[str3[i]]=count+1
    }
}

for(var i=0;i<str3.length;i++){
    if(obj1[str3[i]]===1){
        console.log(str3[i])
        break;
    }
}

// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, a,  b,  c)

{
        if (n == 1)
        {
            console.log("Move disk 1 from rod " + a +
            " to rod " + b );
            return;
        }
        towerOfHanoi(n - 1, a, c, b);
        console.log("Move disk " + n + " from rod " + a +
        " to rod " + b );
        towerOfHanoi(n - 1, c, b, a);
    }
 
    var n = 4; 
    towerOfHanoi(n, 'A', 'C', 'B');


// // Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
function operater(x)
    {
  
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
  
    function postToPre(input){
        let s = [];
  
  
        for (let i = 0; i <input.length; i++) {
  
            if (operater(input[i])) {
  
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
  
                let temp = input[i] + op2 + op1;
  
                s.push(temp);
            }
  
            else {
  
                s.push(input[i] + "");
            }
        }
  
        let ans = "";
        while (s.length > 0)
            ans += s.pop();
        return ans;
    }
     
    let input = "ABC/-AK/L-*";
        
    console.log("output: "+ postToPre(input));

 

     

// Q7. Write a program to convert prefix expression to infix expression.
const input1 = "*+ad-cd"
let output2 = []
for(let i=input1.length-1;i>=0;i--) {
    if(input1[i]==="+"||input1[i]==="-"||input1[i]==="*"||input1[i]==="/") {
        let op1 = output2.pop()
        let op2 = output2.pop()
        let temp = "(" + op1 + input1[i] + op2 + ")"
        output2.push(temp)
    }
    else {
        output2.push(input1[i])
    }
}
console.log(...output2)

// Q8. Write a program to check if all the brackets are closed in a given code snippet.
const input8="[(){}[]]"
const groups ={'[':']','{':'}','(':')'}
const input9=[]
for(let i=0;i<input8.length;i++){
    let y=input8[i]
    if(y==='[' || y==='{' || y==='('){
        input9.push(y)
    }
    else {
        let lastone = input9[input9.length-1]
        if(groups[lastone]==y){
            input9.pop()
        }
    }
}
if(input9.length===0){
    console.log("balanced ")
}
else{
    console.log("not balanced")
}


// Q9. Write a program to reverse a stack.
const input7=[8,4,5,6,2,7,9,3,1]
const arr7=[]
while(input7.length) {
    let data = input7.pop()
    arr7.push(data)
}
console.log(...arr7)


// Q10. Write a program to find the smallest number using a stack.
const input10=[11,15,12,18,9,7,3,5,1,8,6]
let min=input10[0]
while(input10.length) {
    let a= input10.pop()
    if(min > a) {
        min=a
    }
}
console.log(min)