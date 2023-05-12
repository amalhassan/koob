import { extendTheme } from "@chakra-ui/react";

import breakpoints from "./breakpoints";
import colors from "./colors";
import fontBase from "./fonts";

const defaults = {
    breakpoints,
    colors,
    ...fontBase,
}
const koobTheme = extendTheme(defaults);
export default koobTheme;