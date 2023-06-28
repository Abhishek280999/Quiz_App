
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScore from './pages/FinalScore';
import { Box, Container, Typography } from '@mui/material'

function App() {
  return (
    <Router >
    <Container maxWidth='sm'>
      <Box textAlign={'center'} mt={5}>
        <Switch>
          <Route exact path='/'   >
            <Typography variant='h2' fontWeight={"bold"}>
            Quiz App
            </Typography>
            <Settings />
          </Route>
          <Route path='/questions' >
            <Questions />
          </Route>
          <Route path='/score' >
            <FinalScore />
          </Route>
        </Switch>
      </Box>
    </Container>
  </Router>



  );
}

export default App;