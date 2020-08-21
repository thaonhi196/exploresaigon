$('.scroll').click(function(e) {
	e.preventDefault();
	var url = this.href;
	var urlHash = this.hash;
	var parts = url.split('#');
	var trgt = parts[1];
	var target_offset = $('#'+trgt).offset();
	var target_top = target_offset.top;

	$('html, body').animate({
		scrollTop:target_top
	}, 500);
	if($('nav.dots a').hasClass('active')) {
		$('nav.dots a').removeClass('active');
	}
	if (urlHash == '#section-1') {
		$('nav.dots a.scroll-1').addClass('active');
	}
	if (urlHash == '#section-2') {
		$('nav.dots a.scroll-2').addClass('active');
	}
	if (urlHash == '#section-3') {
		$('nav.dots a.scroll-3').addClass('active');
	}
	if (urlHash == '#section-4') {
		$('nav.dots a.scroll-4').addClass('active');
	}
});

$('nav.dots a').click(function(){
	if($('nav.dots a').hasClass('active')) {
		$('nav.dots a').removeClass('active');
	}
	$(this).addClass('active');
});

$('.hamburger, nav.main ul li a').on('click', function(e) {
	e.preventDefault();
	$('.hamburger').toggleClass('is-open');
	$('nav.main ul').toggleClass('is-open');
});

$('.geekstudios, .scroll-2').mouseenter(function() {
	$('.hipster').addClass('show');
});
$('.geekstudios, .scroll-2').mouseleave(function() {
	$('.hipster').removeClass('show');
});
const nodes = [].slice.call(document.querySelectorAll('li'), 0);
const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
const classNames = ['in', 'out'].map(p => Object.values(directions).map(d => `${p}-${d}`)).reduce((a, b) => a.concat(b));

const getDirectionKey = (ev, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = l - width / 2 * (width > height ? height / width : 1);
  const y = t - height / 2 * (height > width ? width / height : 1);
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

class Item {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('mouseover', ev => this.update(ev, 'in'));
    this.element.addEventListener('mouseout', ev => this.update(ev, 'out'));
  }

  update(ev, prefix) {
    this.element.classList.remove(...classNames);
    this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
  }}


nodes.forEach(node => new Item(node));




function scaleToFill() {
    $('video.video-background').each(function(index, videoTag) {
       var $video = $(videoTag),
           videoRatio = videoTag.videoWidth / videoTag.videoHeight,
           tagRatio = $video.width() / $video.height(),
           val;

       if (videoRatio < tagRatio) {
           val = tagRatio / videoRatio * 1.02; <!-- size increased by 2% because value is not fine enough and sometimes leaves a couple of white pixels at the edges -->
       } else if (tagRatio < videoRatio) {
           val = videoRatio / tagRatio * 1.02;
       }

       $video.css('transform','scale(' + val  + ',' + val + ')');

    });    
}

$(function () {
    scaleToFill();

    $('.video-background').on('loadeddata', scaleToFill);

    $(window).resize(function() {
        scaleToFill();
    });
});
	
	
	$( "button" ).click(function() {
  $( ".overlay" ).toggleClass( "transition" );
});

	
	$(document).ready(function() {

    var counter = 0;
    var c = 0;
    var i = setInterval(function(){
        $("#load-block h1").html(c + "%");
        $("#load-block .load-svg-color").css("height", c + "px");
        //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

      /*
      $(".loading-page .counter h1.color").css("width", c + "%");
      */
      counter++;
      c++;

      if(counter ==25) {
          clearInterval(i);
        $('#load-block').fadeOut();        
      }
    }, 50);
  });
	