document.addEventListener('DOMContentLoaded', function() {
	handlePasswordSwitcher();
});

const handlePasswordSwitcher = function() {
	const passwordInput = document.querySelector('.js-password-input'); //ctrl k ctrl u caps
	const passwordToggle = document.querySelector('.js-password-toggle'); // ctrl shift l multicursor

	passwordToggle.addEventListener('change', function() {
		if (passwordInput.type === 'text') {
			passwordInput.type = 'password';
		} else {
			passwordInput.type = 'text';
		}
	});
};
