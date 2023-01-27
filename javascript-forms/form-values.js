var $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var name = $contactForm.elements.name.value;
  var email = $contactForm.elements.name.value;
  var message = $contactForm.elements.message.value;
  var messageData = {
    name,
    email,
    message
  };
  console.log('messageData:', messageData);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', handleSubmit);
