
    let a = [90, 12, 284, 920, 573, 329, 243];
    let BubbleSort = function (array) {
        let flag = true;
        for (let i = 0; i < array.length; i++) {
            flag = true;
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let tmp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = tmp;
                    flag = false;
                }
            }
            if (flag){
                return array;
            }
        }
        return array;
    };
    let res = BubbleSort(a);
    console.log(res)

