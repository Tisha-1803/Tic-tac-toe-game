let box = document.querySelectorAll(".btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let rest = document.querySelector(".reset");
let newGame = document.querySelector(".new");


let count =0;
let turnX =true;
let winPatterns =[
    [0,1,2],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [3,4,5],
    [0,4,8],
    [2,4,6],
    [0,3,6],
];


box.forEach((btn) => {
    btn.addEventListener("click",() =>{
        if(turnX){
            btn.style.color = "black";
            btn.innerText = "X";
            turnX = false;
        }
        else{
            btn.style.color="purple";
            btn.innerText = "0";
            turnX = true;
        }
        btn.disabled =true;
        count++;
        let win= checkWinner();

        if(count==9 && !win){
            Draw();
        }
    })
})

let showWinner = (winner) => {
    msg.innerText = "Winner! \n Congrats Player " + winner + " Wins!!" ;
    msgContainer.classList.remove("hide");
btn.disabled = true;
}

let Draw = () => {
    msg.innerText = "Game Over!\nIt's a Tie";
    msgContainer.classList.remove("hide");
    btn.disabled = true;
}

let resetGame = () => {
    for(let but of box){
    count=0;
    turnX = true;
    but.innerText="";
    but.disabled= false;
    msgContainer.classList.add("hide");
    }
}


  
let checkWinner = () => {
    for(let pattern of winPatterns){
       let pos1 = box[pattern[0]].innerText;
       let pos2 = box[pattern[1]].innerText;
       let pos3 = box[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3 && pos3==pos1){
                showWinner(pos1);
                return true;
            }
        }
    }
};

rest.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);