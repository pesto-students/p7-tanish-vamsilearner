function spiralOrder(matrix) {
    let result = [];
    //It starts by initializing the four pointers to the first and last rows and columns of the matrix,
    // and a result array to hold the elements in spiral order.
    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;
    while (rowBegin <= rowEnd && colBegin <= colEnd) { //loop
        for (let i = colBegin; i <= colEnd; i++) result.push(matrix[rowBegin][i]); 
        rowBegin++;
        for (let i = rowBegin; i <= rowEnd; i++) result.push(matrix[i][colEnd]);
        colEnd--;
        if (rowBegin <= rowEnd) 
            for (let i = colEnd; i >= colBegin; i--) result.push(matrix[rowEnd][i]);
        rowEnd--;
        if (colBegin <= colEnd) 
            for (let i = rowEnd; i >= rowBegin; i--) result.push(matrix[i][colBegin]);
        colBegin++;
    }
    return result; //returns result
}

console.log(spiralOrder([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));
// time o(n^2)and space complexity O(n)