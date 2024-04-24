const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const emailEl = event.currentTarget.elements.email;
	const passEl = event.currentTarget.elements.password;
	if (!emailEl.value || !passEl.value) {
		alert('All form fields must be filled in');
		return;
	}

	const formData = {
		[emailEl.name]: emailEl.value.trim(),
		[passEl.name]: passEl.value.trim(),
	}
	console.log(formData);
	event.currentTarget.reset();



}
