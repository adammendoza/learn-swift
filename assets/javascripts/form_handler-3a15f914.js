(function(){var t,i=function(t,i){return function(){return t.apply(i,arguments)}};t=function(){function t(){this._bindRequiredInputFocus=i(this._bindRequiredInputFocus,this),this._bindSubmitClicks=i(this._bindSubmitClicks,this),this._bindSubmitClicks(),this._bindRequiredInputFocus()}var n,r,u;return r=$("[type=submit]"),n=$("form"),u="_oops",t.prototype._bindSubmitClicks=function(){return r.on("click",this._submitForm)},t.prototype._bindRequiredInputFocus=function(){return $("input.required").on("focus",this._resetInput)},t.prototype._resetInput=function(t){var i;return i=$(t.target),i.removeClass(u)},t.prototype._submitForm=function(t){var i,r,e,o,s;return t.preventDefault(),$("."+u).removeClass(u),s=!0,i=$(t.target),e=i.closest(n),o=e.find(".required"),r=e.find(".email"),o.each(function(){var t;return t=$(this).val().trim(),""===t?($(this).addClass(u),s=!1):void 0}),s?(r.each(function(){var t,i;return i=$(this).val().trim(),t=/^([\w.-]+)@([\w.-]+)\.([a-zA-Z.]{2,10})$/i,i.match(t)?void 0:($(this).addClass(u),s=!1)}),s?e.submit():void 0):void 0},t}(),App.FormHandler=t,$(function(){return $("form").length>=1?new t:void 0})}).call(this);