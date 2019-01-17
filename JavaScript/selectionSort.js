/*
Selection sort goes through the array to find the minimum number, and once it finds the minimum, it will swap the minimum to the front of the array.  
The algorithm will go through the array and continue to find the next minimum number and bring it to the front till it goes through the array's length
This Algorithm does less swapping than bubble Sort
O(n^2)
*/


uA=[42,23,4,16,8,15]

function selectionSort(arr){
    //goes through the entire array length
    for(var i = 0; i<arr.length-1; i++){
        //setting min index at the first index of each loop, which will be swap for the smallest number in the length of the array
        //Once this loop complete, the minimum number will be at the front, i will increase, thus the new i will be swapped for the next lowest number
        var min = i
        for(var j = i; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        //the swap happens after the minimum number is found in the inner loop, which only exists to find the index of the smaller number
        var temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
  return arr
}

console.log(selectionSort(uA))