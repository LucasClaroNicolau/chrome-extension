document.addEventListener('DOMContentLoaded', function(){
	var checkPage = document.getElementById('botao');
	checkPage.addEventListener('click', function(){
		chrome.tabs.getSelected(null, function(tab){
			var cor = document.getElementById('cor').value;
				chrome.tabs.executeScript({
					code:	'var elementos = document.getElementsByClassName("css-lcopaq");'+
							'for (var element of elementos){'+
								'element.style.background = "'+cor+'";'+
							'};'
				});
		});
	},false);
},false);