import { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { fetchCountries } from '../api';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '30%',
    marginTop: '50px',
    '@media (max-width: 770px)': {
      width: '80%'
    }
  }
}));

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getCountries = async () => {
      setCountries(await fetchCountries());
    };

    getCountries();
  }, []);
  
  return (
    <FormControl className={classes.formControl}>
      <NativeSelect defaultValue="USA" onChange={e => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;