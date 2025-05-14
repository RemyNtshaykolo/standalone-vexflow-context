import PetalumaBase64 from "./fonts/Petaluma.js";
import PetalumaScriptBase64 from "./fonts/PetalumaScript.js";
import PetalumaTextBase64 from "./fonts/PetalumaText.js";
import converter from "base64-arraybuffer";
import opentype from "opentype.js";

const decode = converter.decode;

function load(base64Font) {
  return opentype.parse(decode(base64Font));
}

const PetalumaFontPack = {
  Petaluma: {
    regular: load(PetalumaBase64),
    italic: load(PetalumaBase64),
    bold: load(PetalumaBase64),
    bolditalic: load(PetalumaBase64),
  },
  PetalumaScript: {
    regular: load(PetalumaScriptBase64),
    italic: load(PetalumaScriptBase64),
    bold: load(PetalumaScriptBase64),
    bolditalic: load(PetalumaScriptBase64),
  },
  PetalumaText: {
    regular: load(PetalumaTextBase64),
    italic: load(PetalumaTextBase64),
    bold: load(PetalumaTextBase64),
    bolditalic: load(PetalumaTextBase64),
  },

  getFont: function (style = {}) {
    let fontName = "PetalumaScript"; // fallback

    if (/(petaluma|script)/i.test(style["font-family"])) {
      fontName = /(script)/i.test(style["font-family"])
        ? "PetalumaScript"
        : "Petaluma";
    } else if (/text/i.test(style["font-family"])) {
      fontName = "PetalumaText";
    }
    console.log("fontName", this[fontName][fontStyle]);

    let fontStyle = "";
    if (style["font-weight"] === "bold") fontStyle = "bold";
    if (style["font-style"] === "italic") fontStyle += "italic";
    if (fontStyle === "") fontStyle = "regular";

    return this[fontName][fontStyle];
  },
};

export default PetalumaFontPack;
