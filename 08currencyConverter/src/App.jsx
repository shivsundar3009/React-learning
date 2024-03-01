import { useState } from "react"
import usecurrencyInfo from "./hooks/usecurrencyInfo"

function App() {

  const [currency, setCurrency] = useState('inr')

  const data = usecurrencyInfo(currency)

  const options = Object.keys(data[currency])

  console.log(options.map(i => i))


  return (
   <>
       <h1 className='text-3xl bg-pink-400'>Currency Converter </h1>
   </>
  )
}

export default App
