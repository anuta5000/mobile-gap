/**
 * ...
 * @author Anna
 */

 $(window).load(function(){

			
		i18n.init(function(err, t) {
		  // translate nav
		  $("#main").i18n();
		  $("#login").i18n();

		  // programatical access
		  $("#passwordInput").attr("placeholder", t("password"));
		});
	});
 
