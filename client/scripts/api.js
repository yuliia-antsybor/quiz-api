import axios from 'axios';

axios.defaults.timeout = 5000;

const API_BASE_URL = 'http://localhost:3200';

export function getCategories() {
  return axios.get(`${API_BASE_URL}/quiz/category`);
}

export function getCategoryQuestions(id) {
  return axios.get(`${API_BASE_URL}/quiz/${id}/questions`);
}
