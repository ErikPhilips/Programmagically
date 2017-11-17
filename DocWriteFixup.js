document.write = (content) => {
  var $script = $(document.currentScript);
  var src = $script.prop("src");
  var selector = "script[src='" + src + "']";
  var $script = $(selector).filter((i,e)=>{ return !$(e).parent().is('head');});
  var $wrapper = $script.data('js-script-tag-wrapper');
  if ($wrapper === undefined){
    $wrapper = $('<div class="js-wrapper"></div>');
    $script.wrap($wrapper);
    $wrapper = $script.parent();
    $script.data('js-script-tag-wrapper', $wrapper);
  }
  _wrap = $wrapper;
  $wrapper.append(content));
};
