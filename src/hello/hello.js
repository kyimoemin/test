import * as wasm from "./hello_bg.wasm";
import { __wbg_set_wasm } from "./hello_bg.js";
__wbg_set_wasm(wasm);
export * from "./hello_bg.js";
