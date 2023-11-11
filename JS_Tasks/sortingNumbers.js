function sortingNums(numbers) {
    //sorting nums in ascending order
    let nums= numbers.slice().sort((a, b) => a-b)
    let output = []
    for (let i = 1; i <= numbers.length; i+=2) {
        output.push(nums.shift())
        if (nums.length > 0) {
            output.push(nums.pop())
        }
    }
    return output
}
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
