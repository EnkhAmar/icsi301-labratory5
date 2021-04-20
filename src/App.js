import logo from './logo.svg';
import './App.css';
import { Button, Grid } from '@material-ui/core'
// import Header from './components/Header'
import TabPanel from './components/TabPanel'

function App() {
  return (
    <div className="App">
      <Grid 
        container
        color='primary'
      />
      <TabPanel />
      {/* <Header value={3} /> */}
      <header className="App-header">
        <Button
          size='large'
          variant='contained'
          color='secondary'
        >Hello World</Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
