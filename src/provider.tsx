import React, { ReactNode, useEffect, useState } from "react";
import { HyperContext } from "./context.js";

interface ProviderProps {
  eventNames: string[];
  children: ReactNode;
  host?: EventTarget;
  target?: EventTarget;
}

export function HypereventsProvider(props: ProviderProps) {
  let { eventNames, children, host = document, target } = props;
  let [value, setValue] = useState<Event | undefined>(undefined);

  useEffect(
    function () {
      function cb(e: Event) {
        setValue(e);
      }

      host.addEventListener("#action", cb);
      host.addEventListener("#esmodule", cb);
      host.addEventListener("#html", cb);
      host.addEventListener("#json", cb);

      return function () {
        host.removeEventListener("#action", cb);
        host.removeEventListener("#esmodule", cb);
        host.removeEventListener("#html", cb);
        host.removeEventListener("#json", cb);
      };
    },
    [eventNames],
  );

  return (
    <HyperContext.Provider value={value}>{children}</HyperContext.Provider>
  );
}
