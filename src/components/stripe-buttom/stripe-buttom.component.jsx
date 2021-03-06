import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButtom = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_lUu36rUjOGaET0BltiSRXBeu00mUceN6YH";
  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothind .ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey= {publishableKey}
    />
  );
};

export default StripeCheckoutButtom;
