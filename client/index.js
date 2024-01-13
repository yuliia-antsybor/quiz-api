import { getCategories, getCategoryQuestions } from './scripts/api';

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("viewing Homepage") },
    { path: "/categories", view: () => console.log("viewing Categories") },
  ];

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  console.log(potentialMatches);
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});


//test routes for potential matches


// function init() {
//   // get categories
//   // render HTML with categories
// }

// init();