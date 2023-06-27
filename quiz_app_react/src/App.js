
import './App.css';
import { BrowserRouter as Router , Route } from "react-router-dom";
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScore from './pages/FinalScore';

function App() {
  return (
    <Router >
      <>
        <Route path='/'>
          <Settings />
        </Route>
        <Route path='/questions'>
          <Questions />
        </Route>
        <Route path='/score'>
          <FinalScore />
        </Route>
      </>

    </Router>
  );
}

export default App;