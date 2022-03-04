import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import { ChildArea } from "./Components/ChildArea";
import "./styles.css";

export default function App() {
  const [inputText, SetInputText] = useState("");
  const onChangeText = (e) => SetInputText(e.target.value);
  const [open, setOpen] = useState(false);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);
  const temp = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input value={inputText} onChange={onChangeText}></input>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
