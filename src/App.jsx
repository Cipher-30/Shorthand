import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function App() {
  const editorRef = useRef(null); // Ref for the editor div
  const quillRef = useRef(null);


  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        placeholder: "Hello, World!",
        theme: "snow",
      });
    }
  }, []);

  return (
    <>
      <h2>Quill Editor in React</h2>
      <div ref={editorRef} style={{ height: "200px" }} />
    </>
  );
}

export default App;









