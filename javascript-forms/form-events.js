function handleFocus(event) {
  console.log('focus event fired');
  console.log('   event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('   event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':', event.target.value);
}

var $nameInput = document.querySelector('#user-name');
var $emailInput = document.querySelector('#user-email');
var $messageInput = document.querySelector('#user-message');

$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('input', handleInput);
$messageInput.addEventListener('input', handleInput);

$nameInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('focus', handleFocus);
$messageInput.addEventListener('focus', handleFocus);

$nameInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('blur', handleBlur);
$messageInput.addEventListener('blur', handleBlur);
