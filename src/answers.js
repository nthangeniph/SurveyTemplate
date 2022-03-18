let questionsAnswers = [];
let submitButton = document.querySelector(".submitting-answers");

submitButton.addEventListener("click", receivedAnswers);
function receivedAnswers() {
  dummyQuestions.forEach(({ questionId, type }) => {
    if (type == questionTypes.yesNo || type == questionTypes.radioGroup) {
      let answers = document.querySelectorAll(`[id='${questionId}']`);

      questionsAnswers.push({
        questionId: questionId,
        answer: [...answers].find((elmnt) => elmnt.checked == true).value,
      });
      return;
    } else if (type == questionTypes.multiCheckBox) {
      let answers = [...document.querySelectorAll(`[id='${questionId}']`)];

      answers = answers.filter((elmnt) => elmnt.checked).map((elnt) => elnt.value);

      questionsAnswers.push({
        questionId: questionId,
        answer: answers,
      });
      return;
    }

    questionsAnswers.push({
      questionId: questionId,
      answer: document.querySelector(`[id='${questionId}']`).value,
    });
  });
  console.log("checking....", questionsAnswers);
}
