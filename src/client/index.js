import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Root from './Root';

const root = document.querySelector('#root');
const theme = createMuiTheme({
  direction: 'rtl',
});

const mount = RootComponent => {
  render(
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <RootComponent />
      </MuiThemeProvider>
    </AppContainer>,
    root
  );
};

if (module.hot) {
  module.hot.accept('./Root', () => {
    // eslint-disable-next-line global-require,import/newline-after-import
    const RootComponent = require('./Root').default;
    mount(RootComponent);
  });
}

mount(Root);
