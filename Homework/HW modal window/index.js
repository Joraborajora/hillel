$(document).ready(function() {
    // Open modal when button is clicked
    $('#modalButton').click(function() {
      $('#modal').css('display', 'block');
    });
  
    // Close modal when close button or outside the modal is clicked
    $('.close, .modal').click(function() {
      $('#modal').css('display', 'none');
    });
  
    // Prevent modal from closing when modal content is clicked
    $('.modal-content').click(function(event) {
      event.stopPropagation();
    });
  });