import React, { useState, useEffect } from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { WbSunny, NightsStay } from '@material-ui/icons';
import covidLogo from './images/covid-logo.png';

import { fetchAll } from './api';

import Cards from './components/Cards';
import ScrollToTop from './components/ScrollToTop';

const useStyles = makeStyles(theme => ({
  center: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '@media (max-width: 770px)': {
      margin: '0 10%'
    }
  },
  img: {
    width: '370px',
    marginTop: '50px',
    '@media (max-width: 770px)': {
      width: '100%'
    }
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
      <CssBaseline />
      <div className={classes.center}>
        <img src={covidLogo} alt="" className={classes.img} />
      </div>
      <Container maxWidth="lg">
        {/* <WbSunny />
          <Switch checked={themeMode} onChange={() => setThemeMode(!themeMode)} />
          <NightsStay /> */}
        <ScrollToTop />
        <Cards data={data} />
      </Container>
    </ThemeProvider>
  );
};

export default App;