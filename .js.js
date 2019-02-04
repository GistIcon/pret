<script type="text/javaScript">
	window.addEvent('load',function(){
		cc.options.loadready = true;
	}); 

	window.addEvent('ccfready',function(){
		if(!cc.checkFlashVersion(11)) $('game').set('html','<h2 style="font-size: 14pt;text-align:center;margin:30px;font-family:Tahoma;">War Commander requires Flash Player 11.2 or greater.<br /><a href="http://get.adobe.com/flashplayer/" target="_blank">Click here to download the latest flash player</a></h2>');
		else
		{
			cc.loadGame($('game'),{'gameurl':'https://wc-fb-cdn7.kixeye.com/game/','loaderversion':37859,'gameversion':7,'softversion':37859,'game_width':'0%','game_height':'750'});
			cc.setCounter(0);

					}
	});
	
	var navLayout = new Class({
		NAV_CONST_WIDTH: 838,
		
		layOutElements: function()
		{
			var atg_elements = ["above-game-message","hacker_msg_atg","survey_atg","banner_atg","updating_msg_atg","ie_msg_atg"];
			var winH = window.getSize().y;
			var contentHeight = winH - 40;
			
			for(i = 0; i < atg_elements.length; i++)
			{
				var el = $(atg_elements[i]);
				var size;
				if (el)
				{
					contentHeight -= jQuery("#"+atg_elements[i]).outerHeight(true);
				}
			}

			contentHeight = Math.max(750, contentHeight); //the game must be a minimum of 750 pixels tall
			nb = $('gameswf');
			nb.setProperty("height", contentHeight);
		}
	});
	
	var nl, nb, men;
	window.addEvent('domready', function()
	{
		nl = new navLayout(nb);
	});

	function onChangeLocale()
	{
		var localeVal = $('language-selector').get('value');
		cc.redirect(cc.options.baseurl+'?v_locale='+localeVal);
		return false;
	}
</script>