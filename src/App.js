import React from 'react';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'Jhon', label: 'Jhon' },
  { value: 'Doe', label: 'Doe' },
  { value: 'Rose', label: 'Rose' },
];


class App extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here is the  <code>Chip Input</code> component.
        </p>
        <div className="custom">
            <Select
            isMulti = {true}
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            />
        </div>
        
      </header>
    </div>
     
    );
  }
}

export default App;
