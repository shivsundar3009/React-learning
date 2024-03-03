import { useState } from "react"
import usecurrencyInfo from "./hooks/usecurrencyInfo"
import { Input } from "./components/index"

function App() {

  const [currency, setCurrency] = useState('inr')

  const data = usecurrencyInfo(currency)

  const options = Object.keys(data)

  console.log(options.map(i => i))


  return (
   <>
       <div className=" flex justify-center items-center bg-[url('./assets/currency.jpg')] h-screen">
        <div className="bg-[#bde0fe] h-80 w-1/2">
          <h1 className="text-3xl">currency Converter</h1>
       <Input input={5}/>
        </div>

       </div>


   </>
  )
}

export default App
