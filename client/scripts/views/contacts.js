import AbstractView from './AbstractView'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Contacts')
  }

  async getHtml() {
    // console.log(this.params);

    return `<h1>Contacts works!</h1>`
  }
}
