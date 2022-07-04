//Example 1:
function geeks(){
    console.log('for(;;)');
    for(let i=0; i<=10; i=i+2){
        console.log(i)
    }
}
geeks();

//Example 2:
let array=['Ha Noi', 20.32, 3000];
function arr(){
    console.log('for...of')
    for(let i of array){
        console.log(i)
    }
}
arr()

// Example 3:
let obj={
    name:'Huy',
    age: 24,
    address:'Hà Nội'
}

function fobject(){
    console.log('for... in');
    for (let i in obj){
        console.log(obj[i])
    }
}
fobject()