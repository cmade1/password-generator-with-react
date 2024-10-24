import { useState } from "react";

const Charset =
  "qwertyuiopasdfghjklizxcvbnmQWERTYUOPASDFGHJKLZXCVBNMI!#$%&*+,-./:;<>?@";

function App() {
  const [value, setValue] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);

  function generatePassword() {
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * Charset.length);
      password = password + Charset[randomIndex];
    }

    setValue(password);
  }

  function copyText() {
    navigator.clipboard.writeText(value);
    alert("Copied the text: " + value);
  }

  return (
    <div className="flex flex-col gap-4  justify-center items-center mt-12 max-w-2xl mx-auto bg-red-900 min-h-[350px] min-w-[550px] rounded-3xl">
      <h1 className="text-4xl font-bold text-white">Password Generator</h1>
      <div className="flex w-full px-2">
        <input
          value={value}
          className="border-2 border-black rounded-xl py-4 w-full text-xl text-center"
          id="myInput"
        />
        <button
          className=" rounded-full bg-transparent px-4 font-bold text-white"
          onClick={copyText}
        >
          📁Copy
        </button>
      </div>
      <div className="flex justify-end w-full px-2 gap-2">
        <div className="">
          <p className="text-white">Password Length:</p>
          <input
            type="range"
            min="6"
            max="32"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-white"
          />
          <p className="text-center text-white">{passwordLength}</p>
        </div>
        <button
          onClick={generatePassword}
          className="bg-black text-white text-2xl rounded-full py-2 px-4"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default App;
