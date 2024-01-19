export default class {
  title = '';

  constructor() {
    this.setTitle(this.title)
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }

}