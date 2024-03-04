import React from 'react'

function Input({
  amount,
  onAmountChange,
  amountDisabled = false,
  selectCurrency='inr',
  onCurrencyChange,
  label,
  currencyOptions,
  currencyDisabled
  
}) {

  return (

 
    <>
      <div>

        <div>

        <label htmlFor="">{label}</label>
        <input 
        type="number"
        value={amount}
        onChange={e => onAmountChange && onAmountChange(Number(e.target.value))}
        disabled={amountDisabled}

         />

        </div>

        <div>

          <p>Curreny Type</p>
          <select 
          name='currency'
          id='currency'
          value={selectCurrency}
          onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
         
          >
            {
              currencyOptions.map(
               (currency) => (
                <option value={currency} key={currency}>{currency}</option> 
               )
              )
            }
          </select>


        </div>

      </div>
    </>

  )
}

export default Input