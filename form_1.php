if (typeof wg_ffnlj == "undefined") {







	var scripts = [
		'https://hillvitalinternational.com/webgalamb/static/js/jquery-3.3.1.min.js',
		'https://hillvitalinternational.com/webgalamb/static/plugins/stepy/jquery.stepy.js',
		'https://hillvitalinternational.com/webgalamb/static/plugins/jquery.validate.min.js'
	];
	var src;
	var script;
	var pendingScripts = [];
	var firstScript = document.scripts[0];

	function stateChange() {
		var pendingScript;
		console.log(1);
		while (pendingScripts[0] && pendingScripts[0].readyState == 'loaded') {
			pendingScript = pendingScripts.shift();
			pendingScript.onreadystatechange = null;
			firstScript.parentNode.insertBefore(pendingScript, firstScript);
		}
	}

	while (src = scripts.shift()) {
		if ('async' in firstScript) { // modern browsers
			script = document.createElement('script');
			script.async = false;
			script.src = src;
			document.head.appendChild(script);
		} else if (firstScript.readyState) {
			script = document.createElement('script');
			pendingScripts.push(script);
			script.onreadystatechange = stateChange;
			script.src = src;
		} else {
			document.write('<script src="' + src + '" defer></'+'script>');
		}
	}


	var tid = setInterval( function () {
		if ( document.readyState !== 'complete' ) 
			return;
		clearInterval( tid );       
		myJQueryCode_7aadekkckk4238();
	}, 100 );


	function getParentUrl() {
		var isInIframe = (parent !== window),
			parentUrl = null;
		
		if (isInIframe) {
			parentUrl = document.referrer;
		} else {
			parentUrl = document.URL;
		}

		return parentUrl;
	}
} else {
	var tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) return;
    clearInterval( tid );       
		myJQueryCode_7aadekkckk4238();
	}, 100 );
}

var wg_ffnlj = true;

function myJQueryCode_7aadekkckk4238() {
	
		
		
	$(document ).ready(function() {
		$("#form_box_7aadekkckk4238").show();
		
		$('#form_7aadekkckk4238').validate({
			errorElement: "div",
			wrapper: "div",
			errorPlacement: function(error, element) {
				offset = element.offset();
				error.insertAfter(element);
				error.addClass('er');
				 
			},
			rules: {
					'subscr': {required: true, email: true}
			}, messages: {
					'subscr': {required: "A mező kitöltése kötelező!", email: "Hibás a megadott e-mail cím!"}
			}
		});
	});
	
	// date format validate (yyyy-mm-dd)
	$.validator.addMethod("wgDate", function(value, element) {
		var bits = value.match( /([0-9]+)/gi ), str;
		if ( ! bits )
			return this.optional(element) || false;
		str = bits[ 0 ] + '-' + bits[ 1 ] + '-' + bits[ 2 ];
		return this.optional(element) || !/Invalid|NaN/.test(new Date( str ));
	});	

	$('#form_7aadekkckk4238').submit(function() {
		var input = $("<input>").attr("type", "hidden").attr("name", "http_referer").val( getParentUrl() );
		$('#form_7aadekkckk4238').append($(input));
	});

}


var WGForm7aadekkckk4238={
    options:{
        form:'7aadekkckk4238',
        style:'<style>#form_box_7aadekkckk4238 * {box-sizing: border-box; -moz-box-sizing: border-box;-webkit-box-sizing: border-box;}#form_box_7aadekkckk4238 img { max-width: 100%; }#form_box_7aadekkckk4238 { margin: 10px auto;top: 0px;left: 0px;text-align: center;padding: 0px;background-color: #ffffff;border-width: 2px;border-style: solid;border-color: #ffffff;-webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px;width: 290px;min-width: 260px;max-width: 100%;box-sizing: border-box;-moz-box-sizing: border-box; -webkit-box-sizing: border-box;color: #000000;font-family: Arial, Helvetica, sans-serif;;font-size: 12px;font-weight: normal;font-style: normal;}#form_box_7aadekkckk4238 .er { padding: 0 14px;xwidth: 100%;max-width: 100%;color: #ff3300; font-family: arial, tahoma; font-size: 11px; text-align: left; margin: 0px auto 4px 0px;}#form_box_7aadekkckk4238 .field { width: 100%; display:inline-block; max-width: 100%;}#form_box_7aadekkckk4238 label.wg_label { width: px; max-width: 100%; padding-right: 10px; text-align: right; display:inline-block; }#form_box_7aadekkckk4238 .checkbox_label { display: inline-block; padding-right: 6px; }#form_box_7aadekkckk4238 input[type=text].error, #form_box_7aadekkckk4238 select.error, #form_box_7aadekkckk4238 textarea.error { border-color: #ff3300; }#form_box_7aadekkckk4238 label.wg_label, #form_box_7aadekkckk4238 .checkbox_label {display: inline-block; text-align: right; float: left;color: #000000;font-family: Arial, Helvetica, sans-serif;;font-size: 12px;font-weight: normal;font-style: normal;}#form_box_7aadekkckk4238 .checkbox_label {min-width: 0px;max-width: 100%;text-align: left; font-family: Arial, Helvetica, sans-serif;;font-size: 12px;}#form_box_7aadekkckk4238 input[type=text], #form_box_7aadekkckk4238 select, #form_box_7aadekkckk4238 textarea.field {padding: 14px;background-color: #ffffff;border-width: 3px;border-style: solid;border-color: #A9A9A9;color: #A9A9A9;font-family: Arial, Helvetica, sans-serif;;font-size: 12px;-webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px;width: 100%;max-width: 100%;font-weight: normal;font-style: normal;}#form_box_7aadekkckk4238 .placeholder_label {text-align: left; color: #000000;font-family: Arial, Helvetica, sans-serif;;font-size: 12px;font-weight: normal;font-style: normal;margin-bottom: 4px;}#form_box_7aadekkckk4238 textarea {height: 120px;}#form_box_7aadekkckk4238 .clearfix {margin-bottom: 14px;clear: both;height: 4px;}#form_box_7aadekkckk4238 label.wg_label {display: none;}#form_box_7aadekkckk4238 label.checkbox_label {text-align: left;}#form_box_7aadekkckk4238 .field {}#form_box_7aadekkckk4238 #sub_7aadekkckk4238 {padding: 5px;background-color: #f26522;border-width: 3px;border-style: solid;cursor: pointer;border-color: #f26522;color: #ffffff;font-family: Arial, Helvetica, sans-serif;;font-size: 16px;width: 100%;max-width: 100%;-webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px;font-weight: bold;font-style: normal;text-align: center;white-space: normal;-webkit-appearance: none;}#form_box_7aadekkckk4238 textarea, #form_box_7aadekkckk4238 .field_top { vertical-align: top; }#form_box_7aadekkckk4238 input[name=email_re] { display: none; }@media screen and (max-width: 460px) {#form_box_7aadekkckk4238 .field {width: 100% !important;display: block;text-align: left;}}</style>',
        tpl:'<div id="form_box_7aadekkckk4238"><form id="form_7aadekkckk4238" method="post" action="https://hillvitalinternational.com/webgalamb/subscriber.php?g=24&f=6ef76ac3a7" target="_self"><div class="clearfix" style="height: 0px;"></div><div style="margin: 15px 0;"></div><input type="hidden" name="form_id" value="7aadekkckk"><input type="text" name="email_re" value=""><label class="wg_label" for="7aadekkckk4238subscr">E-mail cím:<span style="color: #ff3300; margin-right:-6px;font-size: 12px;">*</span></label><input type="text" name="subscr" id="7aadekkckk4238subscr" value="" class="field" placeholder="E-mail cím"  /><div class="clearfix"></div><input name="sub" id="sub_7aadekkckk4238" type="submit" value="INGYENES LETÖLTÉS" class="field field-b" /><div class="clearfix" style="height: 0px;"></div></form></div>',
        domain:'hillvitalinternational.com'
    },
    
    init:function() {
        var self=this;
        document.write(self.options.style);
        document.write(self.options.tpl);
    }, 
}
WGForm7aadekkckk4238.init();


