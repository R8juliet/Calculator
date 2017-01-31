// var buttonPress = function(e){
//   var value = e.value;
//     document.calc.result.value += value;
// }

$(document).ready(function(){
  $("input[id='numButton']").on('click', function(e){
    var value = this.value;
    document.calc.result.value += value;
  });
});
