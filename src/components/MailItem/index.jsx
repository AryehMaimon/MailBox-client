import React from "react";
import styles from "./style.module.css";
import { FaStar } from "react-icons/fa6";
import InboxSign from "../InboxSign";

export default function MailItem(props) {
  return (
    <div className={styles.MailItem}>
      <img className={styles.pimg} src={props.profileP} />
      <div className={styles.senderAndMessage}>
        <h1 className={styles.kumbhSansHeading}>{props.sender} </h1>
        <div className={styles.kumbhSansPreMsg}>{props.message}</div>
      </div>
      <div className={styles.timeAndUnread}>
        <div className={styles.time}>{props.time}</div>
        <div className={styles.inboxOrStar}>{props.unRead>0? 
        <InboxSign value = {props.unRead}/>:
        <FaStar className={styles.starActive} />

              }</div>
      </div>
    </div>
  );
}
