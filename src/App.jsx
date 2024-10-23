import { useState } from "react";

const Charset =
  "qwertyuiopasdfghjklizxcvbnmQWERTYUOPASDFGHJKLZXCVBNMI!#$%&*+,-./:;<>?@";

function App() {
  const [value, setValue] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);

  function generatePassword() {
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * Charset.length);
      password += Charset[randomIndex];
    }

    setValue(password);
  }

  function copyText() {
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }

  return (
    <div className="flex flex-col gap-4  justify-center items-center mt-12 max-w-2xl mx-auto bg-blue-500 min-h-[350px] min-w-[550px] rounded-3xl">
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
        <label className="text-lg max-w-20 text-white">Password Length:</label>
        <input
          type="number"
          min="8"
          max="32"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          className="border-2 border-black rounded-xl py-4 text-center text-xl"
        />
        <button
          onClick={generatePassword}
          className="bg-gray-800 text-white text-2xl rounded-full py-2 px-4"
        >
          +Olustur
        </button>
      </div>
    </div>
  );
}

export default App;
