function showOptions() {
    var menu = document.getElementById("drop-down");
    menu.style.display = "block";
    
  }

  // var optionsGroup = document.getElementById("target_select");
  // var optionSelected = optionsGroup.options[optionsGroup.selectedIndex].value;

  function activityPick() {
    var optionsGroup = document.getElementById("target_select");
    var optionSelected = optionsGroup.options[optionsGroup.selectedIndex].value;
    // alert(optionSelected);
    axios.get('http://www.boredapi.com/api/activity?participants='+ optionSelected, {
    })
    .then(response => showActivity(response))
    .catch(error => console.error(error));
};

function showActivity (response){
    var showActivity = document.getElementById('activity-list');
    showActivity.innerHTML += '<br><h1><b>' + response.data.activity + "</b></h1>";
    showActivity.innerHTML += '<hr>';
}

document.getElementById("activity").addEventListener("click", showOptions);
document.getElementById("activity-pick").addEventListener("click", activityPick);









// function myFunction() {
//     document.getElementsByClassName("dropdown").classList.toggle("open");

// }

// window.onclick = function(event) {
//     if (event.target.matches('dropbtn')) {
//         var dropdowns = document.getElementsByClassName("content");
//         for (i = 0; i < dropdowns.length; i++) {
//             if (dropdowns[i].classList.contains('open')){
//             dropdowns[i].classList.remove('open');
//             }
//         }
//         }
//     }

