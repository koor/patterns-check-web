import "./styles.css";
import {
  regExp3Digits,
  regExp4Digits,
  regExp5Digits,
  regExp6Digits,
  regExpLongDigits,
  regExp0x,
  regExpSpecial,
  RegExpObj
} from "./regExp";
import { useState } from "react";

interface regExpMap {
  [key: number]: RegExpObj;
}

export default function App() {
  const regExpMap: regExpMap = {
    3: regExp3Digits,
    4: regExp4Digits,
    5: regExp5Digits,
    6: regExp6Digits
  };

  const [input, setInput] = useState<string>("");
  const [patterns, setPatterns] = useState<string>("");

  function matchRegExp(value: string, regExpObj: RegExpObj): Set<string> {
    const result: Set<string> = new Set();
    for (let key in regExpObj) {
      if (regExpObj[key].test(value)) result.add(key);
    }
    return result;
  }

  function detectPatterns(name: string): Set<string> {
    if (!name.toLowerCase().endsWith(".bit")) {
      alert("invalid name");
    }
    const value: string = name.slice(0, -4).toLowerCase();
    const isNumber: boolean = Number.isInteger(+value);
    let result: Set<string> = new Set();

    switch (true) {
      case value.startsWith("0x"):
        result = matchRegExp(value, regExp0x);
        break;
      case value.length >= 3 && value.length <= 6 && isNumber:
        const regExp = regExpMap[value.length];
        result = matchRegExp(value, regExp);
        break;
      case value.length > 6 && isNumber:
        result = matchRegExp(value, regExpLongDigits);
        break;
      default:
        result = matchRegExp(value, regExpSpecial);
    }
    setPatterns(Array.from(result).toString());
    console.log(result);
    return result;
  }

  return (
    <div className="App">
      <h1>.bit name pattern check</h1>
      <p>
        Enter name:{" "}
        <input
          type="text"
          placeholder="xxx.bit"
          onChange={(e) => setInput(e.target.value.trim())}
          onKeyDown={(e) => e.key === "Enter" && detectPatterns(input)}
          value={input}
        />{" "}
        <button onClick={() => detectPatterns(input)}>Check</button>
      </p>
      <p>patterns: {" " + patterns}</p>
    </div>
  );
}
