import React from 'react';
import styles from "./shop-card.module.css"
import cardsViewStyles from "../cards-view.module.css"

export function ShopCard(product) {
  return (
    <article className={[styles.container, cardsViewStyles.element].join(" ")}>
      <div>
        <h3>{product.name}</h3>
      </div>
      <div>
        <span>{product.color}</span>
      </div>
      <div>
        <img src={product.img} alt={product.name} className={styles.image}/>
      </div>
      <div className={styles["price-container"]}>
        <div>
          <span className={styles.price}>${product.price}</span>
        </div>
        <div>
          <button className={styles["buy-button"]}>Add to cart</button>
        </div>
      </div>
    </article>
  );
}