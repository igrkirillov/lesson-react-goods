import React from 'react';
import styles from "./shop-item.module.css";
import listViewStyles from "../../ListView/list-view.module.css";

export function ShopItem({product}) {
  return (
    <article className={[styles.container, listViewStyles.element].join(" ")}>
      <div className={styles.element}>
        <img src={product.img} alt={product.name} className={styles.image}/>
      </div>
      <div className={styles.element}>
        <h3>{product.name}</h3>
      </div>
      <div className={styles.element}>
        <span>{product.color}</span>
      </div>
      <div className={styles.element}>
        <span className={styles.price}>${product.price}</span>
      </div>
      <div className={styles.element}>
        <button className={styles["buy-button"]}>Add to cart</button>
      </div>
    </article>
  );
}