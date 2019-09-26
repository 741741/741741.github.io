// 播放暂停按钮切换
var pause = document.querySelector('.pause'),
	play = document.querySelector('.play'),
	btn = document.querySelector('.circular');
// addEventListener()用于向指定元素添加事件句柄
btn.addEventListener('click', () => {
	if (play.classList.contains("active")) {
		play.classList.remove("active");
		pause.classList.add("active");
	} else {
		pause.classList.remove("active");
		play.classList.add("active");
	}
})


// css3 波浪按钮特效 
var boxes = document.querySelectorAll('.circle>div');
[].forEach.call(boxes, box => {
	box.addEventListener('mousemove', e => {
		document.body.style.setProperty('--bg-color', box.style.getPropertyValue('--color'));
		var size = parseInt(getComputedStyle(box).width);
		var x = size * .3 * .7 + .7 * e.offsetX;
		var y = size * .3 * .7 + .7 * e.offsetY;
		box.style.setProperty('--x', x);
		box.style.setProperty('--y', y);
		box.style.setProperty('--size', size);
	});
});



// 圆形进度条插件
'use strict';

// IE11 polyfills
if (!Element.prototype.matches)
	Element.prototype.matches = Element.prototype.msMatchesSelector ||
	Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest) {
	Element.prototype.closest = function (s) {
		var el = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}


// Examples
var options = [{
		max: 100,
		value: 60,
		textFormat: 'percent'
	},
	{
		max: 100,
		value: 60
	},
	{
		max: 100,
		value: 60
	},
	{
		max: 100,
		value: 60,
		textFormat: 'vertical'
	},
	{
		max: 100,
		value: 60,
		textFormat: 'vertical'
	},
	{
		max: 100,
		value: 60,
		textFormat: 'vertical'
	},
	{
		max: 12,
		value: 9,
		textFormat: function (value, max) {
			return value + ' dots';
		}
	},
	{
		max: 100,
		value: 40,
		textFormat: 'valueOnCircle'
	},
	{
		max: 100,
		value: 40,
		textFormat: 'percent'
	},
	{
		max: 100,
		value: 80,
		textFormat: 'percent'
	},
	{
		max: 100,
		value: 60,
		textFormat: 'percent'
	},
	{
		max: 100,
		value: 75,
		textFormat: 'percent',
		startAngle: -90
	},
	{
		max: 4,
		value: 3,
		textFormat: 'vertical',
		clockwise: false,
		animation: 'none'
	},
];

// options.forEach(function (opts, i) {
// 	var exampleEl = document.querySelector('.example:nth-child(' + (i + 1) + ')');
// 	new CircleProgress(exampleEl.querySelector('.progress'), opts);
// 	// $(exampleEl.querySelector('.progress')).circleProgress(opts);
// 	var optsStr = '{\n';
// 	for (var name in opts) {
// 		var value = opts[name];
// 		if (typeof value === 'string') {
// 			value = '\'' + value + '\'';
// 		}
// 		optsStr += '\t' + name + ': ' + value + ',\n';
// 	}
// 	optsStr += '}';
// 	exampleEl.querySelector('.variant-vanilla code').innerText = 'new CircleProgress(\'.progress\', ' + optsStr + ');';
// 	exampleEl.querySelector('.variant-jquery code').innerText = '$(\'.progress\').circleProgress(' + optsStr + ');';
// 	exampleEl.querySelector('.example-figure').insertAdjacentHTML('beforeend', '<div class="controls">' +
// 		'<label><input type="number" name="min" value="0">min</label>' +
// 		'<label><input type="number" name="value" value="' + opts.value + '">value</label>' +
// 		'<label><input type="number" name="max" value="' + opts.max + '">max</label>' +
// 		'</div>');
// });




hljs.initHighlightingOnLoad();

Array.prototype.slice.call(document.querySelectorAll('.select-variant')).forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		e.preventDefault();
		if (this.dataset.variant === 'vanilla') {
			document.body.classList.remove('show-variant-jquery');
			document.body.classList.add('show-variant-vanilla');
		} else {
			document.body.classList.remove('show-variant-vanilla');
			document.body.classList.add('show-variant-jquery');
		}
	});
});


Array.prototype.slice.call(document.querySelectorAll('.code')).forEach(function (el) {
	el.addEventListener('click', function () {
		var r = document.createRange();
		r.selectNode(this);
		var s = document.getSelection();
		s.empty();
		s.addRange(r);
	});
});


document.body.addEventListener('change', function (e) {
	if (e.target.nodeName !== 'INPUT') return;
	var key = e.target.name;
	var exampleEl = e.target.closest('.example');
	var cp = exampleEl.querySelector('.progress').circleProgress;
	cp[key] = e.target.value;
	Array.prototype.slice.call(exampleEl.querySelectorAll('.controls input')).forEach(function (input) {
		input.value = cp[input.name];
	});
});

// canvas 学习
window.onload = function () {
	var can = this.document.getElementById('can');
	// getContext() 方法返回一个用于在画布上绘图的环境。
	var cxt = can.getContext('2d');

	var x = 200;
	var y = 200;
	var r = 100;

	var angle = 0; //每次增加角度

	// 画半圆方法
	function draw_ban() {
		if (angle == 75600) { //取四个的最小公倍数，清空angle
			angle = 0;
		}
		for (var i = 0; i < 4; i++) {
			// 70.7为拐点的半径，45为拐点的领先度数（i*90+45+angle）
			var guai_x = x + 70.7 * Math.cos((i * 90 + 45 + angle) * Math.PI / 180);
			var	guai_y = y + 70.7 * Math.sin((i * 90 + 45 + angle) * Math.PI / 180);
			var	ban_x = x + 100 * Math.cos(( i * 90 + angle) * Math.PI / 180);
			var	ban_y = y + 100 * Math.sin((i * 90 + angle) * Math.PI / 180);

			cxt.beginPath();
			cxt.fillStyle = 'blue';
			cxt.moveTo(x,y);
			cxt.quadraticCurveTo(guai_x,guai_y,ban_x,ban_y);
			cxt.closePath();
			cxt.fill();
		}
		angle++;
	}

	// 画三角形方法
	function draw_san(){
		if( angle == 75600){
			angle = 0;
		}

		//1.5为tan值，xxx为落后的角度
		var xxx = Math.atan(1.5) * 180 / Math.PI;
        for (var j = 0; j < 4; j++) {
            //180为三角形的斜边长
            var line_1x = x + 180 * Math.cos((j * 90 - xxx + angle) * Math.PI / 180);
            var line_1y = y + 180 * Math.sin((j * 90 - xxx + angle) * Math.PI / 180);
            var line_2x = x + 100 * Math.cos((j * 90 + angle) * Math.PI / 180);
            var line_2y = y + 100 * Math.sin((j * 90 + angle) * Math.PI / 180);

            cxt.beginPath();
            cxt.fillStyle = 'green';
            cxt.moveTo(x, y);

            cxt.lineTo(line_1x, line_1y);
            cxt.lineTo(line_2x, line_2y);
            cxt.closePath();
            cxt.fill();
        }
		angle++;
	} 

	//画圆心方法
	function draw_xin(){
		cxt.beginPath();
		cxt.fillStyle = '#FFF';
		cxt.arc(x,y,10,0,2*Math.PI,true);
		cxt.fill();
	}

	// 动起来
	setInterval(function(){
		cxt.clearRect(0,0,400,400); // 清屏
		draw_san(); //画三角形方法--调用
		draw_ban(); //画半圆--调用
		draw_xin(); //画圆心-调用
	},60);
}




// 3d 立方体旋转动画 
var trans3DDemo1 = $("#trans3DDemo1")
  , trans3DBoxes1 = $("#trans3DBoxes1")
  , boxes1 = $("#trans3DBoxes1 div")
  , threeDTimeline = new TimelineMax({
    onUpdate: updateCube,
    repeat: -1
})
  , stageW = ($(window).width()) / 2
  , stageH = ($(window).height()) / 2
  , stageX = (stageW - (trans3DBoxes1.width() / 2))
  , stageY = (stageH - (250 / 2));
TweenMax.set(trans3DBoxes1, {
    css: {
        transformPerspective: 3000,
        transformStyle: "preserve-3d"
    }
});
threeDTimeline.set(boxes1[0], {
    rotationX: 0,
    rotationY: 0,
    x: 0,
    y: 0,
    z: 125,
    opacity: 0.85
}).set(boxes1[1], {
    rotationX: 0,
    rotationY: -90,
    x: -125,
    y: 0,
    z: 0,
    opacity: 0.85
}).set(boxes1[2], {
    rotationX: 0,
    rotationY: 90,
    x: 125,
    y: 0,
    z: 0,
    opacity: 0.85
}).set(boxes1[3], {
    rotationX: 90,
    rotationY: 0,
    x: 0,
    y: -125,
    z: 0,
    opacity: 0.85
}).set(boxes1[4], {
    rotationX: -90,
    rotationY: 0,
    x: 0,
    y: 125,
    z: 0,
    opacity: 0.85
}).set(boxes1[5], {
    rotationX: 0,
    rotationY: 180,
    x: 0,
    y: 0,
    z: -125,
    opacity: 0.85
}).set(trans3DBoxes1, {
    x: 150,
    y: 150,
    transformOrigin: "125px 125px 0px"
});
boxes1.each(function(index, element) {
    $(element).hover(over, out);
    function over() {
        TweenMax.to(element, 0.15, {
            opacity: 0.33
        });
    }
    function out() {
        TweenMax.to(element, 0.15, {
            opacity: 0.85
        });
    }
});
threeDTimeline.to(trans3DBoxes1, 15, {
    css: {
        rotationY: 360,
        rotationX: -720,
        transformOrigin: "125px 125px 0px"
    },
    ease: Power0.easeNone
});
function updateCube() {
    stageW = ($(window).width()) / 2;
    stageH = ($(window).height()) / 2;
    stageX = (stageW - (trans3DBoxes1.width() / 2));
    stageY = (stageH - (250 / 2));
    TweenMax.to(trans3DBoxes1, 1, {
        css: {
            x: stageX,
            y: stageY
        }
    });
}


// 点击导航
$('.nav ul li').click(function(e){
	if($(this).hasClass('slider')){
		return;
	}
	var whatTab = $(this).index();
	var howFar = 135 * whatTab;
	$('.slider').css({
		left:howFar + 'px'
	})
	$('.ripple').remove();
	var posX = $(this).offset().left,
		posY = $(this).offset().top,
		buttonWidth = $(this).width(),
		buttonHeight = $(this).height();
	$(this).append('<span class="ripple"></span>');

	if(buttonWidth >= buttonHeight ){
		buttonHeight = buttonWidth;
	}else{
		buttonWidth = buttonHeight;
	}

	var x = e.pageX - posX - buttonWidth / 2;
	var y = e.pageY - posY - buttonHeight / 2;
	$('.ripple').css({
		width:buttonWidth,
		height:buttonHeight,
		top:y+'px',
		left:x+'px'
	}).addClass('rippleEffect');
})


$('.mouse').click(function(){
	$('html,body').animate({
        scrollTop: 0
    }, 500)
})