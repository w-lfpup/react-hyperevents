import { ReactNode, useContext, useState } from "react";
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
  let [prevAction, setPrevAction] = useState<ActionEvent | undefined>(
    undefined,
  );

  if (actionEvent === prevAction) return;
  if (!(actionEvent instanceof ActionEvent)) return;
  if (args && args[0] !== actionEvent.type) return;

  setPrevAction(actionEvent);
  if (actionEvent) cb(actionEvent.action);
}

export function useJson(cb: CbJson, args?: [string]): void {
  let actionEvent = useContext(SuperContext);
  let [prevAction, setPrevAction] = useState<JsonEvent | undefined>(undefined);

  if (actionEvent === prevAction) return;
  if (!(actionEvent instanceof JsonEvent)) return;
  if (args && args[0] !== actionEvent.type) return;

  setPrevAction(actionEvent);
  if (actionEvent) cb(actionEvent.requestState);
}

export function useEsmodule(cb: CbEsModule, args?: [string]): void {
  let actionEvent = useContext(SuperContext);
  let [prevAction, setPrevAction] = useState<EsModuleEvent | undefined>(
    undefined,
  );

  if (actionEvent === prevAction) return;
  if (!(actionEvent instanceof EsModuleEvent)) return;
  if (args && args[0] !== actionEvent.type) return;

  setPrevAction(actionEvent);
  if (actionEvent) cb(actionEvent.requestState);
}

// should this be a JSX?
export function useHtml(cb: CbHtml, args?: [string]): void {
  let actionEvent = useContext(SuperContext);
  let [prevAction, setPrevAction] = useState<HtmlEvent | undefined>(undefined);

  if (actionEvent === prevAction) return;
  if (!(actionEvent instanceof HtmlEvent)) return;
  if (args && args[0] !== actionEvent.type) return;

  setPrevAction(actionEvent);
  if (actionEvent) cb(actionEvent.requestState);
}
