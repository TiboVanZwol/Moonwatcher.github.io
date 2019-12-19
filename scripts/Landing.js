document.addEventListener('DOMContentLoaded', function() {
    eventlisteners();
    delayedinfo();
});

let showpopup = async function(){
    //console.log('hoi');
    
	document.querySelector('#js-popup').classList.remove('o-hide-accessible');
	await sleep(5000);
	document.querySelector('#js-popup').classList.add('o-hide-accessible');
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

let delayedinfo = async function(){
    await sleep(2000);
	document.querySelector('#js-popup').classList.remove('o-hide-accessible');
	await sleep(5000);
	document.querySelector('#js-popup').classList.add('o-hide-accessible');
}

let eventlisteners = async function() {

	document.getElementById('toggle1').addEventListener('change', function(){
	    if(this.checked) {
			document.querySelector('body').classList.remove('LightTheme');
		} else {
            document.querySelector('body').classList.add('LightTheme');
        }
    });
    document.getElementById('js-toggle').addEventListener('mouseover', showpopup);

};