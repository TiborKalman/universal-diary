import { useEffect, useRef } from "react";

export function useClickForModal(handler, listenCapt = true) {
  const referen = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (referen.current && !referen.current.contains(e.target)) {
          //console.log("clicked outside modal");
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapt);
      return () =>
        document.removeEventListener("click", handleClick, listenCapt);
    },
    [handler, listenCapt]
  );

  return referen;
}
