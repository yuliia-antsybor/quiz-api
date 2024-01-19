import AbstractView from "./AbstractView";

export default class extends AbstractView {
  title = 'Contacts';

  async getHtml() {
    return `<h1>Contacts works!</h1>`;
  }
}
