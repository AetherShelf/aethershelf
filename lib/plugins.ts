import { plugin } from "bun";
import { svgPlugin } from "./svgPlugin";
import { cssPlugin } from "./cssPlugin";

plugin(svgPlugin);
plugin(cssPlugin);
