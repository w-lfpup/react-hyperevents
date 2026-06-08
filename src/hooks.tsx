import { useContext, useState } from "react";
import { SuperContext } from "./context.js";
import { ActionEvent, JsonEvent, HtmlEvent } from "@w-lfpup/hyperevents";

interface Cb {
	(action: ActionEvent["action"]): void;
}

interface CbJson {
	(action: JsonEvent["requestState"]): void;
}

interface CbHtml {
	(action: HtmlEvent["requestState"]): void;
}

export function useAction(cb: Cb): void {
	let event = useContext(SuperContext);
	let [prevAction, setPrevAction] = useState<ActionEvent | undefined>(
		undefined,
	);

	if (event === prevAction) return;
	if (!(event instanceof ActionEvent)) return;

	setPrevAction(event);
	if (event) cb(event.action);
}

export function useJsonEvent(cb: CbJson): void {
	let event = useContext(SuperContext);
	let [prevAction, setPrevAction] = useState<JsonEvent | undefined>(
		undefined,
	);

	if (event === prevAction) return;
	if (!(event instanceof JsonEvent)) return;

	setPrevAction(event);
	if (event) cb(event.requestState);
}

// should this be a JSX?
export function useHtmlEvent(cb: CbHtml): void {
	let event = useContext(SuperContext);
	let [prevAction, setPrevAction] = useState<HtmlEvent | undefined>(
		undefined,
	);

	if (event === prevAction) return;
	if (!(event instanceof HtmlEvent)) return;

	setPrevAction(event);
	if (event) cb(event.requestState);
}
