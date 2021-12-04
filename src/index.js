import React from 'react';
import ReactDOM from 'react-dom';
// import Variabel from './reactjsdasar/Variabel';
// import Map from './Map';
// import StateProps from './StateProps';
// import StatePropsMobil from './StatePropsMobil';
// import App from './App';
//  import MapRoti from './MapRoti';
  // import LifeCycle from './LifeCycle';
//  import SubLifecycle from './SubLifecycle';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Index from './crud/Index';
// import Index from './Tugas/Index';
import Index from './Tugas2/Index';


ReactDOM.render(
  <React.StrictMode>
    {/* <Variabel /> */}
    {/* <Map /> */}
    {/* <StateProps /> */}
    {/* <StatePropsMobil /> */}
     {/* <MapRoti /> */}
     <Index />
      {/* <LifeCycle /> */}
     {/* <SubLifecycle /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

