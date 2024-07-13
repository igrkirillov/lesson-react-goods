import React from 'react';
import styles from "./list-view.module.css";
import {ShopItem} from "./ShopItem/index.js";

export function ListView({products}) {
  let index = 0;
  return (
    <div className={styles.container}>
      {products.map(product => (
        <ShopItem key={index++} product={product}></ShopItem>
      ))}
    </div>
  );
}