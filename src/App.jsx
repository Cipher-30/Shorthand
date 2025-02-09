import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { Delta } from 'quill';
import "quill/dist/quill.snow.css";

function App() {
  const editorRef = useRef(null); // Ref for the editor div
  const quillRef = useRef(null);

  // getting content from editor in delta format "onclick"
  function getEditorContent () {
    const delta =  quillRef.current.getContents();
    console.log(delta);
  } 


// inserting content in editor
   function insertContent () {
    const words = new Delta( [
      { insert: "Hello " },
      { insert: "world", attributes: { bold: true } }, 
      { insert: "!\nThis is Quill.\n" },
      { insert: "✅ 3. Using ", attributes: { italic: true } },
      { insert: "source", attributes: { bold: true } },
      { insert: " Parameter", attributes: { italic: true } },
      { insert: "\n", attributes: { italic: true } },
      { insert: "You can control whether Quill " },
      { insert: "triggers events", attributes: { underline: true } },
      { insert: " when setting content:\n" },
      { insert: "source", attributes: { bold: true } },
      { insert: " ValueBehavior" },
      { insert: "\n", attributes: { italic: true } },
      { insert: '"api"', attributes: { color: "#ff0000" } },
      { insert: "\n", attributes: { italic: true } },
      { insert: "Default. Updates content & triggers " },
      { insert: "text-change", attributes: { underline: true } },
      { insert: " event." },
      { insert: "\n", attributes: { italic: true } },
      { insert: '"user"', attributes: { color: "#00ff00" } },
      { insert: "\n", attributes: { italic: true } },
      { insert: "Simulates user input, triggering " },
      { insert: "text-change", attributes: { underline: true } },
      { insert: " and " },
      { insert: "selection-change", attributes: { bold: true } },
      { insert: " events." },
      { insert: "\n", attributes: { italic: true } },
      { insert: '"silent"', attributes: { color: "#0000ff" } },
      { insert: "\n", attributes: { italic: true } },
      { insert: "Updates content " },
      { insert: "without triggering any events", attributes: { underline: true } },
      { insert: "." },
      { insert: "\n", attributes: { italic: true } },
      { insert: "\n" }
    ]);
      
    const word = quillRef.current.setContents(words);
    console.log(word);
    

   }


  function getHTMLcontent ()
  {
    const html = quillRef.current.getSemanticHTML();
    console.log(html);
    
  }


  useEffect(() => {
    if (editorRef.current && !quillRef.current)
      {
        quillRef.current = new Quill(editorRef.current,{
        placeholder: "Type the snippet you want to store...",
        theme: "snow",
       });

      
        // adding event listener
        if(quillRef.current)
        {
          quillRef.current.on( "text-change", () => {
            console.log("Text change!");
          });
        }

      }
  }, []);

  return (
    <>
      <h2>Quill Editor in React</h2>
      <div ref={editorRef} style={{ height: "200px" }} />
      <button onClick={getEditorContent}> Editor Content </button>
      <button onClick={insertContent}> Insert Content </button>
      <button onClick={getHTMLcontent}> HTML Content </button>
    </>
  );
}

export default App;









