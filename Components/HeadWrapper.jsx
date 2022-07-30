import React from 'react';
import styles from '../styles/headWrapper.module.css';
import Header from './Header';
import Representation from './Representation';

const HeadWrapper = () => {
  return (
    <>
      <div className={styles.topHead}>
        <div className="container">
          <Header />
          <Representation />
        </div>
      </div>
    </>
  );
};

export default HeadWrapper;
