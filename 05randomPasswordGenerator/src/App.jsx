import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8)
  const [bgBtn, setBgBtn] = useState('Red')
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbersAllowed) str += '0123456789'

    if (charactersAllowed) str += '`~!@#$%^&*()_-+={}[]:;"'

    for (let i = 0; i < length; i++) {
      let num = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(num)

    }
    setPassword(pass)
  }
    , [length, numbersAllowed, charactersAllowed, setPassword])

  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    {
      if(bgBtn === "Red") {
        setBgBtn('Blue')
      } else {
        setBgBtn('Red')
      }

      passwordRef.current.select()
      window.navigator.clipboard.writeText(password)
    }
  }, [password,bgBtn])

  useEffect(() => {
    passwordGenerator()
  }
    ,
    [length, numbersAllowed, charactersAllowed])

  return (
    <>
      <div className="w-full max-w-md rounded-xl mx-auto px-5 py-5 my-8 bg-gray-800 text-orange-500">
        <div className="text-white">PASSWORD GENERATOR</div>

        <div className="flex my-5 gap-3">
          <input type="text" className="w-full"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button className="text-white bg-blue-500 p-2 rounded-xl"
            style={{backgroundColor : bgBtn}}
            onClick={copyToClipboard}
          >Copy</button>
        </div>

        <div className="text-white flex gap-2">
          <input type="range"
            min={8}
            max={25}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="">Length:{length}</label>
          <input type="checkbox"
            onChange={() => { setNumbersAllowed((prev) => !prev) }}
          />
          <label htmlFor="">Numbers</label>
          <input type="checkbox"
            onChange={() => { setCharactersAllowed((prev) => !prev) }}
          />
          <label htmlFor="">Characters</label>
        </div>

      </div>
    </>
  )
}

export default App
