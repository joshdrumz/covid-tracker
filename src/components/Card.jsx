import { Card, CardContent, Typography, Grid, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
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
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5" color="textPrimary" gutterBottom>
              {cardTitle}
            </Typography>
            <Typography variant="h4" className={fontColor}>
              <CountUp start={0} end={value} duration={2.75} separator="," />
            </Typography>
            <Tooltip title={`${todayValue} new ${cardTitle.toLowerCase()} cases`}>
              <Typography variant="body1" className={classes.subText}>
                +<CountUp start={0} end={todayValue} duration={2.75} separator="," />
              </Typography>
            </Tooltip>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};

export default CardTemplate;