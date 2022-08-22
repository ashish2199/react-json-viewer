export function JsonElement({ json }) {
  function getValue(key, val) {
    const shouldBeQuoted = typeof val === "string";
    if (typeof val === "object" && val) {
      return (
        <>
          <div>
            <JsonElement json={val} />
          </div>
        </>
      );
    }
    return !shouldBeQuoted ? String(val) : `"${val}"`;
  }

  function getJsonView(json) {
    const isJsonArray = Array.isArray(json);
    let jsonContent = Object.keys(json).map((key) => {
      return (
        <>
          <div className="jsonPair">
            {isJsonArray ? null : (
              <div className="jsonKey">
                <span>"{key}" :</span>
              </div>
            )}
            <div className="jsonValue">{getValue(key, json[key])}</div>
          </div>
        </>
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
      <div>{typeof json === "object" ? getJsonView(json) : json}</div>
    </>
  );
}
