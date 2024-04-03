import React from "react";
import styles from "./style.module.css";
import { FaEnvelope } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { RiInbox2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import InboxSign from "../InboxSign";
import { IoTrash } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";

import { MdLabel } from "react-icons/md";

export default function OptionsMenu() {
  const fillters = [
    {
      icon: <RiInbox2Fill />,
      name: "Inbox",
      isActive: true,
    },
    {
      icon: <FaPaperPlane />,
      name: "Sent",
      isActive: false,
    },
    {
      icon: <FaStar />,
      name: "favourites",
      isActive: true,
    },
    {
      icon: <MdEdit />,
      name: "Drafts",
      isActive: false,
    },
    {
      icon: <IoTrash />,
      name: "Deleted",
      isActive: false,
    },
    {
      icon: <MdExpandMore />,
      name: "more",
      isActive: false,
    },
  ];
const labels = [
  {name: 'work',
  color: '#D0D3E3' },
  {name: 'Promising offers',
  color: '#F2DEA8' },
  {name: 'Work in progres',
  color: '#8EDCCF' },
  {name: 'In acceptance',
  color: '#B2E9FF' },
  {name: 'Read later',
  color: '#CDBFFF' },
 

]
  return (
    <div className={styles.OptionsMenu}>
      <div className={styles.headline}>
        <div className={styles.headlineRevBox}> {"<"} </div>
        Mailbox
      </div>
      <button className={styles.newMsgBut}>
       
        <FaEnvelope /> New message
      </button>
      <ul className={styles.fillters}>
        {fillters.map((f) => (
          <li>
            <div className={styles.liIcon} style={{ color: f.isActive ? '#00a389' : 'gray' }}> {f.icon} </div>
            <h3 className={styles.liName} style={{ color: f.isActive ? '#00a389' : 'gray' }}> {f.name} </h3>
            <div className={styles.liActive}>
              {f.isActive ? <InboxSign /> : ""}
            </div>
          </li>
        ))}
      </ul>
      <ul>
      <li className={styles.liName}>Labels</li>
{labels.map((l)=>(<li>
  < MdLabel className={styles.labelShaep} style={{ color: l.color }}/>
  <div className={styles.liName}>{l.name}</div>
</li>))}
      </ul>
    </div>
  );
}
