import React, { useState, useEffect } from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { WbSunny, NightsStay } from '@material-ui/icons';
import covidLogo from './images/covid-logo.png';

import { fetchAll } from './api';
import { fetchCountryFlag } from './api';

import Cards from './components/Cards';
import CountryPicker from './components/CountryPicker';
import Chart from './components/Chart';
import ScrollToTop from './components/ScrollToTop';

const useStyles = makeStyles((theme) => ({
  center: {
    overflowX: 'hidden',
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
    left: theme.spacing(2)
  },
  updated: {
    marginTop: '50px'
  },
  pushUp: {
    marginBottom: '16px'
  }
}));

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState('');
  const [flag, setFlag] = useState('');
  const [themeMode, setThemeMode] = useState(true);

  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      type: themeMode ? 'dark' : 'light'
    }
  });

  useEffect(() => {
    const getData = async () => {
      setData(await fetchAll());
    };

    getData();
  }, []);

  const handleCountryChange = country => {
    const getCountryData = async () => {
      setCountry(country);
      setData(await fetchAll(country));
    };

    getCountryData();
  };

  useEffect(() => {
    const getCountryFlag = async () => {
      setFlag(await fetchCountryFlag(country));
    }

    if (country) {
      getCountryFlag();
    }
  }, [country]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.darkMode}>
        <WbSunny />
        <Switch className={classes.pushUp} checked={themeMode} onChange={() => setThemeMode(!themeMode)} />
        <NightsStay />
      </div>
      <div className={classes.center}>
        <img src={covidLogo} alt="covid logo" className={classes.img} />
        <ScrollToTop />
        <Cards data={data} country={country} flag={flag} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} />
        <p className={classes.updated}>Last updated: {new Date(data.updated).toLocaleString()}</p>
      </div>
    </ThemeProvider>
  );
};

export default App;