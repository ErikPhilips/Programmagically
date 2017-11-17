console.log("DocWriteFixup.js::start");
var _wrap;
var _$_write= document.write;
  document.write = (content) => {
    console.log("document.write");
    var $script = $(document.currentScript);
    var src = $script.prop("src");
    var selector = "script[src='" + src + "']";
    console.log(selector);
    var $script = $(selector).filter((i,e)=>{ return !$(e).parent().is('head');});
    console.log($script);
    var $wrapper = $script.data('js-script-tag-wrapper');
    if ($wrapper === undefined){
      console.log("creating wrapper");
      $wrapper = $('<div class="js-wrapper" style="width: 50px;height:50px;border: 1px solid red;"></div>');
      $script.data('js-script-tag-wrapper', $wrapper);
      $script.wrap($wrapper);
    }
    _wrap = $wrapper;
    console.log($wrapper);
    $wrapper.append($('<div>Start Content1</div>'));
    $("#test5").append($('<div>Start Content2</div>'));
  };
console.log("DocWriteFixup.js::end");
