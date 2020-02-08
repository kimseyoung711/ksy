import React, { Fragment } from 'react';
import HeaderComponent from './components/header/HeaderComponent';
import TableTest from './components/table/TableTest';
import './css/style.scss';

const App = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <TableTest />
    </Fragment>
  );
}

export default App;
