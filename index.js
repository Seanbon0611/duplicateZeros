const duplicateZeros = (arr) => {
    //loop through array
    //if the element is 0, splice starting at current index, and add a zero to the next element
    //skip the next element because the next element will be 0
    //if the length of the array ever gets larger than the original array length, pop the end of the array
    let numsLength = arr.length;
    let i = 0;
    while (i < numsLength) {
         if (arr[i] === 0) {
            arr.splice(i,0,0)
            i++
        }
        i++
        if (arr.length > numsLength) {
            arr.pop()
        }
    }
    return arr
}

duplicateZeros([1,0,2,3,0,4,5,0])