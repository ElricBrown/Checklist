$('.counter').text(' ');

var updateCount = function() {
	var countChecks = $("input[name='checked']:checked").length;

	if (countChecks > 0) {
		$(".counter").text(countChecks + '/27');
	} else {
		$(".counter").text('0/27');
	}
};

$("input:checkbox").on("change", function() {
			updateCount();
		});

var text = $(updateCount()).val();
  localStorage.setItem('checked', text);
  localStorage.getItem('checked');