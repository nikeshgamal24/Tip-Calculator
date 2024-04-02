export default function TotalBill({ questionText, billAmount, setBillAmount }) {
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