import React, {useState} from 'react';
import BpkCalendar from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, { INPUT_TYPES } from '@skyscanner/backpack-web/bpk-component-input';
import format from 'date-fns/format';
import BpkText from '@skyscanner/backpack-web/bpk-component-text'
import BpkButton from '@skyscanner/backpack-web/bpk-component-button'

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss'

const getClassName = cssModules(STYLES);
const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  // ...
];



const Calendar = ({ selectionConfiguration, onDateSelect }) => (
  <BpkCalendar
    id="calendar"
    onDateSelect={onDateSelect}
    formatMonth={formatMonth}
    formatDateFull={formatDateFull}
    daysOfWeek={daysOfWeek}
    weekStartsOn={1}
    changeMonthLabel="Change month"
    nextMonthLabel="Next month"
    previousMonthLabel="Previous month"
    selectionConfiguration={selectionConfiguration}
  />
);


const App = () => {

  const [date, setDate] = useState(null);

  const handleDateSelect = (date) => {
    setDate(date);
  };

  return (
  <div className={getClassName('App')}>
    <header className={getClassName('App__header')}>
      <div className={getClassName('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
      </div>
    </header>
    <main className={getClassName('App__main')}>
     
      <Calendar className={getClassName('App__main')} selectionConfiguration={{ type: 'single', date }} onDateSelect={handleDateSelect} />
      
      
    </main>
    <BpkButton onClick={() => alert('You choose your next flight!')}>Continue</BpkButton>
  </div> )
};

export default App;
