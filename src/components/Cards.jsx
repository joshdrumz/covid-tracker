import { Grid, Typography } from '@material-ui/core';
import CardTemplate from './Card';

const Cards = ({ data: { updated, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered } }) => { 
  if (!cases) {
    return 'Loading...';
  }

  return (
    <div>
      <Typography gutterBottom variant="h4" component="h2">Global</Typography>
      <Grid container spacing={3} justify="center">
        <CardTemplate
          cardTitle="Cases"
          value={cases}
          lastUpdate={updated}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardTemplate
          cardTitle="Recovered"
          value={recovered}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardTemplate
          cardTitle="Deaths"
          value={deaths}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Cards;