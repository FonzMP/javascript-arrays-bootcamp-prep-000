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

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  item = array[index];
  return item;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {

}

function removeElementFromBeginningOfArray() {

}

function destructivelyRemoveElementFromEndOfArray() {

}

function removeElementFromEndOfArray() {

}
