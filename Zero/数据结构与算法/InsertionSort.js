
    let a = [90, 12, 284, 920, 573, 329, 243];
    let InsertionSort = function (array) {
        for (let i = 1; i < array.length;i++) {
            let tmp = array[i];
            for (let j = i; j >= 0; j--) {
                if(array[j-1]>tmp){
                    array[j] =array[j-1];      //错位
                } else {
                    array[j]=tmp;
                    break;
                }
            }
        }
        return array;
    };

    let  res = InsertionSort(a);
    console.log(res);
