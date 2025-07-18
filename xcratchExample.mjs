var img$2 = "";
var img$1 = "";
var en$1 = {
	"xcratchExample.entry.name": "Xcratch Example",
	"xcratchExample.entry.description": "Do it in JavaScript"
};
var ja$1 = {
	"xcratchExample.entry.name": "Xcratchの例",
	"xcratchExample.entry.description": "JavaScriptを実行する"
};
var translations$1 = {
	en: en$1,
	ja: ja$1,
	"ja-Hira": {
	"xcratchExample.entry.name": "エクスクラッチのれい",
	"xcratchExample.entry.description": "ジャバスクリプトをじっこうする"
}
};

/**
 * This is an extension for Xcratch.
 */


/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};
var entry = {
  get name() {
    return formatMessage$1({
      id: 'xcratchExample.entry.name',
      defaultMessage: 'Xcratch Example',
      description: 'name of the extension'
    });
  },
  extensionId: 'xcratchExample',
  extensionURL: 'https://xcratch.github.io/xcx-example/dist/xcratchExample.mjs',
  collaborator: 'xcratch',
  iconURL: img$2,
  insetIconURL: img$1,
  get description() {
    return formatMessage$1({
      defaultMessage: 'an extension for Xcratch',
      description: 'Description for this extension',
      id: 'xcratchExample.entry.description'
    });
  },
  tags: ['function', 'calculation', 'text'],
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://xcratch.github.io/xcx-example/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translations$1
};

function _classCallCheck$1(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}

function toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}

function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}

function _defineProperties$1(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey$1(o.key), o);
  }
}
function _createClass$1(e, r, t) {
  return r && _defineProperties$1(e.prototype, r), t && _defineProperties$1(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * Types of block
 * @enum {string}
 */
var blockType;
var hasRequiredBlockType;
function requireBlockType() {
  if (hasRequiredBlockType) return blockType;
  hasRequiredBlockType = 1;
  var BlockType = {
    /**
     * Boolean reporter with hexagonal shape
     */
    BOOLEAN: 'Boolean',
    /**
     * A button (not an actual block) for some special action, like making a variable
     */
    BUTTON: 'button',
    /**
     * Command block
     */
    COMMAND: 'command',
    /**
     * Specialized command block which may or may not run a child branch
     * The thread continues with the next block whether or not a child branch ran.
     */
    CONDITIONAL: 'conditional',
    /**
     * Specialized hat block with no implementation function
     * This stack only runs if the corresponding event is emitted by other code.
     */
    EVENT: 'event',
    /**
     * Hat block which conditionally starts a block stack
     */
    HAT: 'hat',
    /**
     * Specialized command block which may or may not run a child branch
     * If a child branch runs, the thread evaluates the loop block again.
     */
    LOOP: 'loop',
    /**
     * General reporter with numeric or string value
     */
    REPORTER: 'reporter'
  };
  blockType = BlockType;
  return blockType;
}

var blockTypeExports = requireBlockType();
var BlockType = /*@__PURE__*/getDefaultExportFromCjs(blockTypeExports);

/**
 * Block argument types
 * @enum {string}
 */
var argumentType;
var hasRequiredArgumentType;
function requireArgumentType() {
  if (hasRequiredArgumentType) return argumentType;
  hasRequiredArgumentType = 1;
  var ArgumentType = {
    /**
     * Numeric value with angle picker
     */
    ANGLE: 'angle',
    /**
     * Boolean value with hexagonal placeholder
     */
    BOOLEAN: 'Boolean',
    /**
     * Numeric value with color picker
     */
    COLOR: 'color',
    /**
     * Numeric value with text field
     */
    NUMBER: 'number',
    /**
     * String value with text field
     */
    STRING: 'string',
    /**
     * String value with matrix field
     */
    MATRIX: 'matrix',
    /**
     * MIDI note number with note picker (piano) field
     */
    NOTE: 'note',
    /**
     * Inline image on block (as part of the label)
     */
    IMAGE: 'image'
  };
  argumentType = ArgumentType;
  return argumentType;
}

var argumentTypeExports = requireArgumentType();
var ArgumentType = /*@__PURE__*/getDefaultExportFromCjs(argumentTypeExports);

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

var color;
var hasRequiredColor$1;
function requireColor$1() {
  if (hasRequiredColor$1) return color;
  hasRequiredColor$1 = 1;
  var Color = /*#__PURE__*/function () {
    function Color() {
      _classCallCheck(this, Color);
    }
    return _createClass(Color, null, [{
      key: "RGB_BLACK",
      get:
      /**
       * @typedef {object} RGBObject - An object representing a color in RGB format.
       * @property {number} r - the red component, in the range [0, 255].
       * @property {number} g - the green component, in the range [0, 255].
       * @property {number} b - the blue component, in the range [0, 255].
       */

      /**
       * @typedef {object} HSVObject - An object representing a color in HSV format.
       * @property {number} h - hue, in the range [0-359).
       * @property {number} s - saturation, in the range [0,1].
       * @property {number} v - value, in the range [0,1].
       */

      /** @type {RGBObject} */
      function get() {
        return {
          r: 0,
          g: 0,
          b: 0
        };
      }

      /** @type {RGBObject} */
    }, {
      key: "RGB_WHITE",
      get: function get() {
        return {
          r: 255,
          g: 255,
          b: 255
        };
      }

      /**
       * Convert a Scratch decimal color to a hex string, #RRGGBB.
       * @param {number} decimal RGB color as a decimal.
       * @return {string} RGB color as #RRGGBB hex string.
       */
    }, {
      key: "decimalToHex",
      value: function decimalToHex(decimal) {
        if (decimal < 0) {
          decimal += 0xFFFFFF + 1;
        }
        var hex = Number(decimal).toString(16);
        hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
        return hex;
      }

      /**
       * Convert a Scratch decimal color to an RGB color object.
       * @param {number} decimal RGB color as decimal.
       * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       */
    }, {
      key: "decimalToRgb",
      value: function decimalToRgb(decimal) {
        var a = decimal >> 24 & 0xFF;
        var r = decimal >> 16 & 0xFF;
        var g = decimal >> 8 & 0xFF;
        var b = decimal & 0xFF;
        return {
          r: r,
          g: g,
          b: b,
          a: a > 0 ? a : 255
        };
      }

      /**
       * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
       * CC-BY-SA Tim Down:
       * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
       * @param {!string} hex Hex representation of the color.
       * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       */
    }, {
      key: "hexToRgb",
      value: function hexToRgb(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
          return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

      /**
       * Convert an RGB color object to a hex color.
       * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       * @return {!string} Hex representation of the color.
       */
    }, {
      key: "rgbToHex",
      value: function rgbToHex(rgb) {
        return Color.decimalToHex(Color.rgbToDecimal(rgb));
      }

      /**
       * Convert an RGB color object to a Scratch decimal color.
       * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       * @return {!number} Number representing the color.
       */
    }, {
      key: "rgbToDecimal",
      value: function rgbToDecimal(rgb) {
        return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
      }

      /**
      * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
      * @param {!string} hex Hex representation of the color.
      * @return {!number} Number representing the color.
      */
    }, {
      key: "hexToDecimal",
      value: function hexToDecimal(hex) {
        return Color.rgbToDecimal(Color.hexToRgb(hex));
      }

      /**
       * Convert an HSV color to RGB format.
       * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
       * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       */
    }, {
      key: "hsvToRgb",
      value: function hsvToRgb(hsv) {
        var h = hsv.h % 360;
        if (h < 0) h += 360;
        var s = Math.max(0, Math.min(hsv.s, 1));
        var v = Math.max(0, Math.min(hsv.v, 1));
        var i = Math.floor(h / 60);
        var f = h / 60 - i;
        var p = v * (1 - s);
        var q = v * (1 - s * f);
        var t = v * (1 - s * (1 - f));
        var r;
        var g;
        var b;
        switch (i) {
          default:
          case 0:
            r = v;
            g = t;
            b = p;
            break;
          case 1:
            r = q;
            g = v;
            b = p;
            break;
          case 2:
            r = p;
            g = v;
            b = t;
            break;
          case 3:
            r = p;
            g = q;
            b = v;
            break;
          case 4:
            r = t;
            g = p;
            b = v;
            break;
          case 5:
            r = v;
            g = p;
            b = q;
            break;
        }
        return {
          r: Math.floor(r * 255),
          g: Math.floor(g * 255),
          b: Math.floor(b * 255)
        };
      }

      /**
       * Convert an RGB color to HSV format.
       * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
       */
    }, {
      key: "rgbToHsv",
      value: function rgbToHsv(rgb) {
        var r = rgb.r / 255;
        var g = rgb.g / 255;
        var b = rgb.b / 255;
        var x = Math.min(Math.min(r, g), b);
        var v = Math.max(Math.max(r, g), b);

        // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
        var h = 0;
        var s = 0;
        if (x !== v) {
          var f = r === x ? g - b : g === x ? b - r : r - g;
          var i = r === x ? 3 : g === x ? 5 : 1;
          h = (i - f / (v - x)) * 60 % 360;
          s = (v - x) / v;
        }
        return {
          h: h,
          s: s,
          v: v
        };
      }

      /**
       * Linear interpolation between rgb0 and rgb1.
       * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
       * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
       * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
       * @return {RGBObject} the interpolated color.
       */
    }, {
      key: "mixRgb",
      value: function mixRgb(rgb0, rgb1, fraction1) {
        if (fraction1 <= 0) return rgb0;
        if (fraction1 >= 1) return rgb1;
        var fraction0 = 1 - fraction1;
        return {
          r: fraction0 * rgb0.r + fraction1 * rgb1.r,
          g: fraction0 * rgb0.g + fraction1 * rgb1.g,
          b: fraction0 * rgb0.b + fraction1 * rgb1.b
        };
      }
    }]);
  }();
  color = Color;
  return color;
}

var cast;
var hasRequiredCast;
function requireCast() {
  if (hasRequiredCast) return cast;
  hasRequiredCast = 1;
  var Color = requireColor$1();

  /**
   * @fileoverview
   * Utilities for casting and comparing Scratch data-types.
   * Scratch behaves slightly differently from JavaScript in many respects,
   * and these differences should be encapsulated below.
   * For example, in Scratch, add(1, join("hello", world")) -> 1.
   * This is because "hello world" is cast to 0.
   * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
   * Use when coercing a value before computation.
   */
  var Cast = /*#__PURE__*/function () {
    function Cast() {
      _classCallCheck(this, Cast);
    }
    return _createClass(Cast, null, [{
      key: "toNumber",
      value:
      /**
       * Scratch cast to number.
       * Treats NaN as 0.
       * In Scratch 2.0, this is captured by `interp.numArg.`
       * @param {*} value Value to cast to number.
       * @return {number} The Scratch-casted number value.
       */
      function toNumber(value) {
        // If value is already a number we don't need to coerce it with
        // Number().
        if (typeof value === 'number') {
          // Scratch treats NaN as 0, when needed as a number.
          // E.g., 0 + NaN -> 0.
          if (Number.isNaN(value)) {
            return 0;
          }
          return value;
        }
        if (typeof value === 'string') {
          // Replace full-width numbers with half-width ones.
          value = value.replace(/[０-９＋．ｅ]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
          });
          value = value.replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');
        }
        var n = Number(value);
        if (Number.isNaN(n)) {
          // Scratch treats NaN as 0, when needed as a number.
          // E.g., 0 + NaN -> 0.
          return 0;
        }
        return n;
      }

      /**
       * Scratch cast to boolean.
       * In Scratch 2.0, this is captured by `interp.boolArg.`
       * Treats some string values differently from JavaScript.
       * @param {*} value Value to cast to boolean.
       * @return {boolean} The Scratch-casted boolean value.
       */
    }, {
      key: "toBoolean",
      value: function toBoolean(value) {
        // Already a boolean?
        if (typeof value === 'boolean') {
          return value;
        }
        if (typeof value === 'string') {
          // These specific strings are treated as false in Scratch.
          if (value === '' || value === '0' || value.toLowerCase() === 'false') {
            return false;
          }
          // All other strings treated as true.
          return true;
        }
        // Coerce other values and numbers.
        return Boolean(value);
      }

      /**
       * Scratch cast to string.
       * @param {*} value Value to cast to string.
       * @return {string} The Scratch-casted string value.
       */
    }, {
      key: "toString",
      value: function toString(value) {
        return String(value).replace(/\\n/g, '\n').replace(/\\t/g, '\t');
      }

      /**
       * Cast any Scratch argument to an RGB color array to be used for the renderer.
       * @param {*} value Value to convert to RGB color array.
       * @return {Array.<number>} [r,g,b], values between 0-255.
       */
    }, {
      key: "toRgbColorList",
      value: function toRgbColorList(value) {
        var color = Cast.toRgbColorObject(value);
        return [color.r, color.g, color.b];
      }

      /**
       * Cast any Scratch argument to an RGB color object to be used for the renderer.
       * @param {*} value Value to convert to RGB color object.
       * @return {RGBOject} [r,g,b], values between 0-255.
       */
    }, {
      key: "toRgbColorObject",
      value: function toRgbColorObject(value) {
        var color;
        if (typeof value === 'string' && value.substring(0, 1) === '#') {
          color = Color.hexToRgb(value);

          // If the color wasn't *actually* a hex color, cast to black
          if (!color) color = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
          };
        } else {
          color = Color.decimalToRgb(Cast.toNumber(value));
        }
        return color;
      }

      /**
       * Determine if a Scratch argument is a white space string (or null / empty).
       * @param {*} val value to check.
       * @return {boolean} True if the argument is all white spaces or null / empty.
       */
    }, {
      key: "isWhiteSpace",
      value: function isWhiteSpace(val) {
        return val === null || typeof val === 'string' && val.trim().length === 0;
      }

      /**
       * Compare two values, using Scratch cast, case-insensitive string compare, etc.
       * In Scratch 2.0, this is captured by `interp.compare.`
       * @param {*} v1 First value to compare.
       * @param {*} v2 Second value to compare.
       * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
       */
    }, {
      key: "compare",
      value: function compare(v1, v2) {
        var n1 = Number(v1);
        var n2 = Number(v2);
        if (n1 === 0 && Cast.isWhiteSpace(v1)) {
          n1 = NaN;
        } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
          n2 = NaN;
        }
        if (isNaN(n1) || isNaN(n2)) {
          // At least one argument can't be converted to a number.
          // Scratch compares strings as case insensitive.
          var s1 = Cast.toString(v1).toLowerCase();
          var s2 = Cast.toString(v2).toLowerCase();
          if (s1 < s2) {
            return -1;
          } else if (s1 > s2) {
            return 1;
          }
          return 0;
        }
        // Handle the special case of Infinity
        if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
          return 0;
        }
        // Compare as numbers.
        return n1 - n2;
      }

      /**
       * Determine if a Scratch argument number represents a round integer.
       * @param {*} val Value to check.
       * @return {boolean} True if number looks like an integer.
       */
    }, {
      key: "isInt",
      value: function isInt(val) {
        // Values that are already numbers.
        if (typeof val === 'number') {
          if (isNaN(val)) {
            // NaN is considered an integer.
            return true;
          }
          // True if it's "round" (e.g., 2.0 and 2).
          return val === parseInt(val, 10);
        } else if (typeof val === 'boolean') {
          // `True` and `false` always represent integer after Scratch cast.
          return true;
        } else if (typeof val === 'string') {
          // If it contains a decimal point, don't consider it an int.
          return val.indexOf('.') < 0;
        }
        return false;
      }
    }, {
      key: "LIST_INVALID",
      get: function get() {
        return 'INVALID';
      }
    }, {
      key: "LIST_ALL",
      get: function get() {
        return 'ALL';
      }

      /**
       * Compute a 1-based index into a list, based on a Scratch argument.
       * Two special cases may be returned:
       * LIST_ALL: if the block is referring to all of the items in the list.
       * LIST_INVALID: if the index was invalid in any way.
       * @param {*} index Scratch arg, including 1-based numbers or special cases.
       * @param {number} length Length of the list.
       * @param {boolean} acceptAll Whether it should accept "all" or not.
       * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
       */
    }, {
      key: "toListIndex",
      value: function toListIndex(index, length, acceptAll) {
        if (typeof index !== 'number') {
          if (index === 'all') {
            return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
          }
          if (index === 'last') {
            if (length > 0) {
              return length;
            }
            return Cast.LIST_INVALID;
          } else if (index === 'random' || index === 'any') {
            if (length > 0) {
              return 1 + Math.floor(Math.random() * length);
            }
            return Cast.LIST_INVALID;
          }
        }
        index = Math.floor(Cast.toNumber(index));
        if (index < 1 || index > length) {
          return Cast.LIST_INVALID;
        }
        return index;
      }
    }]);
  }();
  cast = Cast;
  return cast;
}

var castExports = requireCast();
var Cast = /*@__PURE__*/getDefaultExportFromCjs(castExports);

var web = {exports: {}};

var minilog$1 = {exports: {}};

var microee;
var hasRequiredMicroee;
function requireMicroee() {
  if (hasRequiredMicroee) return microee;
  hasRequiredMicroee = 1;
  function M() {
    this._events = {};
  }
  M.prototype = {
    on: function on(ev, cb) {
      this._events || (this._events = {});
      var e = this._events;
      (e[ev] || (e[ev] = [])).push(cb);
      return this;
    },
    removeListener: function removeListener(ev, cb) {
      var e = this._events[ev] || [],
        i;
      for (i = e.length - 1; i >= 0 && e[i]; i--) {
        if (e[i] === cb || e[i].cb === cb) {
          e.splice(i, 1);
        }
      }
    },
    removeAllListeners: function removeAllListeners(ev) {
      if (!ev) {
        this._events = {};
      } else {
        this._events[ev] && (this._events[ev] = []);
      }
    },
    listeners: function listeners(ev) {
      return this._events ? this._events[ev] || [] : [];
    },
    emit: function emit(ev) {
      this._events || (this._events = {});
      var args = Array.prototype.slice.call(arguments, 1),
        i,
        e = this._events[ev] || [];
      for (i = e.length - 1; i >= 0 && e[i]; i--) {
        e[i].apply(this, args);
      }
      return this;
    },
    when: function when(ev, cb) {
      return this.once(ev, cb, true);
    },
    once: function once(ev, cb, when) {
      if (!cb) return this;
      function c() {
        if (!when) this.removeListener(ev, c);
        if (cb.apply(this, arguments) && when) this.removeListener(ev, c);
      }
      c.cb = cb;
      this.on(ev, c);
      return this;
    }
  };
  M.mixin = function (dest) {
    var o = M.prototype,
      k;
    for (k in o) {
      o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
    }
  };
  microee = M;
  return microee;
}

var transform;
var hasRequiredTransform;
function requireTransform() {
  if (hasRequiredTransform) return transform;
  hasRequiredTransform = 1;
  var microee = requireMicroee();

  // Implements a subset of Node's stream.Transform - in a cross-platform manner.
  function Transform() {}
  microee.mixin(Transform);

  // The write() signature is different from Node's
  // --> makes it much easier to work with objects in logs.
  // One of the lessons from v1 was that it's better to target
  // a good browser rather than the lowest common denominator
  // internally.
  // If you want to use external streams, pipe() to ./stringify.js first.
  Transform.prototype.write = function (name, level, args) {
    this.emit('item', name, level, args);
  };
  Transform.prototype.end = function () {
    this.emit('end');
    this.removeAllListeners();
  };
  Transform.prototype.pipe = function (dest) {
    var s = this;
    // prevent double piping
    s.emit('unpipe', dest);
    // tell the dest that it's being piped to
    dest.emit('pipe', s);
    function onItem() {
      dest.write.apply(dest, Array.prototype.slice.call(arguments));
    }
    function onEnd() {
      !dest._isStdio && dest.end();
    }
    s.on('item', onItem);
    s.on('end', onEnd);
    s.when('unpipe', function (from) {
      var match = from === dest || typeof from == 'undefined';
      if (match) {
        s.removeListener('item', onItem);
        s.removeListener('end', onEnd);
        dest.emit('unpipe');
      }
      return match;
    });
    return dest;
  };
  Transform.prototype.unpipe = function (from) {
    this.emit('unpipe', from);
    return this;
  };
  Transform.prototype.format = function (dest) {
    throw new Error(['Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:', 'var Minilog = require(\'minilog\');', 'Minilog', '  .pipe(Minilog.backends.console.formatClean)', '  .pipe(Minilog.backends.console);'].join('\n'));
  };
  Transform.mixin = function (dest) {
    var o = Transform.prototype,
      k;
    for (k in o) {
      o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
    }
  };
  transform = Transform;
  return transform;
}

var filter;
var hasRequiredFilter;
function requireFilter() {
  if (hasRequiredFilter) return filter;
  hasRequiredFilter = 1;
  // default filter
  var Transform = requireTransform();
  var levelMap = {
    debug: 1,
    info: 2,
    warn: 3,
    error: 4
  };
  function Filter() {
    this.enabled = true;
    this.defaultResult = true;
    this.clear();
  }
  Transform.mixin(Filter);

  // allow all matching, with level >= given level
  Filter.prototype.allow = function (name, level) {
    this._white.push({
      n: name,
      l: levelMap[level]
    });
    return this;
  };

  // deny all matching, with level <= given level
  Filter.prototype.deny = function (name, level) {
    this._black.push({
      n: name,
      l: levelMap[level]
    });
    return this;
  };
  Filter.prototype.clear = function () {
    this._white = [];
    this._black = [];
    return this;
  };
  function test(rule, name) {
    // use .test for RegExps
    return rule.n.test ? rule.n.test(name) : rule.n == name;
  }
  Filter.prototype.test = function (name, level) {
    var i,
      len = Math.max(this._white.length, this._black.length);
    for (i = 0; i < len; i++) {
      if (this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
        return true;
      }
      if (this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
        return false;
      }
    }
    return this.defaultResult;
  };
  Filter.prototype.write = function (name, level, args) {
    if (!this.enabled || this.test(name, level)) {
      return this.emit('item', name, level, args);
    }
  };
  filter = Filter;
  return filter;
}

var hasRequiredMinilog$1;
function requireMinilog$1() {
  if (hasRequiredMinilog$1) return minilog$1.exports;
  hasRequiredMinilog$1 = 1;
  (function (module, exports) {
    var Transform = requireTransform(),
      Filter = requireFilter();
    var log = new Transform(),
      slice = Array.prototype.slice;
    exports = module.exports = function create(name) {
      var _o = function o() {
        log.write(name, undefined, slice.call(arguments));
        return _o;
      };
      _o.debug = function () {
        log.write(name, 'debug', slice.call(arguments));
        return _o;
      };
      _o.info = function () {
        log.write(name, 'info', slice.call(arguments));
        return _o;
      };
      _o.warn = function () {
        log.write(name, 'warn', slice.call(arguments));
        return _o;
      };
      _o.error = function () {
        log.write(name, 'error', slice.call(arguments));
        return _o;
      };
      _o.log = _o.debug; // for interface compliance with Node and browser consoles
      _o.suggest = exports.suggest;
      _o.format = log.format;
      return _o;
    };

    // filled in separately
    exports.defaultBackend = exports.defaultFormatter = null;
    exports.pipe = function (dest) {
      return log.pipe(dest);
    };
    exports.end = exports.unpipe = exports.disable = function (from) {
      return log.unpipe(from);
    };
    exports.Transform = Transform;
    exports.Filter = Filter;
    // this is the default filter that's applied when .enable() is called normally
    // you can bypass it completely and set up your own pipes
    exports.suggest = new Filter();
    exports.enable = function () {
      if (exports.defaultFormatter) {
        return log.pipe(exports.suggest) // filter
        .pipe(exports.defaultFormatter) // formatter
        .pipe(exports.defaultBackend); // backend
      }
      return log.pipe(exports.suggest) // filter
      .pipe(exports.defaultBackend); // formatter
    };
  })(minilog$1, minilog$1.exports);
  return minilog$1.exports;
}

var util;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  var hex = {
    black: '#000',
    red: '#c23621',
    green: '#25bc26',
    yellow: '#bbbb00',
    blue: '#492ee1',
    magenta: '#d338d3',
    cyan: '#33bbc8',
    gray: '#808080',
    purple: '#708'
  };
  function color(fg, isInverse) {
    if (isInverse) {
      return 'color: #fff; background: ' + hex[fg] + ';';
    } else {
      return 'color: ' + hex[fg] + ';';
    }
  }
  util = color;
  return util;
}

var color_1;
var hasRequiredColor;
function requireColor() {
  if (hasRequiredColor) return color_1;
  hasRequiredColor = 1;
  var Transform = requireTransform(),
    color = requireUtil();
  var colors = {
      debug: ['cyan'],
      info: ['purple'],
      warn: ['yellow', true],
      error: ['red', true]
    },
    logger = new Transform();
  logger.write = function (name, level, args) {
    var fn = console.log;
    if (console[level] && console[level].apply) {
      fn = console[level];
      fn.apply(console, ['%c' + name + ' %c' + level, color('gray'), color.apply(color, colors[level])].concat(args));
    }
  };

  // NOP, because piping the formatted logs can only cause trouble.
  logger.pipe = function () {};
  color_1 = logger;
  return color_1;
}

var minilog;
var hasRequiredMinilog;
function requireMinilog() {
  if (hasRequiredMinilog) return minilog;
  hasRequiredMinilog = 1;
  var Transform = requireTransform(),
    color = requireUtil(),
    colors = {
      debug: ['gray'],
      info: ['purple'],
      warn: ['yellow', true],
      error: ['red', true]
    },
    logger = new Transform();
  logger.write = function (name, level, args) {
    var fn = console.log;
    if (level != 'debug' && console[level]) {
      fn = console[level];
    }
    var i = 0;
    if (level != 'info') {
      for (; i < args.length; i++) {
        if (typeof args[i] != 'string') break;
      }
      fn.apply(console, ['%c' + name + ' ' + args.slice(0, i).join(' '), color.apply(color, colors[level])].concat(args.slice(i)));
    } else {
      fn.apply(console, ['%c' + name, color.apply(color, colors[level])].concat(args));
    }
  };

  // NOP, because piping the formatted logs can only cause trouble.
  logger.pipe = function () {};
  minilog = logger;
  return minilog;
}

var console_1;
var hasRequiredConsole;
function requireConsole() {
  if (hasRequiredConsole) return console_1;
  hasRequiredConsole = 1;
  var Transform = requireTransform();
  var newlines = /\n+$/,
    logger = new Transform();
  logger.write = function (name, level, args) {
    var i = args.length - 1;
    if (typeof console === 'undefined' || !console.log) {
      return;
    }
    if (console.log.apply) {
      return console.log.apply(console, [name, level].concat(args));
    } else if (JSON && JSON.stringify) {
      // console.log.apply is undefined in IE8 and IE9
      // for IE8/9: make console.log at least a bit less awful
      if (args[i] && typeof args[i] == 'string') {
        args[i] = args[i].replace(newlines, '');
      }
      try {
        for (i = 0; i < args.length; i++) {
          args[i] = JSON.stringify(args[i]);
        }
      } catch (e) {}
      console.log(args.join(' '));
    }
  };
  logger.formatters = ['color', 'minilog'];
  logger.color = requireColor();
  logger.minilog = requireMinilog();
  console_1 = logger;
  return console_1;
}

var array;
var hasRequiredArray;
function requireArray() {
  if (hasRequiredArray) return array;
  hasRequiredArray = 1;
  var Transform = requireTransform(),
    cache = [];
  var logger = new Transform();
  logger.write = function (name, level, args) {
    cache.push([name, level, args]);
  };

  // utility functions
  logger.get = function () {
    return cache;
  };
  logger.empty = function () {
    cache = [];
  };
  array = logger;
  return array;
}

var localstorage;
var hasRequiredLocalstorage;
function requireLocalstorage() {
  if (hasRequiredLocalstorage) return localstorage;
  hasRequiredLocalstorage = 1;
  var Transform = requireTransform(),
    cache = false;
  var logger = new Transform();
  logger.write = function (name, level, args) {
    if (typeof window == 'undefined' || typeof JSON == 'undefined' || !JSON.stringify || !JSON.parse) return;
    try {
      if (!cache) {
        cache = window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : [];
      }
      cache.push([new Date().toString(), name, level, args]);
      window.localStorage.minilog = JSON.stringify(cache);
    } catch (e) {}
  };
  localstorage = logger;
  return localstorage;
}

var jquery_simple;
var hasRequiredJquery_simple;
function requireJquery_simple() {
  if (hasRequiredJquery_simple) return jquery_simple;
  hasRequiredJquery_simple = 1;
  var Transform = requireTransform();
  var cid = new Date().valueOf().toString(36);
  function AjaxLogger(options) {
    this.url = options.url || '';
    this.cache = [];
    this.timer = null;
    this.interval = options.interval || 30 * 1000;
    this.enabled = true;
    this.jQuery = window.jQuery;
    this.extras = {};
  }
  Transform.mixin(AjaxLogger);
  AjaxLogger.prototype.write = function (name, level, args) {
    if (!this.timer) {
      this.init();
    }
    this.cache.push([name, level].concat(args));
  };
  AjaxLogger.prototype.init = function () {
    if (!this.enabled || !this.jQuery) return;
    var self = this;
    this.timer = setTimeout(function () {
      var i,
        logs = [],
        ajaxData,
        url = self.url;
      if (self.cache.length == 0) return self.init();
      // Test each log line and only log the ones that are valid (e.g. don't have circular references).
      // Slight performance hit but benefit is we log all valid lines.
      for (i = 0; i < self.cache.length; i++) {
        try {
          JSON.stringify(self.cache[i]);
          logs.push(self.cache[i]);
        } catch (e) {}
      }
      if (self.jQuery.isEmptyObject(self.extras)) {
        ajaxData = JSON.stringify({
          logs: logs
        });
        url = self.url + '?client_id=' + cid;
      } else {
        ajaxData = JSON.stringify(self.jQuery.extend({
          logs: logs
        }, self.extras));
      }
      self.jQuery.ajax(url, {
        type: 'POST',
        cache: false,
        processData: false,
        data: ajaxData,
        contentType: 'application/json',
        timeout: 10000
      }).success(function (data, status, jqxhr) {
        if (data.interval) {
          self.interval = Math.max(1000, data.interval);
        }
      }).error(function () {
        self.interval = 30000;
      }).always(function () {
        self.init();
      });
      self.cache = [];
    }, this.interval);
  };
  AjaxLogger.prototype.end = function () {};

  // wait until jQuery is defined. Useful if you don't control the load order.
  AjaxLogger.jQueryWait = function (onDone) {
    if (typeof window !== 'undefined' && (window.jQuery || window.$)) {
      return onDone(window.jQuery || window.$);
    } else if (typeof window !== 'undefined') {
      setTimeout(function () {
        AjaxLogger.jQueryWait(onDone);
      }, 200);
    }
  };
  jquery_simple = AjaxLogger;
  return jquery_simple;
}

var hasRequiredWeb;
function requireWeb() {
  if (hasRequiredWeb) return web.exports;
  hasRequiredWeb = 1;
  (function (module, exports) {
    var Minilog = requireMinilog$1();
    var oldEnable = Minilog.enable,
      oldDisable = Minilog.disable,
      isChrome = typeof navigator != 'undefined' && /chrome/i.test(navigator.userAgent),
      console = requireConsole();

    // Use a more capable logging backend if on Chrome
    Minilog.defaultBackend = isChrome ? console.minilog : console;

    // apply enable inputs from localStorage and from the URL
    if (typeof window != 'undefined') {
      try {
        Minilog.enable(JSON.parse(window.localStorage['minilogSettings']));
      } catch (e) {}
      if (window.location && window.location.search) {
        var match = RegExp('[?&]minilog=([^&]*)').exec(window.location.search);
        match && Minilog.enable(decodeURIComponent(match[1]));
      }
    }

    // Make enable also add to localStorage
    Minilog.enable = function () {
      oldEnable.call(Minilog, true);
      try {
        window.localStorage['minilogSettings'] = JSON.stringify(true);
      } catch (e) {}
      return this;
    };
    Minilog.disable = function () {
      oldDisable.call(Minilog);
      try {
        delete window.localStorage.minilogSettings;
      } catch (e) {}
      return this;
    };
    exports = module.exports = Minilog;
    exports.backends = {
      array: requireArray(),
      browser: Minilog.defaultBackend,
      localStorage: requireLocalstorage(),
      jQuery: requireJquery_simple()
    };
  })(web, web.exports);
  return web.exports;
}

var log$1;
var hasRequiredLog;
function requireLog() {
  if (hasRequiredLog) return log$1;
  hasRequiredLog = 1;
  var minilog = requireWeb();
  minilog.enable();
  log$1 = minilog('vm');
  return log$1;
}

var logExports = requireLog();
var log = /*@__PURE__*/getDefaultExportFromCjs(logExports);

var en = {
	"xcratchExample.name": "Xcratch Example",
	"xcratchExample.doIt": "do it [SCRIPT]"
};
var ja = {
	"xcratchExample.name": "Xcratchの例",
	"xcratchExample.doIt": "[SCRIPT] を実行する"
};
var translations = {
	en: en,
	ja: ja,
	"ja-Hira": {
	"xcratchExample.name": "エクスクラッチのれい",
	"xcratchExample.doIt": "[SCRIPT] をじっこうする"
}
};

var img = "";

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */
var formatMessage = function formatMessage(messageData) {
  return messageData.default;
};

/**
 * Setup format-message for this extension.
 */
var setupTranslations = function setupTranslations() {
  var localeSetup = formatMessage.setup();
  if (localeSetup && localeSetup.translations[localeSetup.locale]) {
    Object.assign(localeSetup.translations[localeSetup.locale], translations[localeSetup.locale]);
  }
};
var EXTENSION_ID = 'xcratchExample';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
var extensionURL = 'https://yokobond.github.io/xcx-xcratchExample/dist/xcratchExample.mjs';

/**
 * Scratch 3.0 blocks for example of Xcratch.
 */
var ExtensionBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for xcratchExample.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function ExtensionBlocks(runtime) {
    _classCallCheck$1(this, ExtensionBlocks);
    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;
    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }
  }

  /**
   * @returns {object} metadata for this extension and its blocks.
   */
  return _createClass$1(ExtensionBlocks, [{
    key: "getInfo",
    value: function getInfo() {
      setupTranslations();
      return {
        id: ExtensionBlocks.EXTENSION_ID,
        name: ExtensionBlocks.EXTENSION_NAME,
        extensionURL: ExtensionBlocks.extensionURL,
        blockIconURI: img,
        showStatusButton: false,
        blocks: [{
          opcode: 'do-it',
          blockType: BlockType.REPORTER,
          blockAllThreads: false,
          text: formatMessage({
            id: 'xcratchExample.doIt',
            default: 'do it [SCRIPT]',
            description: 'execute javascript for example'
          }),
          func: 'doIt',
          arguments: {
            SCRIPT: {
              type: ArgumentType.STRING,
              defaultValue: '3 + 4'
            }
          }
        }],
        menus: {}
      };
    }
  }, {
    key: "doIt",
    value: function doIt(args) {
      var statement = Cast.toString(args.SCRIPT);
      var func = new Function("return (".concat(statement, ")"));
      log.log("doIt: ".concat(statement));
      return func.call(this);
    }
  }], [{
    key: "formatMessage",
    set:
    /**
     * A translation object which is used in this class.
     * @param {FormatObject} formatter - translation object
     */
    function set(formatter) {
      formatMessage = formatter;
      if (formatMessage) setupTranslations();
    }

    /**
     * @return {string} - the name of this extension.
     */
  }, {
    key: "EXTENSION_NAME",
    get: function get() {
      return formatMessage({
        id: 'xcratchExample.name',
        default: 'xcratchExample',
        description: 'name of the extension'
      });
    }

    /**
     * @return {string} - the ID of this extension.
     */
  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return EXTENSION_ID;
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
  }, {
    key: "extensionURL",
    get: function get() {
      return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */,
    set: function set(url) {
      extensionURL = url;
    }
  }]);
}();

export { ExtensionBlocks as blockClass, entry };
//# sourceMappingURL=xcratchExample.mjs.map
