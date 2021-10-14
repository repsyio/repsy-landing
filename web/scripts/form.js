function submitForm(e) {
  e.preventDefault();

  // Creating the XMLHttpRequest object
  const request = new XMLHttpRequest();

  // Instantiating the request object
  request.open("POST", "https://panel.repsy.io/be/support/contact");

  // Defining event listener for readystatechange event
  request.onreadystatechange = function () {
    // Check if the request is compete and was successful
    if (this.readyState === 4 && this.status === 200) {
      // Inserting the response from server into an HTML element
    }
  };

  // Retrieving the form data
  const form = document.getElementById("messageForm");
  const formData = new FormData(form);

  // Sending the request to the server
  request.send(formData);

  //Clear form elements
  const formElements = document.getElementById("messageForm").elements;
  for (const element of formElements) {
    if (
      element.type === "text" ||
      element.type === "textarea" ||
      element.type === "email"
    ) {
      element.value = "";
    }
  }
  formSpan.textContent =
    "Your message has been sent successfully, we will get back to you as soon as possible.";

  setTimeout(function () {
    formSpan.textContent = " ";
  }, 8000);
}

formButton.addEventListener("click", submitForm);
function checkLength() {
  var messageLength = message.value.length;
  if (messageLength == 1000) {
    formSpan.textContent ="Warning: Max length 1000";  
  }
  if(messageLength < 1000){
    formSpan.textContent = " ";
  }
}
message.addEventListener('keyup',checkLength);



