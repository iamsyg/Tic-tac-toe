let box=document.querySelectorAll(".box");
let ng=document.querySelector("#butt1");
let w=document.querySelector(".win");
let player0=true;
let win="";
let count=0;
ng.addEventListener("click", ()=>{

    box.forEach((b)=>{

        b.innerText="";
        w.classList.add("win");
        w.classList.remove("win2");
        b.disabled=false;
        count=0;
        
    });
});

for(let b of box)
{
    b.addEventListener("click",()=>{
        count++;
        console.log(count);
        if(player0)
        {
            b.innerText="O";
            b.style.color="blue";
            player0=false;
        }
        else
        {
            b.innerText="X";
            player0=true;
            b.style.color="black";
        }
        b.disabled=true;
        if(count==9)
        {
            condition=false;
            winner(win,condition);
        }
        checkwin();
    });
}

let arr=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
let condition;

let checkwin =()=>{

    for(let i of arr)
    {
        let pos1=box[i[0]].innerText;
        let pos2=box[i[1]].innerText;
        let pos3=box[i[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                win=`${pos1} win`;
                condition=true;
                winner(win,condition);
            }
        }
    }
}

let winner =(win,condition)=>{

    if(condition==true)
    {
    w.innerText=win;
    w.classList.remove("win");
    w.classList.add("win2");
    for(let b of box)
    {
        b.disabled=true;
    }
    }
    else
    {
        w.innerText="Tie";
        w.classList.remove("win");
        w.classList.add("win2");
        for(let b of box)
        {
            b.disabled=true;
        }
    }
}