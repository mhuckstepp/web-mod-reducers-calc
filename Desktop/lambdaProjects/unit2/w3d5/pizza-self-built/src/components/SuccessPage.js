import React from "react";

const SuccessPage = ({ orderSuccess }) => {
  return (
    <div class="flex flex-col justify-center align-center">
      <div class="self-center mt-16 w-2/3">
        <h1>Pizza is on the way!</h1>
        <h2>
          {" "}
          Hello {orderSuccess.name}, we have received your order for one{" "}
          {orderSuccess.size} {orderSuccess.sauce} pizza with{" "}
          {orderSuccess.pepp ? "pepporoni," : ""}{" "}
          {orderSuccess.saus ? "Sausage," : ""}{" "}
          {orderSuccess.anchovies ? "Anchovies," : ""}{" "}
          {orderSuccess.redpepper ? "Red pepper," : ""}{" "}
          {orderSuccess.xtracheese ? "XTRA Cheese," : ""}{" "}
          {orderSuccess.garlic ? "Garlic" : ""}{" "}
        </h2>
        <p>
          {orderSuccess.specInst
            ? `We will try to honor your request of - "${orderSuccess.specInst} "`
            : ""}{" "}
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
