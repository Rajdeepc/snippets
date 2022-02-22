import React, { useState, useEffect } from "react";
import Editor from "../components/Editor/Editor";
import useLocalStorage from "../hooks/useLocalStorage";




export default function EditorContainer() {
  const [html, setHTML] = useLocalStorage("html", '');
  const [js, setJS] = useLocalStorage("js", '');
  const [css, setCSS] = useLocalStorage("css", '');
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html><body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>`);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="html"
          value={html}
          onChange={setHTML}
        />
        <Editor
          language="css"
          displayName="css"
          value={css}
          onChange={setCSS}
        />
        <Editor
          language="javascript"
          displayName="javascript"
          value={js}
          onChange={setJS}
        />
      </div>
      <div className="editor-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}
