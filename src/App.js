import React from 'react';
import SetState from './Component/State&Props/SetState';
import Props from './Component/State&Props/Props';
import Goal from './Component/ConditionalRendering/Goal';
import CheckUser from './Component/ConditionalRendering/CheckUser';
import AndOperator from './Component/ConditionalRendering/AndOperator';
import Ternary from './Component/ConditionalRendering/Ternary';
import LifeCycleMethods from './Component/ReactLifeCycle/LifeCycle';
import Constructor from './Component/ReactLifeCycle/Constructor';
import Constructor2 from './Component/ReactLifeCycle/Constructor2';
import GetDerivedStateFromProps from './Component/ReactLifeCycle/getDerivedStateFromProps';
import Mounting from './Component/ReactLifeCycle/Mounting';
import Updating from './Component/ReactLifeCycle/Updating';
import HooksEx from './Component/Hooks/Hooks';
import SideEffect from './Component/Hooks/SideEffect';
import ControlledCompo from './Component/Forms/ControlledCompo';
import UncontrolledCompo from './Component/Forms/UncontrolledCompo';
import StateUpLifting from './Component/UpLiftingState/StateUpLifting';
import ComponentA from './Component/PropDrilling/ComponentA';
import Compo1 from './Component/ContextAPI/Compo1';
import RoutingFiles from './Component/Routing/RoutingFiles'
import ClickCounter from './Component/HOC/ClickCounter';
import HoverCounter from './Component/HOC/HoverCounter';
import FetchAPICall from './Component/API Call/FetchAPICall';
import AxiosCall from './Component/API Call/AxiosCall';
import OtherComponent from './Component/ReactLifeCycle/OtherCompo';
import OptMemo from './Component/UseMemo/OptMemo';
import CallBack from './Component/UseMemo/CallBack';
import UseReducer from './Component/UseReducer/UseReducer';
import CounterWithUseReducer from './Component/UseReducer/CounterWithUseReducer';
import HOC from './Component/HOC/HOC';
import { AddColorGreen } from './Component/HOC/AddColor';
import { AddColorRed } from './Component/HOC/AddColor';
import { FetchTodo } from './Component/Redux/FetchTodo/FetchTodo';
import { Component } from 'react';
import { Suspense } from 'react';
import LazyComponent from './Component/LazyCompo/LazyComponent';
const LazyComp=React.lazy(()=>import('./Component/LazyCompo/LazyComponent'))


function App() {
  // const name="Akansha";
  // const getData = (data) =>{
  //   console.log("This is data from child Component",data);
  // }
      // const name2="Akansha";
  


  return (
     <div>
      {/* Use of "State" */}
      {/* <SetState/> */}

      

     {/* Use of "Props" */}
      {/* <Props message="PrepByte"/> */}

      

      {/* Use of "if" */}
      {/* <Goal isGoal={false}/> */}
     

      {/* use of "if...else" */}
      {/* <CheckUser User={false}/> */}

    
      {/* Use of "&&" operator */}
      {/* <AndOperator cars={["hello", "prepbytes"]}/> */}

   

      {/* Use of "Tenary.js" */}
       {/* result:<Ternary/> */}

     


       {/* use of LifeCycle in class component */}
       {/* <LifeCycleMethods data={name}/> */}
       {/* <Constructor/> */}
       {/* <Constructor2/> */}
       {/* <GetDerivedStateFromProps/> */}
       {/* <OtherComponent/> */}
       {/* <Mounting/> */}
       {/* <Updating/> */}

      

       {/* use of Hooks */}
       {/* <HooksEx/> */}

       

       {/* <SideEffect/> */}

       

       {/* <ControlledCompo/> */}

      

       {/* <UncontrolledCompo/>  */}

       

       {/* <StateUpLifting getData={getData}/> */}



       {/* Use of "Prop Drilling" */}
       {/* <ComponentA Data={name2}/> */}

       {/* use of "Context API" */}
      {/* <Compo1/> */}
        

        {/* <RoutingFiles/> */}



        {/* <ClickCounter/>
        <br/>
        <HoverCounter/>*/}
        {/* <AddColorGreen value={<HOC/>}/> */}
        {/* <AddColorRed value={<HOC/>}/> */}

        
        {/* <FetchAPICall/> */}

        {/* <AxiosCall/> */}

        {/* <OptMemo/> */}

        {/* <CallBack/> */}

        {/* <UseReducer/> */}

        {/* <CounterWithUseReducer/> */}

        {/* <FetchTodo/> */}
        <Suspense fallback={<h1>Loading....Data is coming!!!!</h1>}><LazyComp/></Suspense>
   </div>
    )
}

export default App;
