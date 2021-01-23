import { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline, Container } from '@material-ui/core';
import { fetchAll } from './api';

import Cards from './components/Cards';
import NavBar from './components/NavBar';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(await fetchAll());
    };

    getData();
  }, []);

  // console.log(data);

  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <NavBar />
        <Cards data={data} />
        <Cards data={data} />
        <Cards data={data} />
        <Cards data={data} />
        <Cards data={data} />
      </Container>
    </ThemeProvider>
  );
};

export default App;