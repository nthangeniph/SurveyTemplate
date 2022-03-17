const questionContainer = document.querySelector(".questions-container");

const dummyQuestions = [
  {
    question: "What is your home language ?",
    type: "input",
    questionId: "77tvjvjvjvjvjeds",
  },
  {
    question: "Are you still going to Limpopo?",
    type: "yes/no",
    questionId: "77tvjv43djvjeds",
  },
  {
    question: "What's you mode of transport?",
    type: "multiCheckBox",
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
    type: "range",
    questionId: "77tv1qaqvjvjvjeds",
  },
  {
    question: " Do you agree with Russians?",
    type: "radioGroup",
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
    type: "textArea",
    questionId: "7987v1qaqvjvjeds",
  },
];

function questionsGenerator(question, type, questionId, questionNumber, options = []) {
  switch (type) {
    case "input":
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
        `<input id=${questionId} placeholder=' e.g javascript' class='standard-input' />` +
        "</div>" +
        "</div>"
      );
    case "yes/no":
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
        `<input type="radio" id=${questionId} name=${questionId} value="{1}" />` +
        "<label for='yes'>Yes</label>" +
        "<br />" +
        `<input type="radio" id=${questionId}  name=${questionId} value="{0}" />` +
        "<label for='no'>No</label>" +
        "<br/>" +
        "</div>" +
        "</div>" +
        "</div>"
      );
    case "range":
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
        `<input id=${questionId} class="standard-input" type="range" min="0" max="10" />` +
        "</div>" +
        "</div>"
      );
    case "textArea":
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
        `<textarea id=${questionId} class="textAreaField" rows="4" cols="45">` +
        "" +
        "</textarea>" +
        "</div>" +
        "</div>"
      );
    case "radioGroup":
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

    case "multiCheckBox":
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

let questionViews = "";

dummyQuestions.forEach(({ question, questionId, type, options }, index) => {
  questionViews += questionsGenerator(question, type, questionId, index + 1, options);
});
questionContainer.innerHTML = questionViews;

function radioOptionCreator(questionId, options) {
  let initiaOptions = "";
  options.forEach(({ text, value }) => {
    initiaOptions +=
      `<input type="radio" id=${questionId} name=${questionId} value=${value} />` + `<label>${text}</label><br />`;
  }) + "</div>";
  return initiaOptions;
}

function checkOptionCreator(questionId, options) {
  let initiaOptions = "";
  options.forEach(({ text, value }) => {
    initiaOptions +=
      `<input type="checkbox" id=${questionId} name=${questionId} value=${value} />` + `<label>${text}</label><br />`;
  }) + "</div>";
  return initiaOptions;
}
