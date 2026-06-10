import React, { ReactNode } from "react";
interface ProviderProps {
    eventNames: string[];
    children: ReactNode;
    host?: EventTarget;
    target?: EventTarget;
}
export declare function HypereventsProvider(props: ProviderProps): React.JSX.Element;
export {};
