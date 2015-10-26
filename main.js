// ** globals ** //

var scope = {};
var classNamesArray = ['name', 'lastname'];

// ** functions ** //
function getElements() {
  var outputArray = [];

  for (var i = 0; i < classNamesArray.length; i ++) {
      outputArray.push(document.getElementsByClassName(classNamesArray[i]));
    }
    return outputArray;
}


function domBinding(elements) {
  for (var index in elements) {
    elements[index].onkeyup = function () {
      for (var index in elements) {
        elements[index].value = this.value;
      }
    };
  }
}

function modelBinding(elements) {
  for (var i = 0; i < classNamesArray.length; i++) {
    Object.defineProperty(scope, classNamesArray[i], {
      set: function (newValue) {
        for (var index in elements) {
          elements[index].value = newValue;
        }
      }
    });
  }

}



// function calls
var domElements = getElements();
domBinding(domElements[0]);
modelBinding(domElements[0]);

domBinding(domElements[1]);





// function domBinding (elements) {
//   var outputArray = []
//   for (var i = 0; i < elements.length; i++) {
//     outputArray.push(elements[i].addEventListener('keyup', binding));
//   }
//   return outputArray;
// }

// function binding (array) {
//   for (var i = 0; i < array.length; i ++ ) {
//     array.
//   }
// }


// function modelBinding(elements) {
//   for (var i = 0; i < elements.length; i++) {
//     Object.defineProperty(scope, 'name', {
//       set: function (newValue) {elements[i].value = newValue}
//     });
//   }

// }
