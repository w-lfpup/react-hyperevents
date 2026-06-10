import React, { ReactNode, useEffect, useState } from "react";
import { HyperContext } from "./context.js";

interface ProviderProps {
  eventNames: string[];
  children: ReactNode;
  target: EventTarget;
}

export function HypereventsProvider(props: ProviderProps) {
  let { eventNames, children, target } = props;
  let [value, setValue] = useState<Event | undefined>(undefined);

  useEffect(
    function () {
      function cb(e: Event) {
        setValue(e);
      }

      target.addEventListener("#action", cb);
      target.addEventListener("#esmodule", cb);
      target.addEventListener("#html", cb);
      target.addEventListener("#json", cb);

      return function () {
        target.removeEventListener("#action", cb);
        target.removeEventListener("#esmodule", cb);
        target.removeEventListener("#html", cb);
        target.removeEventListener("#json", cb);
      };
    },
    [eventNames],
  );

  return (
    <HyperContext.Provider value={value}>{children}</HyperContext.Provider>
  );
}
