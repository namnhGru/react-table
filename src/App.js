import React from 'react';
import './App.css';
import Table from './components/table/Table';

function App() {
  const data = {
    colNames: [
      {text: "Firstname"},
      {text: "Lastname"},
      {text: "Age"},
    ],
    headerSetting: {},
    rowData: [
      [{text: "Smith"},{text: "Jill"},{text: 30}],
      [{text: "Eve"},{text: "Jackson"},{text: 40}],
      [{text: "Adam"},{text: "Joe"},{text: 40}],
      [{text: "Silo"},{text: "Doe"},{text: 60}],
      [{text: "Nux"},{text: "Harper"},{text: 43}],
      [{text: "Ray"},{text: "Willkins"},{text: 21}]
    ]
  }
  return (
    <div className="App">
        <Table data={data}/>
    </div>
  );
}

export default App;
