// bundle.js
import { useState, useEffect } from "react";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

function Page({ page }) {
  const [content, setContent] = useState("");
  // NOTE: loads *after* first page render.
  useEffect(() => {
    fetch(`/api/content/${page}`)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      });
  }, [page]);
  //   return <div>{sanitizeHtml(marked(content))}</div>;
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked(content)) }} />
  );
}

export default Page;
