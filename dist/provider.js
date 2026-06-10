import React, { useEffect, useState } from "react";
import { HyperContext } from "./context.js";
export function HypereventsProvider(props) {
    let { eventNames, children, host = document, target } = props;
    let [value, setValue] = useState(undefined);
    useEffect(function () {
        function cb(e) {
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
    }, [eventNames]);
    return (React.createElement(HyperContext.Provider, { value: value }, children));
}
