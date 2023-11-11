function arraysStringDemo(arr, step) {
    let output=[]
    let arrLength = arr.length
    for (let i = 0; i < arrLength; i += step){
        let currentNum  = arr[i]
        output.push(currentNum)
    }
    return output
}
console.log(arraysStringDemo(['5', 
'20', 
'31', 
'4', 
'20'], 
2))

