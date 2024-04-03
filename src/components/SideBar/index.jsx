import React from "react";
import styles from "./style.module.css";
import Search from "../Search";
import { VscDashboard } from "react-icons/vsc";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { GoEye } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";

export default function SideBar() {
  const sideBarIcons = [
    { icon: <VscDashboard style={{ color: 'gray',width: '20px', height: '20px' }}/> },
    { icon: <HiOutlineClipboardCheck style={{ color: 'gray',width: '20px', height: '20px' }}/> },
    { icon: <GoEye style={{ color: 'gray',width: '20px', height: '20px' }} /> },
    { icon: <MdPeopleAlt style={{ color: 'gray',width: '20px', height: '20px' }}/> },
    { icon: <MdOutlineBarChart style={{ color: 'gray',width: '20px', height: '20px' }}/> },
    { icon: <IoMdVideocam style={{ color: 'gray',width: '20px', height: '20px' }}/> },
  ];
  return (
   <div className={styles.SideBar}>
      <img className={styles.SideBarLogo} src='public/logoMailBox.png'/>
      <ul className={styles.SideBarIcons}>
      {sideBarIcons.map((icon, index) => (
          <li key={index} className={styles.iconLi} >
            {icon.icon}
            </li>
        ))}
      </ul>
      <div className={styles.SideBarProfil}>{}</div>
   </div>
    
  );
}
