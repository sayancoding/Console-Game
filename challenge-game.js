function Question(questions,option,answer){
    this.questions=questions;
    this.option=option;
    this.answer=answer;
}

Question.prototype.displayQuestion=function(){
    console.log(this.questions);
    for(var i=0; i<this.option.length;i++){
       console.log(i+" : "+this.option[i]);
    }
}

Question.prototype.check=function(ans,callback){
    var sc;
    if(ans==this.answer){
        console.log("Correct Answer !");
        sc=callback(true);
    }else{
        console.log("Wrong Answer !");
        sc=callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore=function(score){
    console.log('your current score is..'+score);
    console.log('............................');
}

var q1=new Question("What is the lightweight language in the world ?",['PHP','Javascript','C#'],1);
var q2=new Question("What is the server-side language ?",['PHP','Javascript','HTML'],0);
var q3=new Question("Is the design more important in web development ?",['yes','no'],0);
var q4=new Question("What is the best things to control CLI or GUI for a developer?",['CLI','GUI'],0);
var q5=new Question("THis silly game is base on which language ?",['ruby','php','javascript'],2);
var q6=new Question("What is the base language in the world?",['C','python','C#'],0);


var questions=[q1,q2,q3,q4,q5,q6];

function score(){
    var sc=0;
    return function(Correct){
        if(Correct){
            sc++;
        }
        return sc;
    }
}
var keepScore=score();

function nextQuestion(){
    var n=Math.floor(Math.random()*questions.length);
    questions[n].displayQuestion();
    var answer=prompt("Firstly..type'exit' nd 'ok',Please Give Your Answer..");

    if (answer !=='exit'){
        questions[n].check(parseInt(answer),keepScore);
        nextQuestion();
        }
}

nextQuestion();
