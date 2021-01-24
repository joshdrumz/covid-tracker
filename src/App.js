import React, { useState, useEffect } from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Switch,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';
import { fetchAll } from './api';

import Cards from './components/Cards';
import ScrollToTop from './components/ScrollToTop';

const useStyles = makeStyles(() => ({
  // nav styles
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

function App() {
  const [data, setData] = useState([]);
  const [themeMode, setThemeMode] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      setData(await fetchAll());
    };

    getData();
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: themeMode ? 'dark' : 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className={classes.root}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Covid-19 Tracker
              </Typography>
              <WbSunny />
              <Switch checked={themeMode} onChange={() => setThemeMode(!themeMode)} />
              <NightsStay />
            </Toolbar>
          </AppBar>
          <ScrollToTop />
        </div>
        <CssBaseline />
        <Cards data={data} />
      </Container>
    </ThemeProvider>
  );
};

export default App;