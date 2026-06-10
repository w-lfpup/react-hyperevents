import { ActionEvent, JsonEvent, HtmlEvent, EsModuleEvent } from "@w-lfpup/hyperevents";
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
export declare function useAction(cb: Cb, args?: [string]): void;
export declare function useJson(cb: CbJson, args?: [string]): void;
export declare function useEsmodule(cb: CbEsModule, args?: [string]): void;
export declare function useHtml(cb: CbHtml, args?: [string]): void;
export {};
