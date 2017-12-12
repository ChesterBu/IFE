
    let array = [90, 12, 284, 920, 573, 329, 243];

    let QuickSort = function (a) {
        if (a.length <= 1) {
            return a;
        }

        let pivot = Math.ceil(a.length / 2);
        let pivokList = a.splice(pivot, 1);
        let left = [];
        let right = [];
        for (let i = 0; i < a.length; i++) {
            if (a[i] < pivokList[0]) {
                left.push(a[i]);
            } else {
                right.push(a[i]);
            }
        }
        left = QuickSort(left);
        right = QuickSort(right);

        return left.concat(pivokList, right);
    };

    let res = QuickSort(array);
    console.log(res);


