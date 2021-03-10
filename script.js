
const que=[
    {
        question: "Q1: 2+2=",
        a:"22",
        b:"2",
        c:"0",
        d:"4",
        ans:"answer4"
    },
    {
        question: "Q2:Find the odd one out ",
        a:"Rose",
        b:"Cat",
        c:"dog",
        d:"Elephant",
        ans:"answer1"
    },
    {
        question: "Q3:What is the symbol of Sodium? ",
        a:"S",
        b:"So",
        c:"Na",
        d:"None",
        ans:"answer3"
    },
    {
        question: "Q4: Who has scored most number of centuries in International cricket?",
        a:"Virat Kohli",
        b:"Yuvraj Singh",
        c:"Sachin Tendulkar",
        d:"Gautham Gambhir",
        ans:"answer3"
    },
    {
        question: "Q5:5*5=",
        a:"25",
        b:"24",
        c:"18",
        d:"55",
        ans:"answer1"
    },
    {
        question: "Q6:What is largest organ in the body?",
        a:"Liver",
        b:"Heart",
        c:"Skin",
        d:"Lungs",
        ans:"answer3"
    },
    {
        question: "Q7:When did India get Independence ?",
        a:"1847",
        b:"1947",
        c:"2000",
        d:"1950",
        ans:"answer2"
    },
    {
        question: "Q8:Who won 2019 ICC world cup?",
        a:"India",
        b:"Newzealand",
        c:"Australia",
        d:"England",
        ans:"answer4"
    },
    {
        question: "Q9 :Is powerset of an emptyset is nullset?",
        a:"Yes",
        b:"No",
        c:"Maybe",
        d:"Cannot say",
        ans:"answer2"
    },
    {
        question: "Q10 : How many ICC world Cups did India win?",
        a:"0",
        b:"1",
        c:"2",
        d:"3",
        ans:"answer3"
    }
]
const question=document.querySelector('.question');
const answer1=document.querySelector('#option1');
const answer2=document.querySelector('#option2');
const answer3=document.querySelector('#option3');
const answer4=document.querySelector('#option4');
const answers=document.querySelectorAll('.answer');
const submit=document.querySelector('#submit');
const final=document.querySelector('#final');
let x=0;
function ready(){
    const list=que[x];
    question.innerHTML=list.question;
    answer1.innerHTML=list.a;
    answer2.innerHTML=list.b;
    answer3.innerHTML=list.c;
    answer4.innerHTML=list.d;
}
function end(){
    final.innerHTML='Your score is '+ y;
}
ready();
//let ans;
let y=0;

const checking =() =>{
    let c;
    
    answers.forEach((attemted) => {

            if(attemted.checked){
                c=attemted.id;
            }


        });
    return c;
};
function deselect(){
    answers.forEach((attemted)=>attemted.checked=false)
}
submit.addEventListener('click',() => {
    const attemtedans=checking();
    console.log(attemtedans);
  //x++;
  if(attemtedans==que[x].ans){
      y++;
  }
  x++;
  deselect();
  if(x<que.length){
      ready();
  }
  else{
    
    final.innerHTML ='<h2>You Score is : </h2>'+ y;
    final.classList.remove('finalscore');
    
    
  }
})
//console.log(y);