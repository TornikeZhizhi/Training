


$(window).ready(function(){


	// function classRemove(){
	// 	$(".div").removeClass("height_120");	
	// 	$(".div").removeClass("height_90");	
	// 	$(".div").removeClass("height_60");	
	// 	$(".div").removeClass("height_30");	
	// 	$(".div").removeClass("height_0");	
	// }



	// $(".div").eq(0).mouseenter(function(){
	// 	classRemove()
	// 	$(this).addClass("height_120")
	// 	$(".div").eq(1).addClass("height_90");	
	// 	$(".div").eq(2).addClass("height_60");	
	// 	$(".div").eq(3).addClass("height_30");	
	// 	$(".div").eq(4).addClass("height_0");	

	// })


	// $(".div").eq(1).mouseenter(function(){
	// 	classRemove()
	// 	$(this).addClass("height_120")
	// 	$(".div").eq(0).addClass("height_90");	
	// 	$(".div").eq(2).addClass("height_60");	
	// 	$(".div").eq(3).addClass("height_30");	
	// 	$(".div").eq(4).addClass("height_0");	

	// })

	// $(".div").eq(2).mouseenter(function(){
	// 	classRemove()
	// 	$(this).addClass("height_120")
	// 	$(".div").eq(0).addClass("height_60");	
	// 	$(".div").eq(1).addClass("height_90");	
	// 	$(".div").eq(3).addClass("height_90");	
	// 	$(".div").eq(4).addClass("height_90");	

	// })

	// $(".div").eq(3).mouseenter(function(){
	// 	classRemove()
	// 	$(this).addClass("height_120")
	// 	$(".div").eq(0).addClass("height_0");	
	// 	$(".div").eq(1).addClass("height_30");	
	// 	$(".div").eq(2).addClass("height_60");	
	// 	$(".div").eq(4).addClass("height_90");	

	// })

	// $(".div").eq(4).mouseenter(function(){
	// classRemove()
	// 	$(this).addClass("height_120")
	// 	$(".div").eq(0).addClass("height_0");	
	// 	$(".div").eq(1).addClass("height_30");	
	// 	$(".div").eq(2).addClass("height_60");	
	// 	$(".div").eq(3).addClass("height_90");	

	// })	


// 			$('.wrap .div').each(function(i){
// 				 $(this).mouseenter(function(){
// 				 	$('.wrap .div').attr('class', 'div');
//                         $('.div').eq(i).addClass('test5')
//                        let test = i
//                        let test2 = i
//                         	console.log( $('.wrap .div').length,'sjhomovediii', i)
//                         	for(var j = $('.wrap .div').length-1 ; j >=$('.wrap .div').length - i; j--) {
//                            test--
//                         		 $('.div').eq(test).addClass('test'+ j)
//                         	}
//                         	for(var j = $('.wrap .div').length-1 ; j >= i; j--) {
//                            test2++
//                         		 $('.div').eq(test2).addClass('test'+ j)
//                         	}
// 				 })
// 			})		

 })






$(window).on("load", function(){

var x = $(window).width()/2.5
var y = $(window).width()/5.2

// console.log(x + " dsa" + y)

$(".anime").css({"transform":"translate("+x+"px,"+ -y +"px)"})
$(".anime2").css({"transform":"translate("+ 0 +"px,"+ y +"px)"})
$(".anime3").css({"transform":"translate("+ -x+"px,"+ -y +"px)"})




})




$(window).on("load",function(){

var x =$(window).width()


	if ($(window).width() > 425) {


	$(".idd").click(function(){
		$(".main_bg").removeClass("active")
		$(".dropdown").removeClass("deactive")
		})



	$(".idd2").click(function(){
		$(".main_bg").addClass("active")
		$(".dropdown").addClass("deactive")
		})
	}

	if ($(window).width() < 425) {

		$(".idd2").click(function(){
		$(".main_bg").css({
			"margin-left" : ""+x+"px"
		});

		$(".dropdown").css({
			"width" : ""+x+"px",
			"margin-left" : "0px"
		})
	})



		$(".idd").click(function(){
		$(".main_bg").css({
			"margin-left" : "0px"
		});
		$(".dropdown").css({
			"width" : ""+x+"px",
			"margin-left" : ""+-x+"px"
		})
	})
	
	}

})






// $(".img_box").click(function(){


// var surce = $(this).find("img").attr("src")
// $(".modal-body img").attr("src",surce)


// })


var surce;
var curr;

$(".img_box").each(function(index){
	$(this).click(function(){
	curr = index;
	// console.log(curr)	
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