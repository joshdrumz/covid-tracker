import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19';

export const fetchAll = async country => {
  let countryUrl = url;

  if (country) {
    countryUrl = `${url}/countries/${country}`;
  } else {
    countryUrl = `${url}/all`;
  }

  try {
    const {
      data: { updated, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered }
    } = await axios.get(countryUrl);

    return {
      updated,
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered
    };
  } catch (error) {
    console.error(error);
  }
}

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);

    return data.map(country => country.country);
  } catch (error) {
    console.error(error);
  }
};