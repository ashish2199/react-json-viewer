import "./styles.css";
import JSONViewer from "./JSONViewer";

const data = {
  taxi:
    "a car licensed to transport passengers in return for payment of a fare",
  food: {
    sushi:
      "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
    apple: {
      Honeycrisp:
        "an apple cultivar developed at the MAES Horticultural Research Center",
      Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      number: 123,
      boolean: false
    }
  }
};

const obj1 = {
  a: 1,
  b: "abc",
  c: false,
  d: 0,
  e: null,
  f: {
    a: [1],
    b: [1, 2, 3, 4],
    f: {
      a: 1,
      b: 2
    },
    g: {
      a: [1, 2, 3, 4],
      b: undefined,
      c: null,
      d: false,
      e: "String",
      f: true
    }
  },
  data
};

// A JSON value can be an object, array, number, string, true, false, or null.
console.log(JSON.stringify(obj1));
export default function App() {
  return (
    <div className="App">
      <JSONViewer inpJson={obj1} />
    </div>
  );
}
