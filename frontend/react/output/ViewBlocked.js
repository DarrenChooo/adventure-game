import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import UserHeader from "./components/UserHeader.js";
import RetrievePlayers from "./components/RetrievePlayers.js";
API_URL = API_URL + "/users/";
const userid = localStorage.getItem("userid");
function ViewBlocked() {
  const [blocked, setBlocked] = React.useState([]);
  React.useEffect(function () {
    axios.get(API_URL + `block/` + userid).then(function (response) {
      console.log(response.data);
      setBlocked(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);
  function renderButton(player) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "request-button"
    }, /*#__PURE__*/React.createElement("button", {
      className: "button",
      onClick: () => {
        handleUnblock(player.userid, player.username);
      }
    }, "Unblock Player")));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UserHeader, {
    pageTitle: "View Blocked Players"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bodyContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flexContainer"
  }, /*#__PURE__*/React.createElement(RetrievePlayers, {
    players: blocked,
    renderButton: renderButton
  }))));
  function handleUnblock(targetUserId, targetUserName) {
    // Axios request to unblock user
    axios.delete(API_URL + `block/` + userid + `/` + targetUserId, {}).then(function () {
      alert(`Unblocked ${targetUserName}`);
      window.location.reload();
    }).catch(error => {
      console.log(error);
    });
  }
}

// To render onto HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(ViewBlocked, null));