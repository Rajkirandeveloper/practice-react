
import { useState } from 'react';
import './App.css';
// import FormSubmit from './components/FormSubmit';
// import TodosReducer from './components/TodosReducer';
// import USeReducerComponent from './components/USeReducerComponent';
// import Crud from './components/Crud';
// import GetContextApi from './components/GetContextApi';

// import UseContextForm from './context/useContextForm';
// import ClickCounter from './components/HOC/ClickCounter';
// import HoverCounter from './components/HOC/HoverCounter';
import Child from './components/Child';
import APICRUD from './components/APICRUD';



function App() {
  // function onSubmit(props){
  //   console.log(props,"from APP.js")

  // }

  return (
   <div>
     
   <APICRUD/>
     
   </div>
  );
}

export default App;
//<FormSubmit  updateSubmissionData={updateSubmissionData}  />
//<Child   onSubmit={onSubmit}  />
