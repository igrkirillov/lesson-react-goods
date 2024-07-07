import React from 'react';
import styles from "./icon-switch.module.css";

export function IconSwitch({icon, onSwitch}) {
  return (
    <>
      <a href="#" onClick={onSwitch}>
        <img src={icon} alt="button switch" className={styles.img}></img>
      </a>
    </>
  );
}