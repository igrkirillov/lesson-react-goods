import React, {useState} from 'react';
import styles from "./store.module.css";
import {IconSwitch} from "../IconSwitch/index.js";
import {ListView} from "../ListView/index"
import {CardsView} from "../CardsView/index"
import {viewModes} from "../../viewModes.js";
import {getProducts} from "../../dataApi.js";

export function Store(props) {
  const switchViewMode = function (currentViewMode) {
    if (!currentViewMode || currentViewMode === viewModes.list) {
      return viewModes.cards;
    } else {
      return viewModes.list;
    }
  }
  const prepareState = function (currentViewMode) {
    return {
      products: getProducts(),
      viewMode: switchViewMode(currentViewMode)
    }
  }
  const [state, setState] = useState(prepareState(null));
  return (
    <div className={styles.container}>
      <IconSwitch icon={state.viewMode} onSwitch={() => setState(prepareState(state.viewMode))}></IconSwitch>
      {state.viewMode === viewModes.list
        ? <ListView products={state.products}></ListView> : <CardsView products={state.products}></CardsView>}
    </div>
  );
}