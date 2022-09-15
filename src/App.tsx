import { useEffect, useState } from "react";
import MdEditor from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import "./App.css";

function App() {
  const [text, setText] = useState(``);

  const loadText = async () => {
    const _text = await (await fetch("/content.md")).text();
    setText(_text);
  };

  useEffect(() => {
    loadText();
  }, []);

  return (
    <MdEditor
      modelValue={text}
      onChange={setText}
      language="en-US"
      pageFullScreen={true}
      previewTheme="github"
    />
  );
}

export default App;
