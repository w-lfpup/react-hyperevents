import React, { ReactNode } from "react";
interface ProviderProps {
    eventNames: string[];
    children: ReactNode;
    host?: EventTarget;
    target?: EventTarget;
}
export declare function SuperActionProvider(props: ProviderProps): React.JSX.Element;
export {};
