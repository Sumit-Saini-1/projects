let run=false;
let min=0;
let sec=0;
let milisec=0;
let i=0;
let stbt=document.getElementById("stbtn");
let lbtn=document.getElementById("lbtn");
let minute=document.getElementById("minute");
let second=document.getElementById("second");
let msec=document.getElementById("msec");
let lplist=document.getElementById("list");

function stopwatch(){
  let btval=stbt.innerText;
  
  if(btval=="Start"){
    stbt.innerText="Stop";
    stbt.style.background="hsl(4deg 45% 14%)";
    stbt.style.color="hsl(3deg 74% 52%)";
    stbt.style.boxShadow="2px 2px 0px hsl(4deg 45% 14%),-2px -2px 0px hsl(4deg 45% 14%)";
    lbtn.disabled=false;
    run=true;
    intr=setInterval(start,10);
  }
  if(btval=="Resume"){
    lbtn.innerHTML="Lap";
    stbt.innerText="Stop";
    stbt.style.background="hsl(4deg 45% 14%)";
    stbt.style.color="hsl(3deg 74% 52%)";
    stbt.style.boxShadow="2px 2px 0px hsl(4deg 45% 14%),-2px -2px 0px hsl(4deg 45% 14%)";
    run=true;
    intr=setInterval(start,10);
  }
  if(btval=="Stop"){
    stbt.innerText="Resume";
    stbt.style.background="hsl(0deg 0% 21%)";
    stbt.style.color="hsl(0deg 0% 73%)";
    stbt.style.boxShadow="2px 2px 0px hsl(0deg 0% 21%),-2px -2px 0px hsl(0deg 0% 21%)";
    run=false;
    clearInterval(intr);
    stop();
  }
} 
function start(){
  if(run==true){
    milisec=milisec+1;
    if(milisec==100){
      milisec=0;
      sec=sec+1;
      milisec=0;
      if(sec>59){
        min++;
        sec=0;
        milisec=0;
        if(min<10){
          minute.innerHTML="0"+min;
        }
        else{
          minute.innerHTML=min;
        }
      
      }
      if(sec<10){
        second.innerHTML="0"+sec;
      }
      else{
        second.innerHTML=sec;
      }
    }
    if(milisec<10){
      msec.innerHTML="0"+milisec;
    }
    else{
      msec.innerHTML=milisec;
    }
    
  }
}


function stop(){
  if(run==false){
    lbtn.innerHTML="Reset";
  }
}
function LapReset(){
  lrvalue=lbtn.innerHTML;
  
  if(lrvalue=="Reset"){
    run=false;
    lbtn.innerHTML="Lap";
    lbtn.disabled=true;
    min=0;
    sec=0;
    milisec=0;
    i=0;
    msec.innerHTML="00";
    second.innerHTML="00";
    minute.innerHTML="00";
    stbt.innerText="Start";
    lplist.innerHTML="";
  }
  if(lrvalue=="Lap"){
    let ls=document.createElement("li");
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let minstr="";
    let secstr="";
    let milistr="";
    div1.innerHTML="lap "+(++i);
    if(min<10){
      minstr="0"+min;
    }
    else{
      min=min;
    }
    if(sec<10){
      secstr="0"+sec;
    }
    else{
      secstr=sec;
    }
    if(milisec<10){
      milistr="0"+milisec;
    }
    else{
      milistr=milisec;
    }
    div2.innerHTML=minstr+":"+secstr+":"+milistr;
    
    if(i!=1){
      ls.style.borderTop="0px";
    }
    ls.style.display="flex";
    ls.style.justifyContent="space-between";
    lplist.appendChild(ls);
    ls.appendChild(div1);
    ls.appendChild(div2);
  }
}