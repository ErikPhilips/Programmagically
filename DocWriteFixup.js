console.log("DocWriteFixup.js::start");
var _$_write= document.write;
  document.write = (content) => {
    var $script = $(document.currentScript);
    var src = $script.prop("src");
    var selector = "script[src='" + src + "']";
    console.log(selector);
    var $script = $(selector).filter((i,e)=>{ return !$(e).parent().is('head');});
    var $wrapper = $script.data('js-script-tag-wrapper');
    if ($wrapper === undefined){
      $wrapper = $('<div></div>');
      $script.data('js-script-tag-wrapper', wrapper);
      $script.wrap($wrapper);
    }
    $wrapper.append(content);
  };
console.log("DocWriteFixup.js::end");
