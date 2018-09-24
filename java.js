
// var x = 1;

// setInterval(function toka(){

// 	if (x == 1) {
// 			document.getElementById("boddy").style.background = "tomato";
// 			x =2
// 	}else if (x ==2){


// 		document.getElementById("boddy").style.background = "green";

// 		x=1;
// 	}



// window.addEventListener("scroll",function(){

// 	var winScroll = document.documentElement.scrollTop;
// 	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	var scrolled = (winScroll / height) * 100;
// 	document.getElementById("jork").style.width = scrolled + "%";

// })



// var numbers = document.getElementsByClassName("numbers");
// var math = document.getElementsByClassName("math");
// var sum = document.getElementById("sum")


// function calculator(){
// for (var i = 0; numbers.length > i ; i++) {
// 	numbers[i].addEventListener("click",function(){
// 		 sum.textContent  += this.textContent 
// 	})
// }
// document.getElementById("submiti").addEventListener("click",function(){
// 			sum.textContent = eval(sum.textContent)
// 	})
// }
// calculator()










// function capital(str) 
// {
//     str = str.split(" ");
	
//     for (var i = 0, x = str.length; i < x; i++) {
// 		str[i] = str[i][0].toUpperCase() + str[i].substr(1,str.length);

		
//     }
	
//     return str.join(" ");
// }

// console.log(capital("javaScript program to capitalize the first"));




// function reset() {
//   for(let i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.display = 'none';
//   }
// }

// function startSlide() {
//   reset();
//   sliderImages[0].style.display = 'block';
// }


// function slideLeft() {
//   reset();
//   sliderImages[current - 1].style.display = 'block';
//   current--;
// }

// function slideRight() {
//   reset();
//   sliderImages[current + 1].style.display = 'block';
//   current++;
// }

// arrowLeft.addEventListener('click', function(e) {
//   if(current === 0) {
//     current = sliderImages.length;
//   }
//   slideLeft();
// });

// arrowRight.addEventListener('click', function(e) {
//   if(current === sliderImages.length - 1) {
//     current = - 1;
//   }
//   slideRight();
// });





$(document).ready(function(){

$("#wrap .man").each(function(index){

	$(this).on("click", function(){

  	var x = $(this).find("img").attr("src");
 
  	// $(this).find("img").addClass("test");

  	var top = $(this).offset().top - $(this).height()-100;
  	var right  = $(window).width() - $(this).width();
  	$(this).find("img").css({

  		"transform":"translate("+right +"px,"+-top+"px) scale(0)"
  	})

  	console.log(right)


		function addimage(){	

			$(".man").eq(index).find("img").remove()
			$(".man").eq(index).append("<img src='"+x+"'>")
		}
		setTimeout(addimage, 300)
  
  })
})


})








$(document).ready(function() {

  $('#main-nav li a').click(function(e) {

  	var targetHref = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(targetHref).offset().top
	}, 500);
    e.preventDefault();
  });
});






// Slider
$(".bull").eq(0).addClass("active");
var current = 0;


$("#next").on("click", function(){

	$("#bingo img").removeClass("imgi2");
	$("#bingo img").addClass("imgi");

	var imgLength = $("#bingo img").length;
	if (current == imgLength -1) {
		current = -1;
	}

	
	$(".bull, #bingo img" ).removeClass("active");
	$(".bull").eq(current + 1).addClass("active");
	$("#bingo img").eq(current + 1).addClass("active");
	current++;
})


$("#prev").on("click", function(){

	$("#bingo img").removeClass("imgi");
	$("#bingo img").addClass("imgi2");

	var imgLength = $("#bingo img").length;
	if(current == 0){
		current = imgLength;
	}

	$(".bull, #bingo img" ).removeClass("active");
	$(".bull").eq(current - 1).addClass("active");
	$("#bingo img").eq(current - 1).addClass("active");

	current--;

})


$(".bull").each(function(index){

	$(this).click(function(){
		$(".bull, #bingo img").removeClass("active");
		$(this).addClass("active");
		$("#bingo img").eq(index).addClass("active");
		current = index;

	})

})	



$(window).on("load",function(){

	var shed = $("#bingo img").length - $(".bull").length
	
	for (var i = 0; i < shed; i++) {

			
		$("#bullets").append("<div class='bull'></div>")

	}


})


// scrol top


$(".top a").click(function(){
	$("html, body").animate({
		scrollTop : $("html").offset().top
	},300,"linear");	
})



/// Oo

 // $(document).ready(function () {
 //    	 var hover_focus = false ;
 //        $("#menu_pop").click(function () {
 //            $('.select_menu_dropdown').toggleClass('for_dropdown');
 //        })

	// 	 $("#menu_pop").on("mouseover",function(){
	// 	    	hover_focus = true ;
	// 	    })
	// 	     $("#menu_pop").on("mouseout",function(){
	// 	    	hover_focus = false ;
	// 	    })
	// 	    $(document).click(function() {
	// 	        if(!hover_focus) {
	// 	              $('.select_menu_dropdown').removeClass('for_dropdown');             
	// 	        }
	// 	    }) ;


 //    });


 
 $(".girchi").mousemove(function(event){

 	var xx = event.clientX - $(this).offset().left
 	var yy  = xx/300*100

 	$(this).css("background-size", yy+"%" + 100 + "%")

 	

 })   



 // forms




 $(".texts, .texts2").keyup(function(event){

 	if ($(".texts").val().length > 0 && $(".texts2").val().length > 0 ) {
 		$("#submit").removeAttr("disabled");
 		$("#submit").css("cursor","pointer");
 	}
 })

 $(window).keyup(function(event){

 	if (event.which == 8 && $(".texts").val().length == 0 || 
 		event.which == 8 && $(".texts2").val().length == 0) {
 		$("#submit").attr("disabled","");
 		$("#submit").css("cursor","no-drop");
 	}
 	if (event.which == 46 && $(".texts").val().length == 0 || 
 		event.which == 46 && $(".texts2").val().length == 0) {
 		if ( $(".texts").val().length <= 0 || $(".texts2").val().length <= 0 ) {
 			$("#submit").attr("disabled","");
 			$("#submit").css("cursor","no-drop"); }	
 	}

 })



// form 2



// console.log(lowerCaseLetters)

// var myInput = document.getElementById("pass")

// $("#passsub").click(function(){


// 	if(myInput.value.match(lowerCaseLetters)) {  
//    			alert("sda")
//   	} 

var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
$(window).keyup(function(){



console.log($("#pass").val())

if( $("#pass").val().match(lowerCaseLetters) ){

	$("#letter").css("color","green")

}else {
	$("#letter").css("color","red")
}

if( $("#pass").val().match(upperCaseLetters) ){

	$("#capital").css("color","green")

}else {
	$("#capital").css("color","red")
}


if( $("#pass").val().match(numbers) ){

	$("#number").css("color","green")

}else {
	$("#number").css("color","red")
}

if ($("#pass").val().length >= 8) {

	$("#length").css("color","green")
}else {
	$("#length").css("color","red")
}


})


 


$(document).ready(function(){

	$(".black").css("display","none");

})




// hover Oo

  // $(document).ready(function () {
  //   	 var hover_focus = false ;
  //       $("#menu_pop2").click(function () {
  //           $('.select_menu_dropdown2').toggleClass('for_dropdown');
  //       })

		//  $("#menu_pop2").on("mouseover",function(){
		//     	hover_focus = true;
		//     })
		//      $("#menu_pop2").on("mouseout",function(){
		//     	hover_focus = false ;
		//     })
		//     $(document).click(function() {
		//         if(!hover_focus) {
		//               $('.select_menu_dropdown2').removeClass('for_dropdown');             
		//         }
		//     }) ;


  //   });



var surce;
var curr;

$(".img_box").each(function(index){
	$(this).click(function(){
	curr = index;
	surce = $(".img_box").eq(curr).find("img").attr("src");
	$(".modal-body img").attr("src",surce);
	
	})
})

$("#right").click(function(){

	if (curr == $(".img_box").length) {
		curr = -1;
	}
	surce = $(".img_box").eq(curr +1).find("img").attr("src");
	$(".modal-body img").attr("src",surce);
	curr++;
})

$("#left").click(function(){


	if (curr == 0) {
		curr = $(".img_box").length;
	}
	surce = $(".img_box").eq(curr -1).find("img").attr("src");
	$(".modal-body img").attr("src",surce);
	curr--;

})




// zoom

$('.jzoom').jzoom({bgColor: "#222"});


 var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();






$(".imgs").on("click","img",function(){

	var surce = $(this).attr("src")


	$(".jzoom img").attr("src",surce);


})





///


$(document).ready(function(){

	var k = setInterval(function(){
	var w = $(".wraper").width();
	var wP = $("#wrapp").width();
	var calc = Math.floor(w / wP * 100) 
	$(".wraper").text(calc + "%")
		if (calc == 100) {
			clearInterval(k)
		}
	},20)

})



// $(".bg_test").after().css("background-size","100% 100%")

$('.bg_test').after().css('transform', 'scale(1)');


$('.bg_test').addClass("JS");