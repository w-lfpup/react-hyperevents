import { useContext, useState } from "react";
import { SuperContext } from "./context.js";
import { ActionEvent, JsonEvent, HtmlEvent, EsModuleEvent, } from "@w-lfpup/hyperevents";
export function useAction(cb, args) {
    let actionEvent = useContext(SuperContext);
    let [prevAction, setPrevAction] = useState(undefined);
    if (actionEvent === prevAction)
        return;
    if (!(actionEvent instanceof ActionEvent))
        return;
    if (args && args[0] !== actionEvent.type)
        return;
    setPrevAction(actionEvent);
    if (actionEvent)
        cb(actionEvent.action);
}
export function useJson(cb, args) {
    let actionEvent = useContext(SuperContext);
    let [prevAction, setPrevAction] = useState(undefined);
    if (actionEvent === prevAction)
        return;
    if (!(actionEvent instanceof JsonEvent))
        return;
    if (args && args[0] !== actionEvent.type)
        return;
    setPrevAction(actionEvent);
    if (actionEvent)
        cb(actionEvent.requestState);
}
export function useEsmodule(cb, args) {
    let actionEvent = useContext(SuperContext);
    let [prevAction, setPrevAction] = useState(undefined);
    if (actionEvent === prevAction)
        return;
    if (!(actionEvent instanceof EsModuleEvent))
        return;
    if (args && args[0] !== actionEvent.type)
        return;
    setPrevAction(actionEvent);
    if (actionEvent)
        cb(actionEvent.requestState);
}
// should this be a JSX?
export function useHtml(cb, args) {
    let actionEvent = useContext(SuperContext);
    let [prevAction, setPrevAction] = useState(undefined);
    if (actionEvent === prevAction)
        return;
    if (!(actionEvent instanceof HtmlEvent))
        return;
    if (args && args[0] !== actionEvent.type)
        return;
    setPrevAction(actionEvent);
    if (actionEvent)
        cb(actionEvent.requestState);
}
