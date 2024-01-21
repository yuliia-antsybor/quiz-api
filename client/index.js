import category from "./scripts/views/category";
import Category from "./scripts/views/category";
import contacts from "./scripts/views/contacts";
import Contacts from "./scripts/views/contacts";
import homepage from "./scripts/views/homepage";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  // Extract values from the result, starting from index 1
  const values = match.result.slice(1);

  // Extract keys from the route path using a regular expression
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  // Return an object with keys and values
  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
}

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  const routes = [
    { path: "/", view: homepage },
    { path: "/categories", view: category },
    { path: "/contacts", view: contacts }, // Assuming :id is a parameter
  ];

  // Rest of your routing logic

  //test matches for potential routes
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  }

  //creating new instans of the view that match route
  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
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