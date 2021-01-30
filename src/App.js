import React, { useState, useEffect } from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { WbSunny, NightsStay } from '@material-ui/icons';
import covidLogo from './images/covid-logo.png';

import { fetchAll } from './api';

import Cards from './components/Cards';
import CountryPicker from './components/CountryPicker';
import ScrollToTop from './components/ScrollToTop';

const useStyles = makeStyles((theme) => ({
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
      width: '100%',
      marginTop: '70px'
    }
  },
  darkMode: {
    position: 'fixed',
    top: theme.spacing(2),
  },
  pushUp: {
    marginBottom: '16px'
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
        <img src={covidLogo} alt="covid logo" className={classes.img} />
      </div>
      <Container maxWidth="lg">
        <ScrollToTop />
        <Cards data={data} />
        <CountryPicker />
        <div className={classes.darkMode}>
          <WbSunny />
          <Switch className={classes.pushUp} checked={themeMode} onChange={() => setThemeMode(!themeMode)} />
          <NightsStay />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;