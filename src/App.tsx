import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Panel from './components/Panel'
import LabTest from './components/LabTest'
import PanelList from './components/PanelList';

const kBaseURLPanels = 'http://127.0.0.1:5000/panels';
const kBaseURLTests = 'http://127.0.0.1:5000/tests';

const getAllPanels = () => {
  return axios
    .get<Panel[]>(kBaseURLPanels)
    .then((res) => {
      return res.data.map(convertPanelFromAPI)
    })
    .catch((err) => 
    console.log(err));
};

const convertPanelFromAPI = (apiPanel) => {
  const { id, name, organ_id } = apiPanel;
  const newPanel = { id, name, organID: organ_id };
  return newPanel;
};

const convertTestFromAPI = (apiTest) => {
  const { id, panel_id, name, description, info_url, normal_reference, unit_of_measure } = apiTest;
  const newTest = { id, panelID: panel_id, name, description, infoURL: info_url, normalReference: normal_reference, unitOfMeasure: unit_of_measure };
  return newTest;
};

const convertAltNameFromAPI = (apiAltName) => {
  const { id, test_id, name } = apiAltName;
  const newAltName = { id, testID: test_id, name };
  return newAltName;
};


function App() {

  const [panelData, setPanelData] = useState<Panel[]>([]);
  const [labTestData, setLabTestData] = useState<LabTest[]>([]);


  useEffect(() => {
    getPanels();
  }, []);

  // const onPanelSelect = (id) => {
  //   return axios
  //   .get(`${kBaseURLPanels}/${id}/tests`)
  //   .then((res) => {
  //     setPanelData(res.data.panel)

  //   })
  // }

  const getPanels = () => {
    getAllPanels()
    .then((panels) => {
      console.log(panels);
      setPanelData(panels);
    })
    .catch((err) => {
      console.log(err);
    });
  };


  return (
    <div>
      <PanelList panelData={panelData} />
  </div>
  );
}
export default App;