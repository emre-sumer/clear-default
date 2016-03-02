/**
 * @author emre
 */
(function( $ ){
	$.fn.clearDefault = function(){
	return this.each(function(){
		var _this = $(this)
	    ,defaultValue = _this.val();
	_this.focus(function(){
		if (_this.val() == defaultValue) _this.val("");
	});
	_this.blur(function(){
		if (_this.val() == "") _this.val(defaultValue);
		});
	});
	};
})( jQuery );