var array = [0, 9, 1, 2, 3, 5, 4, 8, 7];

var selectionSort = function (myList) {
    for (var i = 0; i < myList.length; i++) {
        min_index = i;
        for (var j = i + 1; j < myList.length; j++) {
            if (myList[j] < myList[min_index]) {
                min_index = j;
                //console.log(j);
            }
        }
        var tmp = myList[min_index];
        myList[min_index] = myList[i];
        myList[i] = tmp;

    }
    console.log(myList);
}
selectionSort(array);