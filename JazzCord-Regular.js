import JazzCordBase64 from "./fonts/JazzCord-Regular.js";
import converter from "base64-arraybuffer";
import opentype from "opentype.js";

const decode = converter.decode;

function load(base64Font) {
  return opentype.parse(decode(base64Font));
}

const JazzCordFontPack = {
  JazzCord: {
    regular: load(JazzCordBase64),
  },

  getFont: function (style = {}) {
    return load(JazzCordBase64);
  },
};

export default JazzCordFontPack;
