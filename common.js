// PC버전 페이지네이션
$(function () {
	$(window).scroll(function () {
		let hw = $(window).width()
		let scLeft = $(window).scrollLeft()

		for (let i = 0; i < 4; i++) {
			if (scLeft >= hw * i && scLeft < hw * (i + 1)) {
				$('.bottom_nav a').removeClass('on')
				$('.bottom_nav a').eq(i + 1).addClass('on')
			}
		};
	});
});

// PC버전 가로 스크롤
$('a').click(function () {

	let id = $(this).attr('href')
	let target = $(id).offset().left
	$('html, body').animate({
		scrollLeft: target
	}, 500)
})

let elm
let moveLeft
let elmSelecter
let delta
$(window).on('load', function () {
	if ($(this).width() > 800) {
		horizontal()
	}
})
$(window).on('resize', function () {
	if ($(this).width() > 800) {
		horizontal()
	} else {
		location.reload();
	}
});
// 마우스 휠 이벤트 수평방향으로 이동
function horizontal() {
	elm = "section"
	$(elm).each(function (index) {
		$(this).on("mousewheel", function (e) {
			// e.stop
			e.preventDefault();
			// let E = e.originalEvent
			// console.log(E)
			delta = 0;
			if (event.wheelDelta) {
				delta = event.wheelDelta;
			}
			moveLeft = $(window).scrollLeft();
			elmSelecter = $(elm).eq(index);
			if (delta < 0) {
				if ($(elmSelecter).next('section') != undefined) {
					try {
						moveLeft = $(elmSelecter).next('section').offset().left;
					} catch (e) {}
				}
			} else {
				if ($(elmSelecter).prev('section') != undefined) {
					try {
						moveLeft = $(elmSelecter).prev('section').offset().left;
					} catch (e) {}
				}
			}
			$("html,body").stop().animate({
				scrollLeft: moveLeft + 'px'
			}, 800);
		});
	});
}


// Mobile 햄버거 버튼
if (matchMedia("screen and (max-width:768px)").matches) {
	$('.fullMenu').click(function () {
		$(this).toggleClass('open');
		$('.hdBottom > nav').on('scroll touchmove mousewheel', function (event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		})
		$('.hdBottom > nav').toggleClass('on');
	});

	$('.gnb>li>a').click(function (e) {
		e.preventDefault()
	})
	$('.gnb>li').click(function () {
		if ($(this).attr('class') !== 'on') {
			$('.sub').slideUp()
			$(this).find('.sub').slideToggle()
			$('.gnb>li').removeClass('on')
			$(this).addClass('on')
		} else {
			$(this).find('.sub').slideToggle()
			$('.gnb>li').removeClass('on')
		}
	});
};

// 영문 사이트 동적 태그 생성
$('.english_site').append($("<p>").text("영문 사이트로 이동"));


// section1 swiper 슬라이드
let swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: false
	}
});

// section3 지도 리스트
$(function () {
	$('.sec3_conWrap>.map_list').click(function () {
		$('.sec3_conWrap>.map_list').removeClass('click')
		$(this).addClass('click')

		let localList = $(this).index()
		$('.local_list>li').removeClass('on')
		$('.local_list>li').eq(localList - 1).addClass('on')
	})

	$('.local_list').click(function () {
		$('.local_list>li').removeClass('on')
		$('.sec3_conWrap>.map_list').removeClass('click')
	})

})

// 모바일 헤더
const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
	if (window.scrollY > headerHeight) {
		header.setAttribute("style", "background: #fefefe");
	} else {
		header.setAttribute("style", "background: transparent;");
	}
});