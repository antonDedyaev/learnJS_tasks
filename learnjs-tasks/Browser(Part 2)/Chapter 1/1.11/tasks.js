// Task 1:
const coordinates = field.getBoundingClientRect();

const topLeftOuter = [coordinates.top, coordinates.left];
const bottomRightOuter = [coordinates.bottom, coordinates.right];
const topLeftInner = [coordinates.top + field.clientTop, coordinates.left + field.clientLeft];
const bottomRightInner = [coordinates.top + field.clientTop + field.clientHeight, coordinates.right + field.clientLeft + field.clientWidth];

const corners = [topLeftOuter, bottomRightOuter, topLeftInner, bottomRightInner];

alert(corners.join(' '));

// Task 2:
function positionAt(anchor, position, elem) {
    const coords = anchor.getBoundingClientRect();

    switch (position) {
    case "top":
        elem.style.left = coords.left + "px";
        elem.style.top = coords.top - elem.offsetHeight + "px";
        break;

    case "right":
        elem.style.left = coords.left + anchor.offsetWidth + "px";
        elem.style.top = coords.top + "px";
        break;

    case "bottom":
        elem.style.left = coords.left + "px";
        elem.style.top = coords.top + anchor.offsetHeight + "px";
        break;

    default:
        break;
    }
};

// Task 3:
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };

};

function positionAt(anchor, position, elem) {

    const coords = getCoords(anchor);

    switch (position) {
    case "top":
        elem.style.left = coords.left + "px";
        elem.style.top = coords.top - elem.offsetHeight + "px";
        break;

    case "right":
        elem.style.left = coords.left + anchor.offsetWidth + "px";
        elem.style.top = coords.top + "px";
        break;

    case "bottom":
        elem.style.left = coords.left + "px";
        elem.style.top = coords.top + anchor.offsetHeight + "px";
        break;
    }

};

// в файле стилей меняем position fixed на absolute:
/* .note{
  position: absolute;
} */

// Task 4:
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };

};

function positionAt(anchor, position, elem) {

    const coords = getCoords(anchor);

    switch (position) {
        case "top-out":
          elem.style.left = coords.left + "px";
          elem.style.top = coords.top - elem.offsetHeight + "px";
          break;

        case "right-out":
          elem.style.left = coords.left + anchor.offsetWidth + "px";
          elem.style.top = coords.top + "px";
          break;

        case "bottom-out":
          elem.style.left = coords.left + "px";
          elem.style.top = coords.top + anchor.offsetHeight + "px";
          break;

        case "top-in":
          elem.style.left = coords.left + "px";
          elem.style.top = coords.top + "px";
          break;

        case "right-in":
          elem.style.width = '150px';
          elem.style.left = coords.left + anchor.offsetWidth - elem.offsetWidth + "px";
          elem.style.top = coords.top + "px";
          break;

        case "bottom-in":
          elem.style.left = coords.left + "px";
          elem.style.top = coords.top + anchor.offsetHeight - elem.offsetHeight + "px";
          break;
        
        default:
          break;
    }

};


