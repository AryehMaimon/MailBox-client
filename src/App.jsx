import React from "react";
import SideBar from "./components/SideBar";
import OptionsMenu from "./components/OptionsMenu";
import MailList from "./components/MailList";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <SideBar />
      <OptionsMenu />
      <Routes>
        <Route path="/" element={<MailList />} />
        <Route path="/inbox" element={<MailList />} />
        <Route path="/sent" element={<MailList />} />
        <Route path="favourites" element={<MailList />} />
      </Routes>

    
    </div>
  );
}
