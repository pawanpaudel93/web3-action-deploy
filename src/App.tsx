import { useState } from "react";
import MdEditor from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import "./App.css";

function App() {
  const [text, setText] = useState(`## web3-action-deploy

  An example of react app deployment using github action.`);

  return (
    <MdEditor
      modelValue={text}
      onChange={setText}
      language="en-US"
      pageFullScreen={true}
    />
  );
}

export default App;
