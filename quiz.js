var sum=0;
var i=0;
let questions=[
  {
   title:"Who is the father of C language?",
   Option:[
     
      "Steve Jobs",
      "James Gosling",
      "Dennis Ritchie",
      "Rasmus Lerdorf",
     
   ],
   correct:'C',
   score:1,
  },
  {
   title:"Which of the following is not a valid C variable name?",
   Option:[
     
      "int number;",
      "float rate;",
      "int variable_count;",
      " int $main;",
     
   ],
   correct:'D',
   score:1,
  },
  {
   title:"All keywords in C are in ____________.",
   Option:[
     
      "LowerCase letters",
      "UpperCase letters",
      "CamelCase letters",
      "None of the mentioned",
     
   ],
   correct:'A',
   score:1,
  },
  {
   title:"Which of the following is true for variable names in C?",
   Option:[
      "They can contain alphanumeric characters as well as special characters",
      "It is not an error to declare a variable to be one of the keywords(like goto, static)",
      "Variable names cannot start with a digit",
      "Variable can be of any length",
   ],
   correct:'C',
   score:1,
  },
  {
   title:"Which is valid C expression?",
   Option:[
     
      "int my_num = 100,000;",
      "int my_num = 100000;",
      "int my num = 1000;",
      "int $my_num = 10000;",
     
   ],
   correct:'B',
   score:1,
  },
  {
   title:"Which of the following cannot be a variable name in C?",
   Option:[
     
      "volatile",
      "true",
      "friend",
      "export",

     
   ],
   correct:'A',
   score:1,
  },
  {
   title:"What is short int in C programming?",
   Option:[
     
      "The basic data type of C",
      "Qualifier",
      "Short is the qualifier and int is the basic data type",
      "All of the mentioned",
     
   ],
   correct:'C',
   score:1,
  },
  {
   title:"Which of the following declaration is not supported by C language?",
   Option:[
     
      "String str;",
      "char *str;",
      "float str = 3e2;",
      "Both String str; & float str = 3e2;",
     
   ],
   correct:'A',
   score:1,
  },
  {
   title:"Which keyword is used to prevent any changes in the variable within a C program?",
   Option:[
     
      "immutable",
      "mutable",
      "const",
      "volatile",
     
   ],
   correct:'C',
   score:1,
  },
  {
   title:"What is the result of logical or relational expression in C?",
   Option:[
     
      "True or False",
      "0 or 1",
      "0 if an expression is false and any positive number if an expression is true",
      "None of the mentioned",
     
   ],
   correct:'B',
   score:1,
  },
];
function setque(){
  let x=document.getElementById("que");
  x.innerHTML=(i+1)+". "+questions[i].title;
  let a=document.getElementById('LA');
  a.innerHTML=questions[i].Option[0];
  let b=document.getElementById('LB');
  b.innerHTML=questions[i].Option[1];
  let c=document.getElementById('LC');
  c.innerHTML=questions[i].Option[2];
  let d=document.getElementById('LD');
  d.innerHTML=questions[i].Option[3];
}
function check(){
  let res=document.getElementById("result");
  let bt=document.getElementById("btn");
  var choose = document.getElementsByName('option');
  let btval=bt.innerText;
  if(btval=='Submit'){
    
    for(j = 0; j < choose.length; j++) {
      if(choose[j].checked){
      ans=choose[j].value;
      break;
      }
    }
    if(j==choose.length){
       alert("You have to choose atlist one option.");
       return false;
    }
    for(j=0;j<choose.length;j++){
      choose[j].disabled=true;
    }
    
    res.style.fontSize = "larger";
    res.style.padding="5px";
    res.style.width="100px";
    res.style.textAlign="center";
    
    if(ans==questions[i].correct){
      sum=sum+1;
      res.innerHTML="Correct";
      res.style.background="#d4edda";
      res.style.color="#276037";
    }
    else{
      res.innerHTML="Incorrect"
      res.style.background="#f8d7da";
      res.style.color="#8e4a70";
    }
    
    bt.innerHTML="next";
    bt.style.background="#28a745";
    bt.style.color="white";
  }
  else if(btval=='Restart'){
     window.location.reload();
  }
  else{
    i++;
    let bt=document.getElementById("btn");
    bt.innerHTML="Submit";
    bt.style.background="#ffc107";
    bt.style.color="black";
    res.innerHTML="";
    res.style.background="";
    res.style.padding="0px";
    res.style.width="0px";
    for(j=0;j<choose.length;j++){
      choose[j].disabled=false;
      choose[j].checked=false;
    }
    
    if(i==10){
       result();
    }
    else{
       setque();
    }
  }
  function result(){
     let h=document.getElementById("head");
     let key=document.getElementById("opt");
     let akt=document.getElementById("last");
     h.innerHTML="Score: "+sum;
     akt.innerHTML="<b>Answer key</b>";
     akt.style.fontSize="x-large";
     akt.style.margin="2rem 2rem";
     akt.style.marginBottom="0px";
     key.innerHTML="";
     let child=document.createElement("ul");
      child.id="ans-list";
      key.appendChild(child);
     for(j=0;j<10;j++){
        child=document.getElementById("ans-list");
        let list=document.createElement("li");
        child.appendChild(list);
        child.style.lineHeight="2";
        list.innerHTML=questions[j].title+" - ";
        let temp=questions[j].correct;
        if(temp=='A'){
           list.innerHTML+="<span>"+questions[j].Option[0]+"</span";
        }
        else if(temp=='B'){
           list.innerHTML+="<span>"+questions[j].Option[1]+"</span>";
        }
        else if(temp=='C'){
           list.innerHTML+="<span>"+questions[j].Option[2]+"</span>";
        }
        else{
           list.innerHTML+="<span>"+questions[j].Option[3]+"</span>";
        }

     }
     
     bt.innerHTML="Restart";
     bt.style.color="white";
     bt.style.background="#17a2b8";
  }
 
}