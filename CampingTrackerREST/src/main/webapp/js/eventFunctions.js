window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	getCamps();
	document.addCampForm.submit.addEventListener('click', createCamp);
}

function updateCamp(form, camp) {
	console.log(camp, form);
	camp.name = form.name.value;
	camp.location = form.location.value;
	camp.date = form.date.value;
	camp.distance = form.distance.value;
	camp.price = form.price.value;
	let xhr = new XMLHttpRequest();
	xhr.open("PUT", "api/camp/" + camp.id);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let newCamp = JSON.parse(xhr.responseText);
				console.log(newCamp);
				displayCamp(newCamp);
			} else {
				console.log("Camp not found");
			}
		}
	}

	xhr.send(JSON.stringify(camp));
}

function updateCampForm(camp) {
	let updateDiv = document.getElementById("updateCamp");
	let form = document.addCampForm.cloneNode(true);
	form.submit.textContent = "Update Camp";
	form.id = "update";
	form.name.value = camp.name;
	form.location.value = camp.location;
	form.date.value = camp.date;
	form.distance.value = camp.distance;
	form.price.value = camp.price;
	updateDiv.appendChild(form);
	console.log(camp);
	form.submit.addEventListener("click", function(e) {
		e.preventDefault();
		console.log(camp);
		updateCamp(form, camp);
	});
}

function deleteCamping(campingId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/camp/' + campingId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let campingDiv = document.getElementById('camping');
			}
		}
	}
	xhr.send();
}

function createCamp(e) {
	e.preventDefault();
	console.log("createFunction");
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/camp', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let data = JSON.parse(xhr.responseText);
				displayCamp(data);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	let camp = {
		name: document.addCampForm.name.value,
		location: document.addCampForm.location.value,
		date: document.addCampForm.date.value,
		distance: document.addCampForm.distance.value,
		price: document.addCampForm.price.value
	};
	xhr.send(JSON.stringify(camp));
}

function displayCamp(camp) {
	let dataDiv = document.getElementById('campData');
	dataDiv.textContent = '';
	// TODO:
	// * Create and append elements to the data div to display:
	// * Film title (h1) and description (blockquote).
	let h1 = document.createElement('h1');
	h1.textContent = camp.name;
	dataDiv.appendChild(h1);

	let bq = document.createElement('blockquote');
	bq.textContent = camp.location;
	dataDiv.appendChild(bq);

	let ul = document.createElement('ul');
	let name = document.createElement('li');
	let location = document.createElement('li');
	let date = document.createElement('li');
	let distance = document.createElement('li');
	let price = document.createElement('li');

	name.textContent = camp.rating;
	location.textContent = camp.location;
	date.textContent = camp.date;
	distance.textContent = camp.distance;
	price.textContent = camp.price;

	ul.appendChild(name);
	ul.appendChild(location);
	ul.appendChild(date);
	ul.appendChild(distance);
	ul.appendChild(price);

	let li = document.createElement("li");
	let update = document.createElement("button");
	update.name = "update";
	update.textContent = "Update";
	let li2 = document.createElement("li");
	let remove = document.createElement("button");
	remove.name = "remove";
	remove.textContent = "Remove";
	li.appendChild(update);
	update.addEventListener("click", function() {
		updateCampForm(camp)
	});
	li2.appendChild(remove);
	remove.addEventListener("click", function() {
		deleteCamping(camp.id);
	});
	ul.appendChild(li);
	ul.appendChild(li2);

	dataDiv.appendChild(ul);
}

function getCamps() {
	// TODO:
	// * Use XMLHttpRequest to perform a GET request to "api/films/"
	//   with the filmId appended.
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/camp/');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				// * On success, if a response was received parse the film data
				//   and pass the film object to displayFilm().
				let campsData = JSON.parse(xhr.responseText);
				displayCamps(campsData);
			}
			else {
				// * On failure, or if no response text was received, put "Film not found" 
				//   in the filmData div.
				console.log('Camp not found.')
			}
		}
	}
	xhr.send();
};

function displayCamps(camps) {
	console.log("within Camps");
	let campsDiv = document.getElementById('campsDiv');
	campsDiv.textContent = "";
	let table = document.createElement('table');
	table.id = 'campTable';
	table.border = 1;

	table.cellpadding = 10;

	let thead = document.createElement('thead');
	let tr = document.createElement('tr');

	for (c in camps[0]) {
		if (c === "name" || c === "location") {
			let th = document.createElement('th');
			th.textContent = c;
			tr.appendChild(th);
		}
	}

	thead.appendChild(tr);
	table.appendChild(thead);

	let tbody = document.createElement('tbody');

	camps.forEach(function(item) {
		let row = document.createElement('tr');
		row.addEventListener('click', function(e) {
			displayCamp(item);

		});

		let id = document.createElement('td');
		let name = document.createElement('td');
		let location = document.createElement('td');

		id.textContent = item.id;
		name.textContent = item.name;
		location.textContent = item.location;

		row.appendChild(name);
		row.appendChild(location);
		tbody.appendChild(row);

	});


	table.appendChild(tbody);
	campsDiv.appendChild(table);

	let amountOfCamps = camps.length;
	let h1 = document.createElement('h1');
	h1.textContent = "The total number of camping events is: " + amountOfCamps;
	campsDiv.appendChild(h1);


}
