function matrix(n) {
    function createMatrix(n) {
        let matrix = [];
        for (let i = 0; i < n; i++) {
            matrix.push([])
            for (let j = 0; j < n; j++) {
                matrix[i].push(n)
            }
        }
        return matrix.join('\r\n', ',').replaceAll(',', ' ')
    };
    console.log(createMatrix(n));
}
matrix(7)
matrix(3)