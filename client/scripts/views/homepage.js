import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Homepage");
  }


  async getHtml() {
    console.log(this.params);

    return `<h1>Welcome to quiz! It still works!</h1>`;
  }
}
