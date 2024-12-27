// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function Challenge() {
  const [amount, setAmount] = useState("");
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        try {
          setIsLoading(true);
          if (!amount) return setIsLoading(false);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${currency1}&to=${currency2}`
          );
          if (!res.ok) throw new Error("Couldnt connect to the API");
          const data = await res.json();

          setResult(data.rates[currency2]);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
        }
      }

      if (currency1 === currency2) return setResult(amount);
      convert();
    },
    [amount, currency1, currency2]
  );

  return (
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(+e.target.value)} />
      <select disabled={isLoading} value={currency1} onChange={(e) => setCurrency1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select disabled={isLoading} value={currency2} onChange={(e) => setCurrency2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {result} {currency2}
      </p>
    </div>
  );
}
