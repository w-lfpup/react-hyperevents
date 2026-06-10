import React, { useEffect, useState } from "react";
import { HyperContext } from "./context.js";
export function HypereventsProvider(props) {
    let { eventNames, children, target } = props;
    let [value, setValue] = useState(undefined);
    useEffect(function () {
        function cb(e) {
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
    }, [eventNames]);
    return (React.createElement(HyperContext.Provider, { value: value }, children));
}
