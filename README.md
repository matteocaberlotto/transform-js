transform-js
============

this requires jQuery

**examples**:

translate to x = 100, y = 100

	tTransform($("#myLogo"), {
	  dx: 100,
	  dy: 100
	});


translate to z -1000 and scale down

	tTransform($("#myLogo"), {
	  dz: -1000,
	  scaleX: 0.8,
	  scaleY: 0.8,
	  scaleZ: 0.8
	});


translate and rotate:

	tTransform($("#myLogo"), {
	  dx: 100,
	  dy: 100
	  v1: 1,
	  v2: 1,
	  angle: 30
	});