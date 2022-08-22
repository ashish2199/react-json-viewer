import {JsonPair} from "./JsonPair";

export function JsonElement({ json }) {
  
  function getJsonView(json) {
    const isJsonArray = Array.isArray(json);
    let jsonContent = Object.keys(json).map((key) => {
      return (
        <JsonPair jsonKey={key} key={key} jsonValue={json[key]} />
      );
    });

    return (
      <>
        <div>{isJsonArray ? "[" : "{"} </div>
        <div className="jsonBody"> {jsonContent} </div>
        <div> {isJsonArray ? "]" : "}"} </div>
      </>
    );
  }

  return (
    <>
      <div className="jsonContainer">{typeof json === "object" ? getJsonView(json) : json}</div>
    </>
  );
}