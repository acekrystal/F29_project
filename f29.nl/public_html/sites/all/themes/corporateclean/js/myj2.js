(function ($) {
  Drupal.behaviors.collapsibleTable = {
	 attach: function(settings, content) {
		$('tr.collapsitablesection').toggle(
		function() {
			$(this).nextUntil('tr.collapsitablesection').hide();
		},
		function() {
			$(this).nextUntil('tr.collapsitablesection').show();
      }
    ).click();
   }
  };
})(jQuery);