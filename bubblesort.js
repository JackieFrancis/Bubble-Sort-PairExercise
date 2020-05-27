let swapCount = 1

function swap() {
    swapCount++
}

const bubbleSort = arr => {
    if(swapCount > 0) {
        for(let i = 0; i < arr.length; i++){
            let j = i + 1
            if(arr[i] > arr[j]) {
                let val1 = arr[i]
                arr[i] = arr[j]
                arr[j] = val1
                swap()
            }
        }
    } else {
        return arr
    }
    swapCount = 0
}