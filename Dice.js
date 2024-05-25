const playbtn=document.querySelector(".playbtn");
var dice1= new Image();
dice1.src='./Image/Dice1.jpg';
var dice2= new Image();
dice2.src='./Image/Dice2.jpg';
var dice3= new Image();
dice3.src='./Image/Dice3.jpg';
var dice4= new Image();
dice4.src='./Image/Dice4.jpg';
var dice5= new Image();
dice5.src='./Image/Dice5.jpg';
var dice6= new Image();
dice6.src='./Image/Dice6.jpg';

let msg=document.querySelector("#gameMsg")
let user_dice=document.getElementById("U_dice");
let comp_dice=document.getElementById("C_dice");
const dice=document.querySelector(".dices")
let u_dice=0;
let c_dice=0;

const array=[dice1,dice2,dice3,dice4,dice5,dice6];
const choice=()=>{ 
    const random = Math.floor(Math.random()*6);
    return random;
}
playbtn.addEventListener("click",()=>{
    u_dice=choice();
    console.log("Users choice: ",u_dice)
    user_dice.src=array[u_dice].src;
 
    c_dice=choice();
    console.log("Comp choice: ",c_dice)
    comp_dice.src=array[c_dice].src;

    //winner dicision
    msg.classList.remove("msgContainer", "mssg", "mesg");
    msg.style.visibility = "visible";
    if(u_dice>c_dice){
        msg.classList.add("msgContainer");
        msg.innerHTML="You won";
    }
    else if(c_dice>u_dice){
        msg.classList.add("mssg");
        msg.innerHTML="You lost";
    }
    else{
        msg.classList.add("mesg");
        msg.innerHTML="Draw";
    }
})

