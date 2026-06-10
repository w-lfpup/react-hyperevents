import React, { useEffect, useState } from "react";
import { HyperEvents } from "@w-lfpup/hyperevents";
import { SuperContext } from "./context.js";
export function SuperActionProvider(props) {
    let { eventNames, children, host = document, target } = props;
    let [value, setValue] = useState(undefined);
    useEffect(function () {
        let superAction = new HyperEvents({
            infix: "-",
            host,
            target,
            eventNames,
        });
        function cb(e) {
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
    }, [eventNames]);
    return (React.createElement(SuperContext.Provider, { value: value }, children));
}
