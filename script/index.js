import { translates, defaultLanguage, speed, warningElement, password, inputCard, quizSection, functionButton, answersDiv } from './constnats.js';
import { valueSetter, tagCreator } from './helpers.js';
import { questionnaire } from './db.js';
//defaultLanguage = 'hy'

document.getElementById("password").addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".enter").click();
  }
})

functionButton.addEventListener('click', (e) =>{
  const wrongPasswordText = document.getElementById('wrongPassword');
  const inputValue = document.getElementById('password').value;
  
  if(inputValue == password){
      wrongPasswordText.innerHTML = '';
      inputCard.style.display = 'none';
      warningElement.style.display = 'none';
      quizSection.style.transform = ('translate(0,0)');
    
  }else{
    wrongPasswordText.innerHTML = 'wrong password';
  }

})

let i = 0;
const typeWriter = () => {
  const warrningText = translates[defaultLanguage].warrningText;
  if(i < warrningText.length){
    warningElement.innerHTML += warrningText[i];
    i++
    setTimeout(typeWriter,speed)
  }
}

typeWriter();

//quiz area

let correctAnswer = 0;

function showResult(){
  quizSection.style.display = 'none';
  answersDiv.style.transform = ('translate(0,0)');
  valueSetter('.anser_count', `Correct Answers Count <br>${questionnaire.length} / ${correctAnswer}`);
}



const quizGenerator = (quizList) => {
  let quizStep = 0;
  const quizCount = quizList.length;
  
  let percent = 0;
  const ulContainer = document.getElementById('quiz_options')

  function nextStep(position){

    const question = quizList[quizStep];
    quizStep++;
    ulContainer.innerText = '';
    valueSetter('#quiz_title', question.quizTitle);
    valueSetter('#helpers', question.question);

    question.variants.forEach((quiz,index) => {
      tagCreator('li', ulContainer, quiz, index)
    });

    ulContainer.addEventListener('click', function selectedOption(element){
      const userUnswer = element.target;
      if(userUnswer.tagName === 'LI'){  
        ulContainer.removeEventListener('click', selectedOption);
        if(userUnswer.dataset.option == question.correctAnswer){
          console.log(true);
          correctAnswer++;      
        }else{
          console.log(false);
        }
        if(quizCount > quizStep){
          nextStep();
        }else{
          showResult();
        }
      } 
    })
  }
  return nextStep;
};

const quizConfig = quizGenerator(questionnaire);

quizConfig();


