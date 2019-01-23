package me.com.selectionSort;

public class Main {

//for this implementation, we will find the largest number and send it to the back of the array

    public static void main(String[] args) {
	    int[] uAr = {7,3,6,10,2,5,1,0,4};

	    cLog(selectionSort(uAr));

    }

    public static int[] selectionSort(int[] arr){
		//the for loop will starts at the highest index and works its way to 0
		for(int i = arr.length-1; i>0 ; i--){
			int max = 0;
			for (int j = 1; j<=i; j++) {
				if(arr[j]>arr[max]){
					max = j;
				}
			}
			//only when the index of the highest number is found, will the swap happens
			int temp = arr[i];
			arr[i]=arr[max];
			arr[max] = temp;
		}
    	return arr;
	}

	public static void cLog(int[] arr){
		for(int i =0; i<arr.length; i++){
			System.out.println(arr[i]);
		}
	}
}
