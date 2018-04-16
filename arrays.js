var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(arr, e) {
  arr.unshift(e);
  return arr;
}

function addElementToEndOfArray(array, element) {
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray() {

}

function accessElementInArray() {

}

function destructivelyRemoveElementFromBeginningOfArray() {

}

function removeElementFromBeginningOfArray() {

}

function destructivelyRemoveElementFromEndOfArray() {

}

function removeElementFromEndOfArray() {

}
