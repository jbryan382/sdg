// @ts-nocheck
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function App() {
  const [currencyResults, setCurrencyResults] = useState({ rates: {} })
  const [amount, setAmount] = useState(1)

  useEffect(async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/exchange_rates`
    )
    console.log(response)
    setCurrencyResults(response.data)
  }, [])

  return (
    <>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <ul>
          {Object.entries(currencyResults.rates).map(
            ([currencyCode, currencyDetails, taco], index) => {
              return (
                <li key={currencyCode}>
                  {currencyDetails.name} - {currencyCode.toUpperCase()}:
                  {(currencyDetails.value * amount).toFixed(2)} {index} {taco}
                </li>
              )
            }
          )}
        </ul>
      </div>
    </>
  )
}
