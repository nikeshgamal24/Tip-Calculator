
export default function TipPercentage({ tipPercentage, setTipPercentage }) {
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