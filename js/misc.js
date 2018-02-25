function pairTransitions(selector, from, to) {
  $(selector).click(function() {
    alert(selector);
    $(from).hide();
    $(to).show();
  });
}
pairTransitions(".reserve", ".main-container", ".creation-container");
pairTransitions(".c-lab", ".question-1-block", ".b-lab");
pairTransitions(".c-cart", ".question-1-block", ".b-cart");

function setRevealEffect(a, b, c, d, e) {
  $(a).click(function() {
    $(b).toggle();
  });
  $(e).click(function() {
    var text = $(this).html();
    $(a).html(text);
    $(c).hide();
  });
  $(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass(d)) $(c).hide();
  });
}
setRevealEffect(".month-selector", "#monthSelector", ".month-content", "time-month-selection", ".month-content .question-label");
setRevealEffect(".day-selector", "#daySelector", ".day-content", "time-day-selection", ".day-content .question-label");
setRevealEffect();