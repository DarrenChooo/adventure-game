/////////////////////////////////////////////////////////////////////
//Getting user id from the URL
/////////////////////////////////////////////////////////////////////
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let userId = urlParams.get('userid');
console.log(userId);
export default function UpdateCurrencyForm(props) {
  const [quantity, setQuantity] = React.useState("");
  const [results, setResults] = React.useState([]);
  React.useEffect(() => {
    axios.get(API_URL + `/${userId}`, {})
    // response successful
    .then(body => {
      setQuantity(body.data[0].quantity);
    })
    // error response
    .catch(error => {
      console.log(error);
    });
  }, []);

  //constantly update the state of the input
  const handleQtyChange = event => {
    //event.target.value is the value of the input
    setQuantity(event.target.value);
    console.log(quantity);
  };
  const handleSubmitForm = event => {
    //prevent page from refreshing
    event.preventDefault();
    console.log("User ID: " + userId);
    console.log("Quantity: " + quantity);

    // send axios request to update dialogue
    axios.put(API_URL + `/${userId}`, {
      quantity: quantity
    })
    // response successful
    .then(response => {
      console.log(response.data);

      //if button clicked, display results
      if (userId !== "" && quantity !== "") {
        setResults( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "displayDiv1"
        }, "Results: "), /*#__PURE__*/React.createElement("div", {
          className: "displayDiv2"
        }, "User ID: ", userId), /*#__PURE__*/React.createElement("div", {
          className: "displayDiv4"
        }, "Quantity: ", quantity)));
      }
      setTimeout(() => {
        alert(`User ID: ${userId} currency has been updated to ${quantity}!`);
      }, 300);
    })
    // error
    .catch(error => {
      console.log(error);
      alert(error);
    });
  };
  return /*#__PURE__*/React.createElement("form", {
    id: "updateForm",
    onSubmit: handleSubmitForm
  }, /*#__PURE__*/React.createElement("div", {
    className: "currencyCard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dataCtn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "formRow"
  }, /*#__PURE__*/React.createElement("input", {
    id: "UPDATEquantityInput",
    type: "text",
    value: quantity,
    onChange: handleQtyChange,
    placeholder: quantity
  }), /*#__PURE__*/React.createElement("label", null, "Quantity: ")), /*#__PURE__*/React.createElement("div", {
    className: "Button2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    id: "updateIdButton"
  }, "Update"))), results));
}