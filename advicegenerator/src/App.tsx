import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Advice from "./Interfaces/interface";
import getData from './DataServices/DataServices';
import './App.css';
import AdviceComponent from './components/AdviceComponent';
import btn from './images/icon-dice.svg'

function App() {
  const [adviceMessage, setAdviceMessage] = useState<Advice>();
  const [newAdvice, setNewAdvice] = useState(true)

  useEffect(() => {

    const adviceData = async () => {
      const fetchedData = await getData();
      setAdviceMessage(fetchedData)


    }
    adviceData()
    console.log(adviceMessage)

  }, [!newAdvice])

  const getNewAdvice = () => {
    setNewAdvice(!newAdvice)
  }





  return (
    <>
      <div className='centerThis d-flex align-items-center justify-content-center flex-column'>
        {adviceMessage ? <AdviceComponent message={adviceMessage.slip.advice} id={adviceMessage.slip.id} /> : null}
        <div onClick={getNewAdvice} className='diceBtn'>
          <img src={btn} alt="New Advice" />
        </div>
      </div>
    </>
  );

}

export default App;

