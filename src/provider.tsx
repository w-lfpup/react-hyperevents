import React, { ReactNode, useEffect, useState } from "react";
import { HyperEvents } from "@w-lfpup/hyperevents";

import { SuperContext } from "./context.js";

interface ProviderProps {
  eventNames: string[];
  children: ReactNode;
  host?: EventTarget;
  target?: EventTarget;
}

export function SuperActionProvider(props: ProviderProps) {
  let { eventNames, children, host = document, target } = props;
  let [value, setValue] = useState<Event | undefined>(undefined);

  useEffect(
    function () {
      let superAction = new HyperEvents({
        infix: "-",
        host,
        target,
        eventNames,
      });

      function cb(e: Event) {
        setValue(e);
      }

      superAction.connect();
      host.addEventListener("#action", cb);
      host.addEventListener("#esmodule", cb);
      host.addEventListener("#html", cb);
      host.addEventListener("#json", cb);

      return function () {
        superAction.disconnect();
        host.removeEventListener("#action", cb);
        host.removeEventListener("#esmodule", cb);
        host.removeEventListener("#html", cb);
        host.removeEventListener("#json", cb);
      };
    },
    [eventNames],
  );

  return (
    <SuperContext.Provider value={value}>{children}</SuperContext.Provider>
  );
}
