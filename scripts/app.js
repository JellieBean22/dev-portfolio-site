const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "transcription",
				weight: 8
			}, {
				text: "Python tutoring",
				weight: 9
			}, {
				text: "photography",
				weight: 9
			}, {
				text: "video game testing",
				weight: 9
			}, {
				text: "traditional art",
				weight: 10
			}, {
				text: "voice acting",
				weight: 9
			}, {
				text: "virtual assistance",
				weight: 8
			}, {
				text: "proofreading & editing",
				weight: 10
			}, {
				text: "digital art",
				weight: 11
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 160});
	}

	function displayWordCloud() {
		var count = 0.8;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2600; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a developer.", "love code.", "pay close attention to detail.", "love a challenge!"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#2c918ae0"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
