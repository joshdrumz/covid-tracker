import { Card, CardContent, Typography, Grid, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  card: {
    margin: '0 2%'
  },
  subText: {
    marginTop: '0.8rem',
    fontStyle: 'italic'
  }
});

const CardTemplate = ({ fontColor, cardTitle, value, todayValue }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3} variant="outlined" elevation={6}>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h5" color="textPrimary" gutterBottom>
            {cardTitle}
          </Typography>
          <Typography variant="h3" className={fontColor}>
            <CountUp start={0} end={value} duration={2.75} separator="," />
          </Typography>
          <Tooltip title={`${todayValue} new ${cardTitle.toLowerCase()} cases`}>
            <Typography variant="body1" className={classes.subText}>
              +<CountUp start={0} end={todayValue} duration={2.75} separator="," />
            </Typography>
          </Tooltip>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardTemplate;