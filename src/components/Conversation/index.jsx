import React from 'react'
import styles from "./style.module.css"

export default function Conversation(props) {
  console.log(props);
  return (
    <div className={styles.Conversation}>
      <div className={styles.header}>{}</div>
      <div className={styles.headLine}>{props.subject}vhvkhk</div>
      <div className={styles.convers}>{}</div>
      <div className={styles.bottomLine}>{}</div>
    </div>
  )
}
