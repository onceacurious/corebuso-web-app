import { useEffect, useRef } from "react";

function DocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
}

export default DocumentTitle;
