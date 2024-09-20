var select = document.querySelector('select');
var div = document.querySelector('div');

var selectedOption = select.options[select.selectedIndex];
var selectedId = selectedOption.id;
console.log(selectedId);
div.style.justifyContent = selectedId;

select.addEventListener('change', function() {
  var selectedOption = select.options[select.selectedIndex];
  var selectedId = selectedOption.id;
  console.log(selectedId);
  div.style.justifyContent = selectedId;
});

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            var sliced = data[i]
            div.innerHTML += sliced.id
        }
    })