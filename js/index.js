var size = 86;
var columns = Array.from(document.getElementsByClassName('column'));
var d = void 0,
    c = void 0;
var classList = ['visible', 'close', 'far', 'far', 'distant', 'distant'];
var use24HourClock = true;

function padClock(p, n) {
	return p + ('0' + n).slice(-2);
}

function getClock() {
	d = new Date();
	return [use24HourClock ? d.getHours() : d.getHours() % 12 || 12, d.getMinutes(), d.getSeconds()].reduce(padClock, '');
}

function getClass(n, i2) {
	return classList.find(function (class_, classIndex) {
		return Math.abs(n - i2) === classIndex;
	}) || '';
}

var loop = setInterval(function () {
	c = getClock();

	columns.forEach(function (ele, i) {
		var n = +c[i];
		var offset = -n * size;
		ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + size / 2 + 'px))';
		Array.from(ele.children).forEach(function (ele2, i2) {
			ele2.className = 'num ' + getClass(n, i2);
		});
	});
}, 200 + Math.E * 10);

function changeBg() {
	var currentTime = new Date().getHours();
	if (0 <= currentTime&&currentTime < 2) {
		document.body.style.backgroundImage ="url('img/BG-night-midnight.jpg')"
	}
	else if(2 <= currentTime&&currentTime < 4.5) {
		document.body.style.backgroundImage ="url('img/BG-night.jpg')"
	}
	else if(4.5 <= currentTime&&currentTime < 6.5) {
		document.body.style.backgroundImage ="url('img/BG-dawn.jpg')"
	}
	else if(6.5 <= currentTime&&currentTime < 7.5) {
		document.body.style.backgroundImage ="url('img/BG-sunrise-dawn.jpg')"
	}
	else if(7.5 <= currentTime&&currentTime < 8.5) {
		document.body.style.backgroundImage ="url('img/BG-morning-sunrise.jpg')"
	}
	else if(8.5 <= currentTime&&currentTime < 11.5) {
		document.body.style.backgroundImage ="url('img/BG-morning.jpg')"
	}
	else if(11.5 <= currentTime&&currentTime < 13.5) {
		document.body.style.backgroundImage ="url('img/BG-noon.jpg')"
	}
	else if(13.5 <= currentTime&&currentTime < 18) {
		document.body.style.backgroundImage ="url('img/BG-afternoon.jpg')"
	}
	else if(18 <= currentTime&&currentTime < 20) {
		document.body.style.backgroundImage ="url('img/BG-evening-sunset.jpg')"
	}
	else if(20 <= currentTime&&currentTime < 23) {
		document.body.style.backgroundImage ="url('img/BG-evening-stars.jpg')"
	}
	else if(23 <= currentTime&&currentTime < 24) {
		document.body.style.backgroundImage ="url('img/BG-night-midnight.jpg')"
	}
}

changeBg();
 setInterval(function(){ changeBg(); }, 60000); //60000 means 1 min

 // images from UHDbeta.com