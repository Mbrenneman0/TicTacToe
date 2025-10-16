let turn = 'X';

//create 2d array from buttons:
grid = [new Array(3),new Array(3), new Array(3)]
for(let i = 0; i<9; i++)
{
    let col = i%3
    let row = Math.floor(i/3)

    grid[row][col] = document.getElementsByClassName("cell")[i];
}

console.log(grid);


function takeTurn(item)
{
    if(item.innerText === "")
    {
        item.innerText = turn;
        checkEndGame();
        nextTurn();
    }
}

function nextTurn()
{
    if(turn === "X")
    {
        turn = "O";
    }
    else
    {
        turn === "X";
    }
}

function checkEndGame()
{
    let gameOver = true; 
    //temporary value, if it fails one of the checks, it changes to false

    //check rows
    for(let row = 0; row < 3; row++)
    {
        for(let col = 1; col <3; col++)
        {
            if(grid[row][col].innerText !== grid[row][col-1])
            {
                gameOver = false;
            }
        }
    }

    //check cols
    for(let col = 0; col < 3; col++)
    {
        for(let row = 1; row <3; row++)
        {
            if(grid[row][col].innerText !== grid[row-1][col])
            {
                gameOver = false;
            }
        }
    }

}

