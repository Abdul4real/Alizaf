// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById('careForm').onsubmit = function(event) {
  event.preventDefault(); // Prevent actual form submission
  // You can add your form submission logic here, for example, AJAX request.
};


function toggleAccordion(event, index) {
    // Get all accordion contents
    var accContents = document.querySelectorAll('.accordion-content');
    // Toggle the right accordion content
    if (accContents[index].style.display === 'block') {
      accContents[index].style.display = 'none';
    } else {
      for (var i = 0; i < accContents.length; i++) {
        accContents[i].style.display = 'none'; // hide others
      }
      accContents[index].style.display = 'block'; // show the right one
    }
  }
  