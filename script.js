let newBook = []
let myLibrary = [];

function Book(arr) {
  // the constructor...
	this.author = arr[0]
	this.title = arr[1]
	this.pages = arr[2]
	addBookToLibrary(this);
}

function addBookToLibrary(book) {
	myLibrary.push(book);
	console.table(myLibrary);
	displayLibrary(myLibrary);
}

function displayLibrary(arr) {
	for (let i in arr) {
		bookDisplayed = "#book" + arr.title;
		console.log(document.querySelector(bookDisplayed))
		if (document.querySelector(bookDisplayed) === null) {
			let newBook = document.createElement('div');
			newBook.id = "#book" + i.toString();
			newBook.textContent = arr[i].title;
			document.querySelector('body').appendChild(newBook);
		}
	}
}

function showForm(e) {
	console.log("test")
	document.querySelector(".bookForm").style.display = "block";
}

function submitForm(e) {
	e.preventDefault();
	let formFields = []
	document.querySelectorAll("input").forEach(field => {
		formFields.push(field.value);
	})
	newBook = new Book(formFields);
}

const newBookButton = document.querySelector('.bookButton');
newBookButton.addEventListener('click', e => showForm(e))

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', e => submitForm(e));

displayLibrary(myLibrary);

/* function submitForm(e, arr) {
	e.preventDefault();
	for (let i in arr) {
		console.log(arr[i])
		let element = document.querySelector("." + arr[i])
		console.log(element.value);
	}
}

function createForm(...fields) {
	if (document.querySelector('.newForm') === null) {
		let newForm = document.createElement('form');
		let label
		let input
		let submit
		for (let i in fields) {
			label = document.createElement('label');
			input = document.createElement('input');
			label.classList.add(fields[i])
			label.textContent = fields[i]
			label.setAttribute("for", fields[i])
			input.classList.add(fields[i]);
			input.setAttribute("for", fields[i])
			label.setAttribute("name", fields[i])
			if (fields[i] === "pages") input.type = "number";
			else if (fields[i] === "read") input.type = "checkbox";
			else input.type = "text";
			newForm.appendChild(label);
			newForm.appendChild(input);
			console.log(label, input);
		}
		submit = document.createElement('button');
		submit.classList.add('submit');
		submit.type = 'submit';
		submit.textContent = "Submit";
		newForm.appendChild(submit);
		newForm.method = "POST";
		newForm.addEventListener('submit', e => submitForm(e, fields))
		document.querySelector('body').appendChild(newForm);
	}
} */