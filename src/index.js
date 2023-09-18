import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'

import App from '@/App';
import './assets/css/index.less'
import 'normalize.css'
import { lightTheme } from './assets/theme';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
      <Provider store={store}>
        {/* <Suspense fallback={<h3>加载中...</h3>}> */}
          <ThemeProvider theme={lightTheme}>
            <App />
          </ThemeProvider>
        {/* </Suspense> */}
      </Provider>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
