let email = {},
	password = {},
	signInButton;

const isValidEmailAddress = function(emailAddress) {
	// Basis manier om e-mailadres te checken.
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};
const isEmpty = function(fieldValue) {
	return !fieldValue || !fieldValue.length;
};
const addErrors = function(Field) {
	Field.field.classList.add('has-error');
};

const removeErrors = function(Field) {
	Field.field.classList.remove('has-error');
};

const doubleCheckEmail = function(e) {
	if (isValidEmailAddress(e.target.value)) {
		removeErrors(email);
		email.input.removeEventListener('input', doubleCheckEmail);
	} else {
		typedInput = e.target.value;
		if (isEmpty(typedInput)) {
			email.errorMessage.innerHTML = 'This field is required';
		} else {
			email.errorMessage.innerHTML = 'The email address is wrong';
		}
	}
};

const enableListeners = function() {
	email.input.addEventListener('blur', function(e) {
		console.log(e.target.value);
		typedInput = e.target.value;

		if (!isValidEmailAddress(typedInput)) {
			if (isEmpty(typedInput)) {
				email.errorMessage.innerHTML = 'This field is required';
			} else {
				email.errorMessage.innerHTML = 'The email address is wrong';
			}
			addErrors(email);

			email.input.addEventListener('input', doubleCheckEmail);
		}
	});

	password.input.addEventListener('blur', function(e) {
		console.log(e.target.value);
	});

	signInButton.addEventListener('click', function() {
		console.log('Clicked the button');
	});
};

const isValidPassword = function(password) {
	return password.length > 2;
};

const getDOMElements = function() {
	email.field = document.querySelector('.js-username-field');
	email.input = document.querySelector('.js-username-input');
	email.errorMessage = document.querySelector('.js-username-error-message');

	password.field = document.querySelector('.js-password-field');
	password.input = document.querySelector('.js-password-input');
	password.errorMessage = document.querySelector('.js-password-error-message');

	signInButton = document.querySelector('.js-sign-in-button');

	console.log(email, password, signInButton);
};

document.addEventListener('DOMContentLoaded', function() {
	console.info('Dom is ready to roll... 😁');
	getDOMElements();
	enableListeners();
});
