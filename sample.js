// let array = [1,1,2,2,3,3,4,4,5,5,8,8,10,12]

// // by using SET
// function removeDuplicates(array)
// {

// return [...new Set(array)].join(' ');

// }


// console.log(removeDuplicates(array));


//==================================================================================================
//by using for loop

function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let index = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[index]) {
            index++;
            arr[index] = arr[i];
        }
    }


    return index + 1;
}

let array = [1,1,2,2,3,3,4,4,5,5,8,8,10,12]
let newLength = removeDuplicates(array);

console.log("New length-  ", newLength);
console.log("after removing duplicates - ", array.slice(0, newLength));

//==================================================================================================


// time complexity - O(n)

