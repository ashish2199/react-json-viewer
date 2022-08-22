import { JsonElement } from "./JsonElement";

export default function JSONViewer({ inpJson }) {
  return (
    <>
      <div className="jsonContainer">
        <button> Expand All </button>
        <button> Collpase All </button>
        <JsonElement json={inpJson} />
      </div>
    </>
  );
}
