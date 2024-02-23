import * as wasm from "./wasmpack_bg.wasm";
import { __wbg_set_wasm } from "./wasmpack_bg.js";
__wbg_set_wasm(wasm);
export * from "./wasmpack_bg.js";
