/*
Selection sort goes through the array to find the minimum number, and once it finds the minimum, it will swap the minimum to the front of the array.  
The algorithm will go through the array and continue to find the next minimum number and bring it to the front till it goes through the array's length
*/


uA=[42,23,4,16,8,15]

function selectionSort(arr){
    for(var i = 0; i<arr.length-1; i++){
        for(var j = i; j<arr.length; j++){
            min = arr[i]
            if(arr[j]<min){
                arr[i] = arr[j]
                arr[j] = min  
            }
        }
    }
  return arr
}

console.log(selectionSort(uA))