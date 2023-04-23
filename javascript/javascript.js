// Get form element
const form = document.querySelector('form');

// Listen for form submit event
form.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(form);
  
  // Send form data to server
  fetch('/checkout', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    // Handle response
    if (response.ok) {
      // Redirect to thank-you page
      window.location.href = '/thank-you';
    } else {
      // Display error message
      alert('There was an error processing your order. Please try again.');
    }
  })
  .catch(error => {
    // Display error message
    alert('There was an error processing your order. Please try again.');
  });
});
mja