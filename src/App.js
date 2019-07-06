import React from "react";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import styled, { ThemeProvider as StyledThemeProvider } from "styled-components";
import Theme from "./components/Theme";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0 ;
  }
`

// props.theme のなかにテーマが格納されている
const StyledDiv = styled.div`
  color: ${props => props.theme.palette.primary.main};
`

const App = (props) => {
  return (
    <>
      <MaterialThemeProvider theme={Theme}>
        <StyledThemeProvider theme={Theme}>
          <>
            <GlobalStyle />
            <AppBar position="sticky">
              <Toolbar>
                Logo
              </Toolbar>
            </AppBar>
            <StyledDiv>test</StyledDiv>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
          </>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </>
  );
};

export default App;