import React from 'react';
import styles from "./icon-switch.module.css";

export function IconSwitch({icon, onSwitch}) {
  return (
    <div className={styles["icons-switch"]}>
      <a href="#" onClick={onSwitch}>
        <span className="material-icons">{icon}</span>
      </a>
    </div>
  );
}