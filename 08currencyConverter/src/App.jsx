import { useState } from "react"
import usecurrencyInfo from "./hooks/usecurrencyInfo"
import { Input } from "./components/index"

function App() {

  const [amount, setAmount] = useState(0)

  const [from, setFrom] = useState('inr')

  const [to, setTo] = useState('pond')

  const [convertedAmount, setConvertedAmount] = useState('0')

  const data = usecurrencyInfo(from)

  const options = Object.keys(data)

  console.log(options.map(i => i))

  const convert = () => {
    setConvertedAmount(amount * options[to])
  }
  return (
   <>
       <div className=" flex justify-center items-center bg-[url('./assets/currency.jpg')] h-screen">
        <div className="bg-[#bde0fe] h-80 w-1/2">
          <h1 className="text-3xl">currency Converter</h1>
          
           <Input
           label="From"
           amount={amount}
           currencyOptions={options}
           onAmountChange={amount => setAmount(amount)}
           onCurrencyChange={(currency) => setFrom(currency)}
           />

           <Input
           label="To"
           amount={convertedAmount}
           currencyOptions={options}
           onCurrencyChange={currency => setTo(currency)}
        
           />
           
           <div>
            <button type="button"
            onClick={convert}>CONVERT</button>
           </div>
        </div>

       </div>


   </>
  )
}

export default App
