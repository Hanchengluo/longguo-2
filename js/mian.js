// tab
$(function() {
  function tabs(tabTit, on, tabCon) {
    $(tabCon).each(function() {
      $(this).children().eq(0).show();
    });
    $(tabTit).each(function() {
      $(this).children().eq(0).addClass(on);
    });
    $(tabTit).children().hover(function() {
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).show().siblings().hide();
    });
  }
  tabs(".tab-hd", "active", ".tab-bd");
});
// marquee
$(function() {
    $('#wrap7').marquee({
      auto: true,
      interval: 2000,
      showNum: 3,
      stepLen: 3,
      type: 'vertical'
    });
  })
// tip
$('#demo-tip-twitter').poshytip({
  className: 'tip-twitter',
  showTimeout: 1,
  alignTo: 'target',
  alignX: 'center',
  offsetY: 5,
  allowTipHover: false,
  fade: false,
  slide: false
});
// form tip
$('#demo-form-name').poshytip({
  className: 'tip-yellowsimple',
  showOn: 'focus',
  alignTo: 'target',
  alignX: 'right',
  alignY: 'center',
  offsetX: 5,
  showTimeout: 100
});