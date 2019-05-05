var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var obj = {key}
  var newObj = Object.assign({}, obj)
  delete newObj.obj
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}


























/* var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {[key]: value}
  var newObj = Object.assign({}, object, obj)
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = {[object]: key}
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
} */
















/* var recipes = { } 

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
//returns original object and and the new key-value pair. (Not sure on purpose yet -- Questions?)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value 
  return object
}
//the array object is updated with [...object, key: value] but the array is changed. 

function deleteFromObjectByKey(object, key) {
  var obj = {[object]: key}
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return newObj
}
//deletes key from the array object but does not alter object.  

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
//deletes key from object array while changing object
*/