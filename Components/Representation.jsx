import React from 'react';
import styles from '../styles/headWrapper.module.css';
import Image from 'next/image';
import doctorImg from '../images/3-doctors.png';
const Representation = () => {
  return (
    <>
      <div className={styles.repWrapper} style={{ paddingBottom: '120px' }}>
        <div className={styles.repBottom}></div>
        <div
          className="wrapper"
          style={{ position: 'absolute', width: '100%' }}
        >
          <div className="col-6">
            <LeftSide />
          </div>

          <div className="col-6">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
};

export const RightSide = () => {
  return (
    <>
      <div className={styles.repRight}>
        <div className={styles.photoFrame}>
          <div className={styles.photoFrameFill}>
            <Image
              src={doctorImg}
              width={420}
              height={420}
              style={{ position: 'absolute', bottom: 0 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const LeftSide = () => {
  return (
    <>
      <div className={styles.repLeft}>
        <div>
          <h2 className={styles.repTitle}>
            <div style={{ fontSize: '120%' }}>Changing</div>
            Your <span>Eating</span> Habits
          </h2>
        </div>
      </div>
    </>
  );
};

export default Representation;
