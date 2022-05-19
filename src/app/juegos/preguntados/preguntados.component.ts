import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,

        allQuestions = new Map([
          ["Cual es el animal nacional de Canada?" , ['a) Castor', 'b) Pato', 'c) Caballo', 0]],
          
          ["Cual de estos se convierte en alcohol al ser fermentado?" , ['a) Grano', 'b) Azucar' , 'c) Agua', 1]],
          
          ["En que año nacio San Martin?" , ['a) 1778', 'b) 1788', 'c) 1782', 1]]
        ]);
        
    function loadQuestion(curr:number) {
    var x = 0;
    var question = "";
    for(let entry of allQuestions.entries())
    {
      if(curr == x)
      {
        question = entry[0];
      }
      x++;
    }
      questionArea.innerHTML = '';
      questionArea.innerHTML = question as string;    
    }
    
    function loadAnswers(curr:number) {

    var x = 0;
    var answers: (string | number)[] = [];
    for(let entry of allQuestions.entries())
    {
      if(curr == x)
      {
        answers = entry[1];
      }
      x++;
    }     
      
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i] as string);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i: number, arr: string | any[]) {
      
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);             
        } else {
          addChecker(false);                        
        }
        console.log(allQuestions);
        if (current < allQuestions.size -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          questionArea.innerHTML = 'Finalizado';
          answerArea.innerHTML = '';
        }
                                
      };
    }
    
    function addChecker(bool:boolean) {
    
      var createDiv = document.createElement('div'), txt:Text;
      if(bool)
      {
        txt       = document.createTextNode("Correcta");

      }
      else
      {
        txt       = document.createTextNode("Incorrecta");
      }

      
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className = "correct";
        checker.appendChild(createDiv);
      } else {
        createDiv.className = "false";
        checker.appendChild(createDiv);
      }
    }
    loadQuestion(current);
    loadAnswers(current);

  }
}
