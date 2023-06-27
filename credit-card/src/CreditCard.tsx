import React, { useState } from "react";

export const CreditCard = () => {
  const [creditCardNumber, setCreditCardNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccessMessage] = useState<string>("");

  const validateCreditCard = () => {
    setSuccessMessage("");
    setError("");
    try {
      fetch("http://localhost:3001/credit-card-validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creditCard: creditCardNumber,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.validCard) {
            setSuccessMessage("The provided credit card was valid.");
          } else {
            setError("The provided credit card was not valid.");
          }
        });
    } catch (error) {
      console.error(error);
      setError("Something went wrong.");
    }

    return true;
  };

  return (
    <>
      <input
        type="text"
        id="credit-card"
        name="credit-card"
        onChange={(e) => setCreditCardNumber(e.target.value)}
      />
      <button type="button" onClick={() => validateCreditCard()}>
        Validate
      </button>

      {!!success && `${success}`}
      {!!error && `Error: ${error}`}
    </>
  );
};
