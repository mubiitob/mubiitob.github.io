
const riddles = [
    {
      question:
        "What do you throw out when you want to use it but take in when you don’t want to use it?",
      answer: "An anchor",
    },
    {
      question:
        "What belongs to you, but everyone else uses it? ",
      answer: "Your name",
    },
    {
      question:
        "What can travel all around the world without leaving its corner? ",
      answer: "A stamp",
    },
    {
      question:
        "What can you hold in your right hand, but never in your left hand?",
      answer: "Your left hand",
    },
    {
      question:
        "What gets wet while drying?",
      answer: "A towel",
    },
    {
      question:
        "What word in the dictionary is spelled incorrectly?",
      answer: "Incorrectly",
    },
  ];



function clearAll() {
    const riddle = document.querySelector(".riddleContent");
    riddle.innerHTML = "";
    }

    function revealRiddle() {

      const randomIndex = Math.floor(Math.random()* riddles.length);
        

        const randomRiddle = riddles[randomIndex];
      
        const riddleContainer = document.querySelector(".riddleContent");
        
        const riddleQuestionParagraph = document.createElement("p");
        const riddleAnswerParagraph = document.createElement("p");
        
        riddleQuestionParagraph.textContent = "Question: " + randomRiddle.question;
        riddleAnswerParagraph.textContent = "Answer: " + randomRiddle.answer;
        
        riddleAnswerParagraph.setAttribute("id", "riddleAnswer")

        
        clearAll();
        
       riddleAnswerParagraph.hidden = true;
       riddleContainer.appendChild(riddleQuestionParagraph);
       riddleContainer.appendChild(riddleAnswerParagraph);
      }


      function revealAnswer() { 
        const riddleContent = document.querySelector(".riddleContent");
        const riddleDisplayed = riddleContent.querySelector("p");
        const riddleAnswer = document.querySelector("#riddleAnswer");
            
      if (!riddleDisplayed){
              window.alert("There is no Riddle displayed. Please click the Riddle button to display the Riddle!");
            } else if (riddleDisplayed && riddleAnswer.hidden == false) {
              window.alert("Riddle Answer has already been revealed!");         
            } else if (riddleDisplayed && riddleAnswer.hidden == true) {
              riddleAnswer.hidden = false; 
            }
          }


    