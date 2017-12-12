
    let a = [90, 12, 284, 920, 573, 329, 243];
    let ShellSort = function (array) {
        let gap = Math.floor(array.length / 2);
        while (gap > 0) {
            for (let i = gap; i < array.length; i++) {
                for (let j = i; j > 0; j -= gap) {
                    if (array[j - gap] > array[j]) {
                        let tmp = array[j];
                        array[j] = array[j - gap];
                        array[j - gap] = tmp;
                    }
                    else {
                        break;
                    }
                }
            }
            gap = Math.floor(gap/2);
        }
        return array;
    };

    let  res = ShellSort(a);
    console.log(res);
