import React from 'react'
import styles from "./style.module.css"

export default function InboxSign({value}) {
  return (
    <div className={styles.inboxSign}>{value? value:'1'}</div>
  )
}
