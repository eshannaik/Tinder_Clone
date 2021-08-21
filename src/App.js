import './App.css';
import Header from './Components/Header.js'
import Cards from './Components/TinderCards.js'
import SwipeButton from './Components/SwipeButtons.js'

function App() {
  return (
    <div className="App">
      {/*<h1>MERN TINDER CLONE</h1>*/}

      {/*Header*/}
      <Header />
      <Cards />
      <SwipeButton />

    </div>
  );
}

export default App;
