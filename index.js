const gameBoard = document.querySelector(".game-board")
const infoDisplay = document.querySelector(".info")


const startCells = [
    "","","","","","","","",""
]

let go = "circle"
infoDisplay.textContent="Circle Goes First"

function createBoard(){
    startCells.forEach((cell,index)=>{
        const cellElement =document.createElement("div")
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener("click",addToGo)
        gameBoard.append(cellElement)
    })
}

createBoard()

function addToGo(e){
    const goDisplay = document.createElement("div")
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent="It Is Now " + go + "'s Go."
    e.target.removeEventListener("click",addGo)
    checkScore()
}

function checkScore(){
    const allSquare = document.querySelectorAll(".square")
    const winingCombos=[
        [0,1,2],[3,4,5],[6,7,8]
        [0,3,6],[1,4,7],[2,5,8]
        [0,4,8],[2,4,6]
]
winingCombos.forEach(array=>{
    const circleWins =array.every(cell=>
        allSquare[cell].firstChild?.classList.contains("circle"))
    if(circleWins){
        infoDisplay.textContent="Circle Wins!"
        allSquare.forEach(square=>square.replaceWith(square.cloneNode(true)))
        return 
    }
})

winingCombos.forEach(array=>{
    const crossWins =array.every(cell=>
        allSquare[cell].firstChild?.classList.contains("cross"))
    if(crossWins){
        infoDisplay.textContent="Cross Wins"
        allSquare.forEach(square=>square.replaceWith(square.cloneNode(true)))
        return 
    }
})
}