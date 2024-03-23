import AbstractView from "./AbstractView";
import { getCategories } from '../api';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Category");
  }


  async getHtml() {
    let categories;

    try {
      const { data } = await getCategories();

      categories = data.map((category) => `<a href="/quiz/${category.id}" data-link>${category.name}</a>`).join('');
    } catch (e) {
      categories = 'No categories found';
    }

    return `
        <div class="categories-container__wrapper">
          <h2 class="categories-container__text">Choose the preferred category</h2>
          <div class="categories-container">
            ${categories}        
          </div>
        </div>
    `;
  }
}
