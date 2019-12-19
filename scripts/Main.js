let fulldate = '';
let day = '';
let month = '';
let year = '';
let fulllocation = 'Schellebelle';
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.addEventListener('DOMContentLoaded', function() {
	settime();
	console.log(fulldate);
	eventlisteners();
	getAPI(fulllocation, fulldate);
});

let getAPI = async function(loc, dategiven) {
	let apiurl = `http://api.worldweatheronline.com/premium/v1/astronomy.ashx?q=${loc}&key=3aab9cfab487449f925142516191211&format=json&date=${dategiven}`;
	getAPINewWay(apiurl);
};

const getAPINewWay = async function(url) {
	const get = await fetch(url);
	const apidata = await get.json();
	console.log(apidata);
	showResult(apidata.data.time_zone[0].moon_phase);
};

let showResult = async function(queryResponse) {
	if (document.querySelector('#js-New-moon').classList.contains('js-isVisible')) {
		document.querySelector('#js-New-moon').classList.remove('js-isVisible');
	}
	if (document.querySelector('#js-Third-moon').classList.contains('js-isVisible')) {
		document.querySelector('#js-Third-moon').classList.remove('js-isVisible');
	}
	if (document.querySelector('#js-Waning-Crescent-moon').classList.contains('js-isVisible')) {
		document.querySelector('#js-Waning-Crescent-moon').classList.remove('js-isVisible');
	}
	if (document.querySelector('#js-Waxing-Crescent-moon').classList.contains('js-isVisible')) {
		document.querySelector('#js-Waxing-Crescent-moon').classList.remove('js-isVisible');
	}
	if (document.querySelector('#js-First-moon').classList.contains('js-isVisible')) {
		document.querySelector('#js-First-moon').classList.remove('js-isVisible');
	}
	if (document.querySelector('#js-Waxing-Gibbous-moon').classList.contains('js-isVisible')) {
		document.querySelector('#js-Waxing-Gibbous-moon').classList.remove('js-isVisible');
	}
	if (document.querySelector('#js-Full-moon').classList.contains('js-isVisible')) {
		document.querySelector('#js-Full-moon').classList.remove('js-isVisible');
	}
	if (document.querySelector('#js-Waning-Gibbous-moon').classList.contains('js-isVisible')) {
		document.querySelector('#js-Waning-Gibbous-moon').classList.remove('js-isVisible');
	}

	switch (queryResponse) {
		case 'Last Quarter':
			if (!document.querySelector('#js-Third-moon').classList.contains('js-isVisible')) {
				document.querySelector('#js-Third-moon').className += ' js-isVisible';
			}
			document.querySelector('#js-nextUpType').innerHTML = 'Next Up - Waning Crescent';
			break;

		case 'Waning Crescent':
			if (!document.querySelector('#js-Waning-Crescent-moon').classList.contains('js-isVisible')) {
				document.querySelector('#js-Waning-Crescent-moon').className += ' js-isVisible';
			}
			document.querySelector('#js-nextUpType').innerHTML = 'Next Up - New Moon';
			break;

		case 'New Moon':
			if (!document.querySelector('#js-New-moon').classList.contains('js-isVisible')) {
				document.querySelector('#js-New-moon').className += ' js-isVisible';
			}
			document.querySelector('#js-nextUpType').innerHTML = 'Next Up - Waxing Crescent';
			break;

		case 'Waxing Crescent':
			if (!document.querySelector('#js-Waxing-Crescent-moon').classList.contains('js-isVisible')) {
				document.querySelector('#js-Waxing-Crescent-moon').className += ' js-isVisible';
			}
			document.querySelector('#js-nextUpType').innerHTML = 'Next Up - First Quarter';
			break;

		case 'First Quarter':
			if (!document.querySelector('#js-First-moon').classList.contains('js-isVisible')) {
				document.querySelector('#js-First-moon').className += ' js-isVisible';
			}
			document.querySelector('#js-nextUpType').innerHTML = 'Next Up - Waxing Gibbous';
			break;

		case 'Waxing Gibbous':
			if (!document.querySelector('#js-Waxing-Gibbous-moon').classList.contains('js-isVisible')) {
				document.querySelector('#js-Waxing-Gibbous-moon').className += ' js-isVisible';
			}
			document.querySelector('#js-nextUpType').innerHTML = 'Next Up - Full Moon';
			break;

		case 'Full Moon':
			if (!document.querySelector('#js-Full-moon').classList.contains('js-isVisible')) {
				document.querySelector('#js-Full-moon').className += ' js-isVisible';
			}
			document.querySelector('#js-nextUpType').innerHTML = 'Next Up - Waning Gibbous';
			break;
		case 'Waning Gibbous':
			if (!document.querySelector('#js-Waning-Gibbous-moon').classList.contains('js-isVisible')) {
				document.querySelector('#js-Waning-Gibbous-moon').className += ' js-isVisible';
			}
			document.querySelector('#js-nextUpType').innerHTML = 'Next Up - Last Quarter';
			break;
	}
	document.querySelector('#js-moontype').innerHTML = queryResponse;
};

let settime = async function() {
	var dt = new Date();
	day = dt.getDate();
	month = dt.getMonth() + 1;
	year = dt.getFullYear();
	fulldate = year + '-' + month + '-' + day;

	document.querySelector('.js-year').innerHTML = year;
	document.querySelector('.js-month').innerHTML = months[month - 1];
	document.querySelector('.js-day').innerHTML = day;
	//console.log(fulldate);
};

let dayup = async function() {
	day++;
	if (month == 2) {
		if (day > 28) {
			day = 0;
			monthup();
		}
	} else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
		if (day > 31) {
			day = 0;
			monthup();
		}
	} else if (month == 4 || month == 6 || month == 9 || month == 11) {
		if (day > 30) {
			day = 0;
			monthup();
		}
	}
	document.querySelector('.js-year').innerHTML = year;
	document.querySelector('.js-month').innerHTML = months[month - 1];
	document.querySelector('.js-day').innerHTML = day;
	fulldate = year + '-' + month + '-' + day;
	getAPI(fulllocation, fulldate);
};
let daydown = async function() {
	day--;
	if (day <= 0) {
		if (month == 3) {
			day = 28;
			monthdown();
		} else if (month == 2 || month == 4 || month == 6 || month == 8 || month == 9 || month == 11 || month == 1) {
			day = 31;
			monthdown();
		} else if (month == 5 || month == 7 || month == 10 || month == 12) {
			day = 30;
			monthdown();
		}
	}
	document.querySelector('.js-year').innerHTML = year;
	document.querySelector('.js-month').innerHTML = months[month - 1];
	document.querySelector('.js-day').innerHTML = day;
	fulldate = year + '-' + month + '-' + day;
	getAPI(fulllocation, fulldate);
};

let monthup = async function() {
	month++;
	if (month >= 13) {
		month = 1;
		year++;
	}
	document.querySelector('.js-year').innerHTML = year;
	document.querySelector('.js-month').innerHTML = months[month - 1];
	document.querySelector('.js-day').innerHTML = day;
	fulldate = year + '-' + month + '-' + day;
	getAPI(fulllocation, fulldate);
};

let monthdown = async function() {
	month--;
	if (month <= 0) {
		month = 12;
		year--;
	}
	document.querySelector('.js-year').innerHTML = year;
	document.querySelector('.js-month').innerHTML = months[month - 1];
	document.querySelector('.js-day').innerHTML = day;
	fulldate = year + '-' + month + '-' + day;
	getAPI(fulllocation, fulldate);
};

let yearup = async function() {
	year++;

	document.querySelector('.js-year').innerHTML = year;
	document.querySelector('.js-month').innerHTML = months[month - 1];
	document.querySelector('.js-day').innerHTML = day;
	fulldate = year + '-' + month + '-' + day;
	getAPI(fulllocation, fulldate);
};

let yeardown = async function() {
	year--;

	document.querySelector('.js-year').innerHTML = year;
	document.querySelector('.js-month').innerHTML = months[month - 1];
	document.querySelector('.js-day').innerHTML = day;
	fulldate = year + '-' + month + '-' + day;
	getAPI(fulllocation, fulldate);
};

let resetDate = async function() {
	var dt = new Date();
	day = dt.getDate();
	month = dt.getMonth() + 1;
	year = dt.getFullYear();
	fulldate = year + '-' + month + '-' + day;
	getAPI(fulllocation, fulldate);
	document.querySelector('.js-year').innerHTML = year;
	document.querySelector('.js-month').innerHTML = months[month - 1];
	document.querySelector('.js-day').innerHTML = day;
};

let showpopup = async function(){
	document.querySelector('js-popup').classList.remove('o-hide-accessible');
	sleep(5000);
	document.querySelector('js-popup').classList.add('o-hide-accessible');
}

let eventlisteners = async function() {
	document.getElementById('js-c-button-d-d').addEventListener('click', daydown);
	document.getElementById('js-c-button-d-u').addEventListener('click', dayup);

	document.getElementById('js-c-button-m-d').addEventListener('click', monthdown);
	document.getElementById('js-c-button-m-u').addEventListener('click', monthup);

	document.getElementById('js-c-button-y-d').addEventListener('click', yeardown);
	document.getElementById('js-c-button-y-u').addEventListener('click', yearup);

	document.getElementById('js-reset-date').addEventListener('click', resetDate);

	document.getElementById('toggle1').addEventListener('change', function(){
	    if(this.checked) {
			document.querySelector('body').classList.remove('LightTheme');
		} else {
			document.querySelector('body').classList.add('LightTheme');
		}
	});

	document.getElementById('js-popup').addEventListener('hover', showpopup);
};
