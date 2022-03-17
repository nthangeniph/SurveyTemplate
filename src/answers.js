let questionsAnswers = [];
let submitButton = document.querySelector(".submitting-answers");

submitButton.addEventListener("click", receivedAnswers);
function receivedAnswers() {
  dummyQuestions.forEach(({ questionId }) => {
    questionsAnswers.push({
      questionId: questionId,
      answer: document.querySelector(`[id='${questionId}']`).checked,
    });
  });
  console.log("checking....", questionsAnswers);
}
