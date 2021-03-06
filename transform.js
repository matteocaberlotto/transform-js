/**
 * Example:
 * tTransform($("#myLogo"), {
 *  dx: 100,
 *  dy: 100,
 *  dz: -1000,
 *  scaleX: 0.8,
 *  scaleY: 0.8,
 *  scaleZ: 0.8
 * });
 * will translate the element to the point (100, 100, -1000), will apply no rotation
 * and scale to 0.8 (in all directions).
 */

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

	        transform_value = tTransform.getTransformValue(conf);
	        tTransform.assignTransformation(_jqueryObject, transform_value);
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