export default function TotalReceipt({ tipAmount, billAmount, totalBillAmount }) {
    return (
      <div>
        <p>{`You pay $${totalBillAmount} ($${billAmount} + $${tipAmount} tip)`}</p>
      </div>
    );
  }