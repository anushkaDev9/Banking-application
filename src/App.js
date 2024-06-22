import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import NavBar from './Navigation/Pages/NavBar';
import BadBank from './BadBank/Pages/BadBank'
import SignIn from './SignIn/Pages/SignIn'

import Deposit from './Deposit/Pages/Deposit'
import WithDraw from './WithDraw/Pages/WithDraw'
import Balance from './Balance/Pages/Balance'
import AllData from './AllData/Pages/AllData'
import { useState } from 'react';

function App() {
  const[balance,setBalance]=useState(0)
  const [data,setData]=useState([])
  let [count,setCount]=useState(1)
  const addData=(name,comment,type,date)=>{
    
    setCount(count+1)
           setData((data)=>[
            ...data,
            {
              id:count,
              name:name,
              comment:comment,
              type:type,
              date:date
            }
           ])
  }
  return (
    <div className="App">
      <NavBar />

      <div>
        <React.Fragment>
          <Routes>
            <Route path="/" exact element={<BadBank />}></Route>
            <Route path="/createaccount" exact element={<SignIn  />}></Route>
           
            <Route
              path="/deposit"
              exact
              element={<Deposit balance={balance} setBalance={setBalance}  addData={addData} />}
            ></Route>
            <Route
              path="/withdraw"
              exact
              element={<WithDraw balance={balance} setBalance={setBalance} addData={addData}/>}
            ></Route>
            <Route path="/balance" exact element={<Balance balance={balance}/>}></Route>
            <Route path="/alldata" exact element={<AllData data={data} balance={balance}/>}></Route>
          </Routes>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
