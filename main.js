let g = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'aywuv']

function gridChallenge(grid) {
    // Write your code here
    
    grid = grid.map(row => {
        return row.split('').sort()
    })
    
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid.length; j++){
            if ((i + 1) >= grid.length) break
        	if(grid[i][j] >= grid[i+1][j]) return 'NO'
        }
    }
    
    return "YES"
}

console.log(gridChallenge(g))