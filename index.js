var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9],
];

//dropdown menu
var select=document.getElementById("selectPlanet");
for (var i = 0; i < planets.length; i++) {
  var plan=planets[i][0];
  var el=document.createElement("option");
  //accessing in the planets array
  el.innerText=planets[i][0];
  //accessing weight in the planets array
  el.value=planets[i][1];
  el.textContent=plan;
  select.appendChild(el);
}

//calculation button and function
document.getElementById('calculateWeight').onclick=function handleClickEvent(ev) {
  var userWeight=document.getElementById('userWeight').value;
  var choice=document.getElementById('selectPlanet').selectedIndex;
  var gravity=document.getElementById('selectPlanet')[choice].value;
  var planetName=document.getElementById('selectPlanet')[choice].text;
  var weight=(userWeight*gravity);
  var roundWeight=Math.round(weight)
  event.preventDefault()

  document.getElementById('output').innerHTML=('On' + ' ' + planetName + ' you would weigh ' + roundWeight + 'lbs!');
}










// //Reverse then loop over array to create option elements, and append option elements to select
// $($(planets).get().reverse()).each(function(value) {
// 	$('<option>').val(this[1]).text(this[0]).appendTo('#planetList');
//
// });
//
// //Sort the array based on gravity value
// var sortedArray = $(planets).sort(function(a, b) {
// 	return a[1]-b[1];
// });
//
// //Add sorted array table values into html table
// $.each(sortedArray, function(index, value) {
// $('#tableBody').append(`<tr><td> ${value[0]} </td><td> ${value[1]}`);
//
// });
//
// // Alternate method to loop over array
// // for(var i = (planets.length - 1); i >= 0 ; i--) {
// // var newOption = document.createElement('option');
// // newOption.innerText = planets[i][0];
// // newOption.value = planets[i][1];
// // //Append new options to select element
// // $('#planetList').append(newOption);
// // };
//
// //Create function that is called when button is clicked
// $('#calculateBtn').click(function() {
//
// //Remove any previously appended elements
// $('.spaceWeight').detach();
//
// //Grab user input weight
// var userWeight = $('#weightInput').val();
//
// //Grab planet gravity value from option element
// var planetGravity = $('#planetList').prop('value');
//
// //Grab name of selected planet
// var planetName = $('#planetList option:selected').text();
//
// //Create Space Weight
// var spaceWeight = userWeight * planetGravity;
//
// //Create new element and append to div
// newElement = $('<h3 class="">').text("Your weight on " + planetName + " is " + spaceWeight + " lbs.").addClass('spaceWeight');
// $('#mainDiv').append(newElement);
//
// //Clear the input of previous number
// $('#weightInput').val('');
// 	});
//
//
// });
