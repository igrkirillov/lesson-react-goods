import React from 'react';
import styles from "./list-view.module.css";
import {ShopItem} from "./ShopItem/index.js";

export function ListView({products}) {
  return (
    <div className={styles.container}>
      {products.map(product => (
        <ShopItem key={product.name} product={product}></ShopItem>
      ))}
    </div>
  );
}