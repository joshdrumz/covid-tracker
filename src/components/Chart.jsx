import { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';

import { fetchDailyData } from '../api';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '65%',
    '@media (max-width: 770px)': {
      width: '100%'
    }
  }
}));

const Chart = ({ data: { cases, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  const classes = useStyles();

  useEffect(() => {
    const getDailyData = async () => {
      const data = await fetchDailyData();
      const reversedData = data.reverse();
      setDailyData(reversedData);
    };

    getDailyData();
  }, []);

  const barChart = (
    cases ? (
      <Bar
        data={{
          labels: ['Confirmed', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(251, 255, 0, 0.5)'],
              data: [cases, recovered, deaths]
            }
          ]
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` }
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [
            {
              data: dailyData.map(data => data.confirmed),
              label: 'Confirmed',
              borderColor: 'red',
              fill: true
            }, {
              data: dailyData.map(data => data.deaths),
              label: 'Deaths',
              borderColor: '#C4C62B',
              fill: true
            }, {
              data: dailyData.map(data => data.recovered),
              label: 'Recovered',
              borderColor: 'green',
              fill: true
            }
          ]
        }}
      />
    ) : null
  );

  return (
    <div className={classes.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;