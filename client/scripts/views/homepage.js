import AbstractView from "./AbstractView";

export default class extends AbstractView {
  title = 'Homepage';

  async getHtml() {
    return `
    <div class="categories-container__wrapper">
  <h2 class="categories-container__text">Choose the preferred topic</h2>
  <div class="categories-container">
    <div class="categories-container__item --grammar">
      <button class="categories-container__btn --grammar">Grammar</button>
    </div>
    <div class="categories-container__item --vocabulary">
      <button class="categories-container__btn --vocabulary">Vocabulary</button>
    </div>
  </div>
</div>
  `;
  }
}
