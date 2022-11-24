let temp=0;
let st=0;
let bt=0;
let count=0;
let cmin=0;
let i=0;
let flag=0;
let run=false;
let min=document.getElementById("minute");
let sec=document.getElementById("second");
let ses=document.getElementById("sestime");
let brtime=document.getElementById("breaktime");
let sdecbt=document.getElementById("sdecbt");
let sincbt=document.getElementById("sincbt");
let bdecbt=document.getElementById("bdecbt");
let bincbt=document.getElementById("bincbt");
let stp=document.getElementById("stp");
let tc=document.getElementById("time");
let title=document.getElementById("title");
let sqr=document.getElementById("sqr");
function incses(){
  st++;
  if(st<10){
    ses.innerHTML="0"+st+" min"
  }
  else{
    ses.innerHTML=st+" min";
  }
  if(st==1){
    sdecbt.disabled=false;
  }
}
function decses(){
  st--;
  if(st<10){
    ses.innerHTML="0"+st+" min"
  }
  else{
    ses.innerHTML=st+" min";
  }
  if(st==0){
    sdecbt.disabled=true;
  }
}
function incbr(){
  bt++;
  if(bt<10){
    brtime.innerHTML="0"+bt+" min";
  }
  else{
    brtime.innerHTML=bt+" min";
  }
  if(bt==1){
    bdecbt.disabled=false;
  }
}
function decbr(){
  bt--;
  if(bt<10){
    brtime.innerHTML="0"+bt+" min";
  }
  else{
    brtime.innerHTML=bt+" min";
  }
  if(bt==0){
    bdecbt.disabled=true;
  }
}
function start(){
  stpval=stp.innerHTML;
  if(stpval=="Start"){
    if(st==0){
      alert("Session time shoud be greater than 0");
      return false;
    }
    cmin=st;
    run=true;
    flag=1;
    stp.innerHTML="Pause";
    sdecbt.disabled=true;
    sincbt.disabled=true;
    bdecbt.disabled=true;
    bincbt.disabled=true;
    title.innerHTML="Session "+(++i);
    temp=(st*60);
    sqr.style.animationDuration=temp+"s";
    sqr.style.animationName="pomodoro";
    intvl=setInterval(timer,1000);
    sqr.style.animationPlayState="running";
  }
  else if(stpval=="Resume"){
    run=true;
    stp.innerHTML="Pause";
    sqr.style.animationPlayState="running";
    intvl=setInterval(timer,1000);
  }
  else{
    clearInterval(intvl);
    sqr.style.animationPlayState="paused";
    run=false;
    stp.innerHTML="Resume";
  }
}
function timer(){
  if(run==true){
    if(count==0&&cmin>0){
      cmin--;
      count=60;
    }
    if(count>0){
      count--;
    }
    
    if(count==0){
      if(cmin==0){
        if(flag==1&&bt>0){
          flag=0;
          cmin=bt;
          title.innerHTML="Break!";
          tc.style.borderColor="#ec6942";
          tc.style.color="#ec6942";
          temp=(bt*60);
          sqr.style.animationDuration=temp+"s";
        }
        else{
          flag=1;
          cmin=st;
          title.innerHTML="Session "+(++i);
          tc.style.borderColor="#00a0b0";
          tc.style.color="#00a0b0";
          temp=(st*60);
          sqr.style.animationDuration=temp+"s";
        }
      }
      
      
      
    }
    
    if(cmin<10){
      min.innerHTML="0"+cmin;
    }
    else{
      min.innerHTML=cmin;
    }
    if(count<10){
      sec.innerHTML="0"+count;
    }
    else{
      sec.innerHTML=count;
    }
  }
}
function reset(){
  clearInterval(intvl);
  run=false;
  i=0;
  count=0;
  min.innerHTML="00";
  sec.innerHTML="00";
  tc.style.color="#00a0b0";
  tc.style.borderColor="#00a0b0";
  stp.innerHTML="Start";
  sdecbt.disabled=false;
  sincbt.disabled=false;
  bdecbt.disabled=false;
  bincbt.disabled=false;
  title.innerHTML="Session";
  sqr.style.animationPlayState="paused";
  sqr.style.animationName="none";
}