import { useState } from "react";

export default function EditDialog() {
  const [food, setFood] = useState();

  return (
    <div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
}
