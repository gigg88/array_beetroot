"use strict";

//Part 3: CSS Styling Fun (Optional Challenge)
//   Create the Array:
//       Name it cssStyles.
//       Each item is an object with:
//            styleName (e.g., "color", "fontSize")
//           styleValue (e.g., "blue", "16px")
var cssStyles = [{
  styleName: "color",
  styleValue: "blue"
}, {
  styleName: "fontSize",
  styleValue: "40px"
}, {
  styleName: "fontWeight",
  styleValue: 900
}]; //   Function:
//       applyStyles(text, stylesArray):
//           Takes a string of text and the cssStyles array.
//            Creates a <p> element with the text and the styles applied.
//           Uses document.write() to add it to the page.

function applyStyles(text, stylesArray) {
  var pElement = document.createElement("p");
  pElement.textContent = text;
  stylesArray.forEach(function (style) {
    pElement.style[style.styleName] = style.styleValue;
  });
  document.body.appendChild(pElement);
}

applyStyles("Hello, world!", cssStyles);