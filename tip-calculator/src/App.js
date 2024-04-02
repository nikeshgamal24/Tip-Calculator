import { useState } from "react";

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

function TotalBill({ questionText, billAmount, setBillAmount }) {
  return (
    <>
      <div>
        {questionText}
        <span>
          <input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </span>
      </div>
    </>
  );
}
function Question({ questionText, children }) {
  return (
    <>
      <div>
        {questionText}
        <span>{children}</span>
      </div>
    </>
  );
}

function TipPercentage({ tipPercentage, setTipPercentage }) {
  return (
    <select
      value={tipPercentage}
      onChange={(e) => setTipPercentage(Number(e.target.value))}
    >
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was Okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely Amazing (20%)</option>
    </select>
  );
}

function TotalReceipt({ tipAmount, billAmount, totalBillAmount }) {
  return (
    <div>
      <p>{`You pay $${totalBillAmount} ($${billAmount} + $${tipAmount} tip)`}</p>
    </div>
  );
}

function Reset({ onResetState }) {
  return <button onClick={onResetState}>Reset</button>;
}
