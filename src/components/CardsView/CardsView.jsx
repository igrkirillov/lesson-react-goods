import React from 'react';
import {ShopCard} from "./ShopCard/index.js";
import styles from "./cards-view.module.css"

export function CardsView({products}) {
  return (
    <div className={styles.container}>
      {products.map(product => (
        <ShopCard product={product}></ShopCard>
      ))}
    </div>
  );
}