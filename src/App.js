import React from 'react';
import { Button } from '@material-ui/core';
import SwitchGroup from './SwitchGroup'


function App() {
  return (
    <div className="App">
      <Button variant="contained" color="secondary">Hello World</Button>
      <SwitchGroup label="COtización"/>
    </div>
  );
}

export default App;
