import React from 'react';
import {ShopCard} from "./ShopCard/index.js";
import styles from "./cards-view.module.css"

export function CardsView({products}) {
  let index = 0;
  return (
    <div className={styles.container}>
      {products.map(product => (
        <ShopCard key={index++} product={product}></ShopCard>
      ))}
    </div>
  );
}