import { useContext, useState } from "react";
import { SuperContext } from "./context.js";
import {
  ActionEvent,
  JsonEvent,
  HtmlEvent,
  EsModuleEvent,
} from "@w-lfpup/hyperevents";

interface Cb {
  (action: ActionEvent["action"]): void;
}

interface CbJson {
  (action: JsonEvent["requestState"]): void;
}

interface CbEsModule {
  (action: EsModuleEvent["requestState"]): void;
}

interface CbHtml {
  (action: HtmlEvent["requestState"]): void;
}

export function useAction(cb: Cb, args?: [string]): void {
  let actionEvent = useContext(SuperContext);
  let [prevEvent, setPrevEvent] = useState<ActionEvent | undefined>(undefined);

  if (actionEvent === prevEvent || !(actionEvent instanceof ActionEvent))
    return;
  if (args && args[0] !== actionEvent.type) return;

  setPrevEvent(actionEvent);
  if (actionEvent) cb(actionEvent.action);
}

export function useJson(cb: CbJson, args?: [string]): void {
  let jsonEvent = useContext(SuperContext);
  let [prevEvent, setPrevEvent] = useState<JsonEvent | undefined>(undefined);

  if (jsonEvent === prevEvent || !(jsonEvent instanceof JsonEvent)) return;
  if (args && args[0] !== jsonEvent.type) return;

  setPrevEvent(jsonEvent);
  if (jsonEvent) cb(jsonEvent.requestState);
}

export function useEsmodule(cb: CbEsModule, args?: [string]): void {
  let esmoduleEvent = useContext(SuperContext);
  let [prevEvent, setPrevEvent] = useState<EsModuleEvent | undefined>(
    undefined,
  );

  if (esmoduleEvent === prevEvent || !(esmoduleEvent instanceof EsModuleEvent))
    return;
  if (args && args[0] !== esmoduleEvent.type) return;

  setPrevEvent(esmoduleEvent);
  if (esmoduleEvent) cb(esmoduleEvent.requestState);
}

// should this be a JSX?
export function useHtml(cb: CbHtml, args?: [string]): void {
  let htmlEvent = useContext(SuperContext);
  let [prevEvent, setPrevEvent] = useState<HtmlEvent | undefined>(undefined);

  if (htmlEvent === prevEvent || !(htmlEvent instanceof HtmlEvent)) return;
  if (args && args[0] !== htmlEvent.type) return;

  setPrevEvent(htmlEvent);
  if (htmlEvent) cb(htmlEvent.requestState);
}
