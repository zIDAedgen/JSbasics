var array = [6, 5, 3, 1, 8, 7, 2, 4];

var insertionSort = function (myList) {
    for (var i = 0; i < myList.length; i++) {
        j = i - 1;
        temp = myList[i];
        while (j >= 0 && myList[j] > temp) {
            myList[j + 1] = myList[j];
            j -= 1;
        }
        myList[j + 1] = temp;
    }
    console.log(myList);
}

insertionSort(array);