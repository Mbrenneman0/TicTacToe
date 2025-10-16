let turn = 'X';

//create 2d array from buttons:
let grid = [];
for(let row = 0; row < 3; row++)
{
    let newRow = []
    for(let col = 0; col < 3; col++)
    {
        newRow.push(document.getElementsByClassName("cell")[row*3 + col])
    }
    grid.push(newRow);
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
        turn = "X";
    }
}

function checkEndGame()
{
    //check rows
    for(let row = 0; row < 3; row++)
    {
        
    }

}

