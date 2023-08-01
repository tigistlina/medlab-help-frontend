import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Panel from './components/Panel'
import LabTest from './components/LabTest'

function App() {
  const kBaseURLPanels = 'http://127.0.0.1:5000/panels';
  const kBaseURLTests = 'http://127.0.0.1:5000/tests';

  const [panelData, setPanelData] = useState<Panel[]>([]);
  const [labTestData, setLabTestData] = useState<LabTest[]>([]);


  const getPanels = () => {
    axios
      .get<Panel[]>(kBaseURLPanels)
      .then((res) => {
        setPanelData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPanels();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Display panelData here using Bootstrap components */}
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="panelDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select a Panel
            </button>
            <div className="dropdown-menu" aria-labelledby="panelDropdown">
              {/* Render the dropdown items */}
              {panelData.map((panel) => (
                <button className="dropdown-item" key={panel.id} type="button">
                  {/* Display panel name or other properties as needed */}
                  {panel.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Display testData here using Bootstrap components */}
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="testDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select a Test
            </button>
            <div className="dropdown-menu" aria-labelledby="testDropdown">
              {/* Render the dropdown items */}
              {labTestData.map((labtest) => (
                <button className="dropdown-item" key={labtest.id} type="button">
                  {/* Display test name or other properties as needed */}
                  {labtest.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;