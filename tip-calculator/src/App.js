import { useState } from "react";
import Reset from "./components/Reset"
import TotalReceipt from "./components/TotalReceipt";
import TipPercentage from "./components/TipPercentage";
import Question from "./components/Question";
import TotalBill from "./components/TotalBill";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [myTipPercentage, setMyTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);

  //derived state
  const tipAmount =
    ((myTipPercentage + friendTipPercentage) / 2 / 100) * billAmount;

  const totalBillAmount = Number(billAmount) + Number(tipAmount);

  //handler to reset the state
  function handleResetState() {
    setBillAmount(0);
    setMyTipPercentage(0);
    setFriendTipPercentage(0);
  }

  return (
    <>
      <TotalBill
        questionText="How much was the bill?"
        billAmount={billAmount}
        setBillAmount={setBillAmount}
      />
      <Question questionText="How did you like the service?">
        <TipPercentage
          tipPercentage={myTipPercentage}
          setTipPercentage={setMyTipPercentage}
        />
      </Question>
      <Question questionText="How did your friend like the service?">
        <TipPercentage
          tipPercentage={friendTipPercentage}
          setTipPercentage={setFriendTipPercentage}
        />
      </Question>
      <TotalReceipt
        tipAmount={tipAmount}
        billAmount={billAmount}
        totalBillAmount={totalBillAmount}
      />
      <Reset onResetState={handleResetState} />
    </>
  );
}









