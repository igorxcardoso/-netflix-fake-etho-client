import React from 'react';
import './App.css';
import Login from './screens/login/login.screen';
import { Route, Routes } from 'react-router-dom';
import { LoginPath } from './screens/login/login.types'
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import { GlobalStyle } from './themes/main/global-style';
import { Provider } from 'react-redux';
import store from './store/store/store';

function App() {
  // const myText = "Olá";

  return (
    // // Exemplo
    // <div id={myText} className="test-text">
    //   <header>
    //     <b>{myText}</b>
    //     {<Login></Login>}
    //   </header>
    // </div>

    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path={LoginPath} element={<Login />} />
      </Routes>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
