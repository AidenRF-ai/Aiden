import "./ModelSelector.css";

import { useModel } from "../../context/ModelContext";
import { models } from "../../data/models";

export default function ModelSelector() {

  const { model, setModel } = useModel();

  return (
    <select
      className="model-selector"
      value={model}
      onChange={(e) => setModel(e.target.value)}
    >
      {models.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
