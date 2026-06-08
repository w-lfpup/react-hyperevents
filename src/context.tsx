import type { ActionEventInterface, HtmlEventInterface, JsonEventInterface, EsModuleEventInterface } from "@w-lfpup/hyperevents";

import React from "react";


type HyperEvent = ActionEventInterface | HtmlEventInterface | JsonEventInterface | EsModuleEventInterface;

export const SuperContext = React.createContext<Event | undefined>(
	undefined,
);