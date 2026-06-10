import { useContext, useState } from "react";
import { HyperContext } from "./context.js";
import { ActionEvent, JsonEvent, HtmlEvent, EsModuleEvent, } from "@w-lfpup/hyperevents";
export function useAction(cb, args) {
    let actionEvent = useContext(HyperContext);
    let [prevEvent, setPrevEvent] = useState(undefined);
    if (actionEvent === prevEvent || !(actionEvent instanceof ActionEvent))
        return;
    if (args && args[0] !== actionEvent.type)
        return;
    setPrevEvent(actionEvent);
    if (actionEvent)
        cb(actionEvent.action);
}
export function useJson(cb, args) {
    let jsonEvent = useContext(HyperContext);
    let [prevEvent, setPrevEvent] = useState(undefined);
    if (jsonEvent === prevEvent || !(jsonEvent instanceof JsonEvent))
        return;
    if (args && args[0] !== jsonEvent.type)
        return;
    setPrevEvent(jsonEvent);
    if (jsonEvent)
        cb(jsonEvent.requestState);
}
export function useEsmodule(cb, args) {
    let esmoduleEvent = useContext(HyperContext);
    let [prevEvent, setPrevEvent] = useState(undefined);
    if (esmoduleEvent === prevEvent || !(esmoduleEvent instanceof EsModuleEvent))
        return;
    if (args && args[0] !== esmoduleEvent.type)
        return;
    setPrevEvent(esmoduleEvent);
    if (esmoduleEvent)
        cb(esmoduleEvent.requestState);
}
// should this be a JSX?
export function useHtml(cb, args) {
    let htmlEvent = useContext(HyperContext);
    let [prevEvent, setPrevEvent] = useState(undefined);
    if (htmlEvent === prevEvent || !(htmlEvent instanceof HtmlEvent))
        return;
    if (args && args[0] !== htmlEvent.type)
        return;
    setPrevEvent(htmlEvent);
    if (htmlEvent)
        cb(htmlEvent.requestState);
}
