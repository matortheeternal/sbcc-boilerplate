const { Router } = require('express');

let actions = {};

let registerAction = function(verb, path, execute) {
  if (!actions.hasOwnProperty(path))
    actions[path] = [];
  actions[path].push({ verb, execute });
};

let getRouter = function() {
  let router = Router();
  let routePaths = Object.keys(actions);
  routePaths.forEach(path => {
    let route = router.route(path);
    let routeActions = actions[path];
    routeActions.forEach(({ verb, execute }) => {
      route[verb](execute);
    });
  });
  return router;
};

module.exports = {
  registerAction, getRouter
};
