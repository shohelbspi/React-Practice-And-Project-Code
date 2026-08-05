import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [isNumberAllowed, setIsNumberAllowed] = useState(false)
  const [ischarAllowed, setIsCharAllowed] = useState(false)

  const [savePassword, setSaveSetData] = useState([])

  function passwordGenerate() {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumberAllowed) {
      str += "0123456789";
    }

    if (ischarAllowed) {
      str += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length)
      let charPicked = str.charAt(randomIndex)
      pass += charPicked

    }
    setPassword(pass)

  }

  useEffect(function () {

    passwordGenerate()

  }, [length, isNumberAllowed, ischarAllowed])

  const inputRef = useRef(null)

  function copyPassToClipboard() {
    navigator.clipboard.writeText(password)

    inputRef.current.select()
    alert('Copy To Clipboard')
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center p-4 select-none">
      <div className="w-full max-w-md bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-700/50">

        <h1 className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
          Password Generator
        </h1>

        <div className="relative mb-6">
          <input
            type="text"
            value={password}
            placeholder="Generated Password"
            readOnly={true}
            ref={inputRef}
            className="w-full bg-slate-900 border border-slate-700 text-emerald-400 font-mono text-lg px-4 py-3 pr-24 rounded-xl outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
          />
          <button className="absolute right-2 top-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-medium px-4 rounded-lg text-sm transition-all shadow-md shadow-blue-600/30" onClick={copyPassToClipboard}>
            Copy
          </button>
        </div>

        <div className="space-y-5">

          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium text-slate-300">
              <span>Password Length</span>
              <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-md font-mono text-base">
                {length}
              </span>
            </div>

            <input
              type="range"
              min={6}
              max={32}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <label
              htmlFor="isNumberAllowed"
              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${isNumberAllowed
                ? 'bg-blue-600/10 border-blue-500/50 text-white'
                : 'bg-slate-900/50 border-slate-700/60 text-slate-400 hover:border-slate-600'
                }`}
            >
              <input
                id="isNumberAllowed"
                type="checkbox"
                checked={isNumberAllowed}
                onChange={(e) => setIsNumberAllowed(e.target.checked)}
                className="w-4 h-4 accent-blue-500 rounded cursor-pointer"
              />
              <span className="text-sm font-medium">Include Numbers</span>
            </label>

            <label
              htmlFor="ischarAllowed"
              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${ischarAllowed
                ? 'bg-blue-600/10 border-blue-500/50 text-white'
                : 'bg-slate-900/50 border-slate-700/60 text-slate-400 hover:border-slate-600'
                }`}
            >
              <input
                id="ischarAllowed"
                type="checkbox"
                checked={ischarAllowed}
                onChange={(e) => setIsCharAllowed(e.target.checked)}
                className="w-4 h-4 accent-blue-500 rounded cursor-pointer"
              />
              <span className="text-sm font-medium">Special Chars</span>
            </label>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-slate-700/50">
            <button className="flex-1 bg-slate-700 hover:bg-slate-600 active:scale-95 text-slate-200 font-medium py-2.5 rounded-xl transition-all text-sm" onClick={function () {
              setPassword('')
              setIsCharAllowed(false)
              setIsNumberAllowed(false)
              setLength(8)

            }}>
              Reset
            </button>
            <button
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-medium py-2.5 rounded-xl transition-all text-sm shadow-lg shadow-emerald-600/20"
              onClick={function () {
                setSaveSetData(function (prevPass) {
                  return [...prevPass, password];
                });
              }}
            >
              Save Password
            </button>
          </div>

        </div>

        <div className='mt-8'>
          {savePassword.map(function (item) {
            return (
              <p key={item} className='p-4'>{item}</p>
            )
          })}
        </div>

      </div>

    </div>
  )
}

export default App