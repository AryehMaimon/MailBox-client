import React from "react";
import styles from "./style.module.css";
import { FaStar } from "react-icons/fa6";
import InboxSign from "../InboxSign";
import { FaEnvelope } from "react-icons/fa";
import Conversation from "../Conversation";
import { useState } from "react";

export default function MailItem(props) {
  // const openConversation = ()=>{
  //  return(
  //    <Correspondence key={props._id} subject ={props.subject}/>
  //    )
  // }
  // const handleClick = (e)=>{
  //   console.log('handleClick');
  //   openConversation()
  // }

  const [conversationOpen, setConversationOpen] = useState(false);

  // Function to toggle conversation state
  const toggleConversation = () => {
    setConversationOpen(!conversationOpen);
  };

  return (
   <>
   <div className={styles.MailItem}  >
      <img className={styles.pimg} src={props.profileP} onClick={toggleConversation}/>
      <div className={styles.senderAndMessage}>
        <h1 className={styles.kumbhSansHeading}>{props.sender} </h1>
        <div className={styles.kumbhSansPreMsg}>{props.message}</div>
      </div>
      <div className={styles.timeAndUnread}>
        <div className={styles.time}>{props.time}</div>
        <div className={styles.inboxOrStar}>{props.unRead>0? 
        <FaEnvelope className={styles.envelope}/>:
        <FaStar className={props.isFavorite?styles.starActive:styles.starNotActive} />
        
      }</div>
      </div>
    </div>
      {conversationOpen && <Conversation key={props._id} subject={props.subject} />}
      </>
  );
}
