// Get form element
const form = $('form');

// Listen for form submit event
form.on('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  
  // Send form data to server
  $.ajax({
    url: '/checkout',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
      // Redirect to thank-you page
      window.location.href = '/thank-you';
    },
    error: function() {
      // Display error message
      alert('There was an error processing your order. Please try again.');
    }
  });
});
j