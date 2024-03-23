import AbstractView from "./AbstractView";
import { getCategoryQuestions } from '../api';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Quiz");
    this.currQuestionIndex = 2;
    // зберігає масив питань
    this.questions = [];
  }


  async getHtml() {
    let getQuestion;

    try {
      const { data } = await getCategoryQuestions(this.params.id);
      //передали в змінну масив питань
      this.questions = data.questions;

      //return html for one qustions
      getQuestion = this.renderQuestion(this.questions[this.currQuestionIndex]);
      
    } catch (e) {
      getQuestion = 'No questions found';
      console.log(e);
    }

    return `
      <div class="question-content__text">
        ${getQuestion}  
      </div>
    `;
  }

  //вивід вибраних варіантів у консоль
  onMounted() {
    const radioButtons = document.querySelectorAll("input.quiz-input");

    const findSelected = (e) => {
      console.log(e)
      // get input value from event
      const selected = e.target.value;
    };

    radioButtons.forEach(button => {
      button.addEventListener("change", findSelected);
    });
  }

  renderQuestion(question) {
    const title = `<div>${question.question}</div>`;

    const options = question.options.map((option, oIndex) => {
      return `
        <div>
          <input class="quiz-input" type="radio" name=${0} value=${oIndex}>${option} 
        </div>`
    });
    //up..show index of variants,oIndex
    return `${title}${options}`
  }


}

