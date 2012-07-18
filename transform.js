var tTransform = (function(){
	return {
	    getTransformValue: function(conf)
	    {
	        var transform_value = 'translate3d( ' + conf['dx'] + 'px, ' + conf['dy'] + 'px, ' + conf['dz'] + 'px )' +
	            ' rotate3d( ' + conf['v1'] + ', ' + conf['v2'] + ', ' + conf['v3'] + ', ' + conf['angle'] + ' )' +
	            ' scale3d( '+ conf['scaleX'] +', '+ conf['scaleY'] +', '+ conf['scaleZ'] +')';
	        return transform_value;
	    },

	    transform: function(_jqueryObject, config)
	    {
	        var defaults = {
	            dx: 0,
	            dy: 0,
	            dz: 0,
	            v1: 0,
	            v2: 0,
	            v3: 0,
	            angle: 0,
	            scaleX: 1,
	            scaleY: 1,
	            scaleZ: 1
	        };
	        var conf = $.extend(defaults, config);

	        transform_value = _hLanding.animations.getTransformValue(conf);
	        _hLanding.animations.assignTransformation(_jqueryObject, transform_value);
	    },

	    assignTransformation: function(_jqueryObject, transform_value)
	    {
	        _jqueryObject.css({
	              '-webkit-transform': transform_value,
	                 '-moz-transform': transform_value,
	                  '-ms-transform': transform_value,
	                   '-o-transform': transform_value,
	                      'transform': transform_value
	        });
	    }
	}
}());