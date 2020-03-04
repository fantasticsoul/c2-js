import state from "./state";
import * as reducer from "./reducer";
import * as computed from "./computed";
import { configure } from "concent";


console.log("configure SetupDemo module");
configure("SetupDemo", { state, reducer, computed });

