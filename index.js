// Add your functions here
function map (numArr, func){
  let newArr = [];
  numArr.forEach(element =>{
    newArr.push(func(element));  
});
return newArr;
}

function reduce(sourceArray, func, startingPoint = 0) {
    let result = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1
    for (i; i < sourceArray.length; i++) {
        result = func(sourceArray[i], result)
    }
    return result;
}