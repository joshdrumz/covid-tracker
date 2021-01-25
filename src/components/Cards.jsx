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
  }
}));

const Cards = ({ data: { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered } }) => { 
  const classes = useStyles();

  if (!cases) {
    return 'Loading...';
  }

  return (
    <div>
      {/* <Typography gutterBottom variant="h4" component="h2">Global</Typography> */}
      <Grid container justify="center">
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
          todayValue={todayDeaths}
        />
        <CardTemplate
          cardTitle="Deaths"
          fontColor={classes.deaths}
          value={deaths}
          todayValue={todayRecovered}
        />
      </Grid>
    </div>
  );
};

export default Cards;