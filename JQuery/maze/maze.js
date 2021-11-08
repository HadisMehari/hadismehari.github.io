
$(document).ready(function(){
	$(this).css("background-color", "orange");
	var alerted =false;// used to remove multiple alert
	var stclick=false;// stores value to check player clicked start or not
	var stime;// stores value when S is clicked
	var mousecur=false;// stores value of cursor traversing from inside or outside

	$("#start").on({
		mouseover: function () {
			//$(this).css("background-color", "red");
		},
		mouseout: function () {
			$(this).css("background-color", "orange");
		},
		click: function () {
			mousecur=true;
			stclick=true;
			stime=Date.now();
			$("boundary").css("backgroundColor","#eeeeee");

    		if(alerted==true) {
				alerted=false;
		
			}
		}
	});

	$("#end").on({

		mouseover: function () {
			//$(this).css("background-color", "red");
		},
		
		click: function () {
			if(stclick && mousecur){
				stclick = false;
				var etime=Date.now();
				var tgap=etime-stime;
				var tgaps=tgap/parseFloat(1000);
				alert("Yeah!!, You completed in:"+ tgaps+"s");

			}
			else if(stclick)
				alert("No cheating, You moved cursor from outside maze")
			else

				alert("Please, Don't Cheat!!")
			}
	});

	$(".boundary").on({
		mouseover: function () {
			if (stclick) {
				 
				$("div").css("green");
				alert("Sorry!! you lost");
				window.alerted=true;
				stclick= false;

			}
			
			
		}
	,
		mouseout: function (){
			//$("div.#maze div.boundary + div.boundary + div.boundary + div.boundary + div.boundary").css("div.youlose");
		}
	});

	$(".maze").on({
		mouseover: function () {
			//$("div.#maze div.boundary + div.boundary + div.boundary + div.boundary + div.boundary").css("div.youlose");
			mousecur=false;
		}	
	});
});

