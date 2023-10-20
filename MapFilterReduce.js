let numbers = [3, 56, 2, 48, 5]

//Map - Create a new array by doing something with each item in an array.
function double(x){
    return x * 2
}

const newNumbers = numbers.map(double)
console.log(newNumbers);

    //ini untuk jika tanpa Map
    let newNumbers2= []
    function triple(x){
        newNumbers2.push(x * 3)
    } 

    numbers.forEach(triple)
    console.log(newNumbers2);

//Filter - Create a new array by keeping the items that return true.
const newFilter = numbers.filter((num)=>{
    return num > 10
})

console.log(newFilter);

    //tanpa Filter
    let newFilterForEach = []
    numbers.forEach((num)=>{
        if(num > 10){
            newFilterForEach.push(num)
        }
    })

    console.log(newFilterForEach);

//Reduce - Accumulate a value by doing something to each item in an array.
const newReduce = numbers.reduce((accumulator, num)=>{
    return accumulator + num
})

console.log(newReduce);

    // tanpa Reduce
    let newReduceForEach = 0
    numbers.forEach((num)=>{
        // newReduce = newReduce + num
        newReduceForEach += num
    })

    console.log(newReduce);

//Find - find the first item that matches from an array.
const newFind = numbers.find((num)=>{
    return num > 10
})

console.log(newFind);

//FindIndex - find the index of the first item that matches.
const newFindIndex = numbers.findIndex((num)=>{
    return num > 10
})

console.log(newFindIndex);