const questionContainer = document.querySelector(".questions-container");

const prevButton = document.querySelector(".submitting-prev");
const nextButton = document.querySelector(".submitting-next");
const saveButton = document.querySelector(".submitting-answers");

const questionTypes = Object.freeze({
  input: 0,
  textArea: 1,
  range: 2,
  yesNo: 3,
  radioGroup: 4,
  multiCheckBox: 5,
});

const dummyQuestions = [
  {
    question: "What is your home language ?",
    type: 0,
    questionId: "77tvjvjvjvjvjeds",
  },
  {
    question: "Are you still going to Limpopo?",
    type: 3,
    questionId: "77tvjv43djvjeds",
  },
  {
    question: "What's you mode of transport?",
    type: 5,
    questionId: "85411s686hhh",
    options: [
      {
        text: "I have a bike",
        value: 1,
      },
      {
        text: "I have a car",
        value: 2,
      },
      {
        text: "I have a Boat",
        value: 3,
      },
    ],
  },
  {
    question: "Rate your experience from 1 to 10",
    type: 2,
    questionId: "77tv1qaqvjvjvjeds",
  },
  {
    question: " Do you agree with Russians?",
    type: 4,
    questionId: "854758686hhh",
    options: [
      {
        text: "Agrees",
        value: 1,
      },
      {
        text: "Strongly Agree",
        value: 2,
      },
      {
        text: "Disagree",
        value: 3,
      },
    ],
  },
  {
    question: " Do you agree with Russians?",
    type: 4,
    questionId: "854758686hhh",
    options: [
      {
        text: "Agrees",
        value: 1,
      },
      {
        text: "Strongly Agree",
        value: 2,
      },
      {
        text: "Disagree",
        value: 3,
      },
    ],
  },
  {
    question: "Write your short bio",
    type: 1,
    questionId: "7987v1qaqvjvjeds",
  },
  {
    question: "Are you still going to Limpopo?",
    type: 3,
    questionId: "77tvjv9843djvjeds",
  },
];

tempDummyQuestions = dummyQuestions;

prevButton.addEventListener("click", () => {
  regenerateQuestions(dummyQuestions.slice(0, 5));
});
nextButton.addEventListener("click", () => {
  regenerateQuestions(dummyQuestions.slice(5));
});
saveButton.addEventListener("click", () => console.log("submitButton"));

function questionsGenerator(question, type, questionId, questionNumber, options = []) {
  switch (type) {
    case questionTypes.input:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        `<input id=${questionId} oninput="surveyUpdater('${questionId}','${questionTypes.input}')" value="${getValue(
          questionId
        )}" class='standard-input' />` +
        "</div>" +
        "</div>"
      );
    case questionTypes.yesNo:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer-yes-no'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        "<div class='yes-no'>" +
        `<input type="radio" id=${questionId} ${getRadioValue(questionId, 1)} oninput="surveyUpdater('${questionId}','${
          questionTypes.yesNo
        }')"  name=${questionId} value="1" />` +
        "<label for='yes'>Yes</label>" +
        "<br />" +
        `<input type="radio" id=${questionId} ${getRadioValue(questionId, 0)} oninput="surveyUpdater('${questionId}','${
          questionTypes.yesNo
        }')" name=${questionId} value="0" />` +
        "<label for='no'>No</label>" +
        "<br/>" +
        "</div>" +
        "</div>" +
        "</div>"
      );
    case questionTypes.range:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        `<input id=${questionId}  oninput="surveyUpdater('${questionId}','${questionTypes.range}')" value="${getValue(
          questionId
        )}" class="standard-input" type="range" min="0" max="10" />` +
        "</div>" +
        "</div>"
      );
    case questionTypes.textArea:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer-textAreaField'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        `<textarea id=${questionId} oninput="surveyUpdater('${questionId}','${questionTypes.textArea}')" class="textAreaField" rows="4" cols="45">` +
        "" +
        `${getValue(questionId)}` +
        "</textarea>" +
        "</div>" +
        "</div>"
      );
    case questionTypes.radioGroup:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer-checkRadio'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        " <div class='radioQuestions'>" +
        radioOptionCreator(questionId, options) +
        "</div>" +
        "</div>" +
        "</div>"
      );

    case questionTypes.multiCheckBox:
      return (
        "<div class='question-answer'>" +
        "<div class='question'>" +
        "<div class='dot'>" +
        `<span class='numbering'>${questionNumber}</span>` +
        "</div>" +
        `<h2>${question}</h2>` +
        " </div>" +
        "<div class='answer-checkRadio'>" +
        "<span class='arrow-answer'>&#10551;</span>" +
        " <div class='radioQuestions'>" +
        checkOptionCreator(questionId, options) +
        "</div>" +
        "</div>" +
        "</div>"
      );
    default:
      return null;
  }
}

regenerateQuestions(dummyQuestions.slice(0, 5));
