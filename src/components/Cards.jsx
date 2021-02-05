import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CardTemplate from './Card';

const useStyles = makeStyles(() => ({
  cases: {
    color: 'red',
  },
  recovered: {
    color: 'green'
  },
  deaths: {
    color: '#C4C62B'
  },
  title: {
    marginBottom: '40px',
    textAlign: 'center',
    '@media (max-width: 770px)': {
      fontSize: '30px'
    }
  },
  image: {
    marginBottom: '40px',
    width: '250px'
  }
}));

const Cards = ({ data: { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered }, country, flag }) => { 
  const classes = useStyles();
  
  if (!cases) {
    return 'Loading...';
  }

  return (
    <>
      <Typography variant="h2" className={classes.title}>{country || 'Global'}</Typography>
      {country ? <img src={flag} alt={`${country}'s flag`} className={classes.image} /> : null}
      <Grid container alignItems="center" justify="center" spacing={4}>
        <CardTemplate
          cardTitle="Total Confirmed"
          fontColor={classes.cases}
          value={cases}
          todayValue={todayCases}
        />
        <CardTemplate
          cardTitle="Recovered"
          fontColor={classes.recovered}
          value={recovered}
          todayValue={todayRecovered}
        />
        <CardTemplate
          cardTitle="Deaths"
          fontColor={classes.deaths}
          value={deaths}
          todayValue={todayDeaths}
        />
      </Grid>
    </>
  );
};

export default Cards;