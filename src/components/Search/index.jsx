import React from "react";
import styles from "./style.module.css";

export default function Search() {
  return (
    <div className={styles.Search}>
    <input
      className= {styles.inputArea}
      type="text"
      placeholder="Search"
    />
    
  </div>
  );
}
