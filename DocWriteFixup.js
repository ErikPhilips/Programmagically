console.log("DocWriteFixup.js::start");
var _$_write= document.write;
  document.write = (content) => {
    var $script = $(document.currentScript);
    var src = $script.prop("src");
    var selector = "script[src='" + src + "']";
    console.log(selector);
    var $script = $(selector).filter((i,e)=>{ return !$(e).parent().is('head');});
    console.log($script);
  };
console.log("DocWriteFixup.js::end");
