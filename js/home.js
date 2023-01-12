window.addEventListener('scroll', reveal)

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i=0; i< reveals.length; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }   
}

$(".step").click( function() {
	$(this).addClass("actv").prevAll().addClass("actv");
	$(this).nextAll().removeClass("actv");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".ku1").addClass("actv").siblings().removeClass("actv");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".ku2").addClass("actv").siblings().removeClass("actv");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".ku3").addClass("actv").siblings().removeClass("actv");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".remaja").addClass("actv").siblings().removeClass("actv");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".persekutuan").addClass("actv").siblings().removeClass("actv");
});


const productContainers = [...document.querySelectorAll('.artikel-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        console.log('scroll yeyyy')
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
