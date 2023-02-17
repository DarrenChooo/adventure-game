import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import AdminNavBar from "./components/AdminNavBar.js";
import ItemEquipStatsBarChart from "./components/ItemEquipStatsBarChart.js";
import ItemEquipStatsPieChart from "./components/ItemEquipStatsPieChart.js";
import ItemEquipStatsRadarChart from "./components/ItemEquipStatsRadarChart.js";
import ItemListView from "./components/ItemListView.js";
API_URL = API_URL + "/items/";
IMAGE_URL = IMAGE_URL + "/images/";
function TrackEquippedItems() {
  const [equippedItemStats, setEquippedItemStats] = useState([]);
  const [inspectItem, setInspectItem] = useState({
    itemname: "View items by clicking on them",
    itemid: 0,
    Damage: 0,
    Speed: 0,
    Cost: 0,
    Critrate: 0,
    Durability: 0
  });
  const thereIsNothing = Object.keys(inspectItem).filter(key => inspectItem[key] === 0).length === 6;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AdminNavBar, {
    pageTitle: "Items Data"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-container",
    id: "1"
  }, /*#__PURE__*/React.createElement(ItemEquipStatsPieChart, {
    equippedItemStats: equippedItemStats,
    setEquippedItemStats: setEquippedItemStats,
    setInspectItem: setInspectItem
  }), /*#__PURE__*/React.createElement(ItemEquipStatsBarChart, {
    equippedItemStats: equippedItemStats,
    setEquippedItemStats: setEquippedItemStats,
    setInspectItem: setInspectItem
  }), /*#__PURE__*/React.createElement(ItemEquipStatsRadarChart, {
    isItemSelected: !thereIsNothing,
    equippedItemStats: equippedItemStats,
    inspectItem: inspectItem
  }), /*#__PURE__*/React.createElement(ItemListView, {
    equippedItemStats: equippedItemStats,
    setInspectItem: setInspectItem
  })));
}

// To render onto HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(TrackEquippedItems, null));