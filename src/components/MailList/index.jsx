import React from "react";
import Correspondence from "../Correspondence";
import styles from "./style.module.css";
import Search from "../Search";
import MailItem from "../MailItem";
import { useState, useEffect } from "react";
import useAxiosReq from "../../functions/useAxiosReq";

export default function MailList() {
  const { data , loading, error } = useAxiosReq({
    url: 'user/inbox/66164b0a5ae49749f8beb07b',
    defaultData: [] 
  });
  const [date, setDate] = useState(new Date());
  
  // const handleData = (data)=>{

  //   orderedData = data.map((c) => ({
  //     subject: c.chat.subject,
  //     message: c.chat.msg[c.chat.msg.length - 1].content,
  //     sender: c.chat.members.find(
  //       (m) => m._id.toString() == c.chat.msg[c.chat.msg.length - 1].from.toString()
  //       ).fullName,
  //       avatar: c.chat.members.find(
  //         (m) => m._id.toString() == c.chat.msg[c.chat.msg.length - 1].from.toString()
  //         ).avatar,
  //         lastDate: c.chat.lastDate,
          
  //       }));
  //       console.log("inbox:",orderedData);
  //       return orderedData;
  //     }
  
  function handleTime(time, date) {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;

    if (formattedDate == time.slice(0, 10)) {
      return time.slice(12, 16);
    } else {
      return time.slice(0, 5);
    }
}

  return (
    <>
      <div className={styles.mailList}>
        <Search />
        <div className={styles.listArea}>
          {data.map((d) => (
            <MailItem
              key={d._id}
              profileP={d.chat.members.find((m) => m._id.toString() == d.chat.msg[d.chat.msg.length - 1].from.toString()).avatar}
              sender={d.chat.members.length==2? d.chat.members.find(
                (m) => m._id.toString() == d.chat.msg[d.chat.msg.length - 1].from.toString()
                ).fullName :  d.chat.members.find(
                  (m) => m._id.toString() == d.chat.msg[d.chat.msg.length - 1].from.toString()
                  ).fullName+', '+ d.chat.members.find(
                    (m) => m._id.toString() == d.chat.msg[d.chat.msg.length - 2].from.toString()
                    ).fullName.split(' ')[0]+'+'+String(d.chat.msg.length - 2)}
              time={handleTime(d.chat.lastDate, date)}
              message={d.chat.msg[d.chat.msg.length - 1].content}
              unRead={d.isRead?0:1}
            />
          ))}
        </div>
      </div>
    </>
  );
}
