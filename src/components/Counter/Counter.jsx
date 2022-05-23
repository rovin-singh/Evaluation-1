import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <h1>Hello Counter</h1>
      <button data-cy="task-counter-increment-button">Increment</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button">Decrement</button>
    </div>
  );
};

export default Counter;
