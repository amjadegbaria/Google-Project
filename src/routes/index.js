import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../components/App';

// Webpack 2 supports ES2015 `import()` by auto-
// chunking assets. Check out the following for more:
// https://webpack.js.org/guides/migrating/#code-splitting-with-es2015

const importSchedule = (nextState, cb) => {
  import(/* webpackChunkName: "home" */ '../components/Schedule')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importStudentsView = (nextState, cb) => {
  import(/* webpackChunkName: "tools" */ '../components/StudentsView')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importMentorsView = (nextState, cb) => {
  import(/* webpackChunkName: "tools" */ '../components/MentorsView')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importCoordinatorsView = (nextState, cb) => {
  import(/* webpackChunkName: "tools" */ '../components/CoordinatorsView')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

const importAdminView = (nextState, cb) => {
  import(/* webpackChunkName: "tools" */ '../components/AdminView')
    .then(module => cb(null, module.default))
    .catch(e => {
      throw e;
    });
};

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={importSchedule} />
    <Route path="schedule" getComponent={importSchedule} />
    <Route path="students" getComponent={importStudentsView} />
    <Route path="mentors" getComponent={importMentorsView} />
    <Route path="coordinators" getComponent={importCoordinatorsView} />
    <Route path="admins" getComponent={importAdminView} />
  </Route>
);

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (module.hot) {
  require('../components/Schedule'); // eslint-disable-line global-require
  require('../components/StudentsView'); // eslint-disable-line global-require
}

export default routes;
