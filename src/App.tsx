import React, { useEffect, useState } from 'react';
import './App.css';
import 'moment-timezone';
import moment from 'moment';
import Moment from 'react-moment';
import { useInterval } from 'react-use';


function App() {

  const breakMinutes = 50;
  const breakMmss = '5000';
  const breakFormat = 'YYYY-MM-DD HH:50';

  const NextBreakTime = () => {
    const [now, setNow] = useState<string>();
    const [breakTime, setBreakTime] = useState<Date>();
    
    useInterval(() => {
      setNow(moment().format('YYYYMMDDhhmmss'));
      const nowTime = moment().format('mmss');
      if (nowTime === breakMmss){
        let m = moment().add(1,'hour').format(breakFormat);
        setBreakTime(new Date(m));
      }
    }, 1000);
    
    const dateFormatting = (d: string):string => {
      const date = d.substr(1);
      return date;
    }

    useEffect(()=> {
      const minutes = moment().format('mm');
      if (Number(minutes)>= breakMinutes){
        let m = moment().add(1,'hour').format(breakFormat);
        setBreakTime(new Date(m));
      }else{
        let m = moment().format(breakFormat);
        setBreakTime(new Date(m));
      }
    },[])

    return (
      <>
        <Moment durationFromNow format={'mm분 ss초 남음'} date={breakTime} filter={dateFormatting}></Moment>
      </>
    )
  }

  return (
    <div className='timer'>
      <div className='Neon-text'>
        다음 쉬는 시간까지
        <div>
          {NextBreakTime()}
        </div>
      </div>
    </div>
  );
}

export default App;
