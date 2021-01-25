import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19';

export const fetchAll = async () => {
  try {
    const {
      data: { updated, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered }
    } = await axios.get(`${url}/all`);

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