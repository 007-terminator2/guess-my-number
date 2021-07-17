'use strict'
let secret_number=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
//document.querySelector(".number").textContent=secret_number;
//const func1=function();
document.querySelector(".check").addEventListener("click",function(){
    const x=Number(document.querySelector(".guess").value);
    if(!x){
        document.querySelector(".message").textContent="😱No number";
    }else if(x===secret_number){
        //change css
        document.querySelector(".message").textContent="🌠🌠🌠Yay! you won.";
        document.querySelector("body").style.backgroundColor="#ff7b54";
        document.querySelector(".number").style.width="30rem";
        document.querySelector(".number").textContent=secret_number;
        //update highscore
        if(score>highscore){
            highscore=score;
            document.querySelector(".highscore").textContent=score;
            document.querySelector(".message").textContent="🌟🌟you broke previous record!";
        }

    }else if(x<secret_number){
        //document.querySelector(".message").textContent="very low";
        //score--;
        if(score>3){
            score-=2;
            document.querySelector(".message").textContent="📉too low";
            document.querySelector(".score").textContent=score;
        }else{
             score=0;
             document.querySelector(".message").textContent="😜 you suck";
             document.querySelector(".score").textContent=score;
        }

    }else if(x>secret_number){
        //document.querySelector(".message").textContent="very low";
        //score--;
        if(score>1){
            score-=2;
            document.querySelector(".message").textContent="📈too high";
            document.querySelector(".score").textContent=score;
        }else{
             score=0;
             document.querySelector(".message").textContent="😜 you suck";
             document.querySelector(".score").textContent=score;
        }

    }
});
document.querySelector(".again").addEventListener("click",function(){
    score=20;
    document.querySelector(".score").textContent=score;
    document.querySelector(".message").textContent="start guessing...";
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").textContent="?";
    secret_number=Math.trunc(Math.random()*20)+1;
    
    
})