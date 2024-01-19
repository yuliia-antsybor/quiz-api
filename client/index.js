import Category from "./scripts/views/category";
import Contacts from "./scripts/views/contacts";

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}


const router = async () => {
  const routes = [
    { path: "/", view: Category },
    { path: "/contacts", view: Contacts },
  ];


  //test matches for potential routes
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  //creating new instans of the view that match route
  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();


  // console.log(match.route.view());
};

// Make navigation through history forward back
window.addEventListener("popstate", router);

//prevent defoult page reloading 
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

//test routes for potential matches


// function init() {
//   // get categories
//   // render HTML with categories
// }

// init();