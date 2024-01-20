import AbstractView from "./AbstractView";
import { getCategoryQuestions } from '../api';

export default class extends AbstractView {
  title = 'Contacts';

  async getHtml() {
    // console.log(this.params);

    return `<h1>Contacts works!</h1>`;
  }
}
