

    let a = [90, 12, 284, 920, 573, 329, 243];
    let HeapSort = function (array) {
        let swap = function (array, i, j) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        };
        let Heapify = function (array, index, heapSize) {
            let iMax = index,
                ileft = 2 * index + 1,
                iRight = 2 * (index + 1);
            if (ileft < heapSize && array[iMax] < array[ileft]) {
                iMax = ileft;
            }

            if (iRight < heapSize && array[iMax] < array[iRight]) {
                iMax = iRight;
            }
            if (iMax !== index) { //iMax依然是父节点时子节点就不用调整了
                swap(array, iMax, index);
                Heapify(array, iMax, heapSize)
                //交换过后，递归调整那个被改变父节点的堆
            }
        };
        let buildHeap = function (array, heapsize) {
            //从最后一个非叶子节点开始自右向左建堆
            let iParent = Math.floor((heapsize - 1) / 2);
            //iParent为最后一个非叶子节点index
            for (let i = iParent; i >= 0; i--) {
                Heapify(array, i, heapsize);
            }
        };
        let sort = function (array) {
            buildHeap(array, array.length);
            //只是将最大的顶到第一个
            for (let i = array.length - 1; i > 0; i--) {
                swap(array, 0, i);
                //将最大的放到最后不用再排序
                Heapify(array, 0, i);
                //再搞出一个根，即剩下的当中的最大值；
            }
            return array;

        };
        return sort(array);
    };
    let res = HeapSort(a);
    console.log(res);
