console.log("DocWriteFixup.js::start");
var _$_write= document.write;
  document.write = (content) => {
    //console.log(document.currentScript);
    var $script = $(document.currentScript);
    var src = $script[0].prop("src");
    console.log(src);
    var $parent = $script.parent();
    console.log($parent);
    var selector = "script[src='" + src + "']");
    console.log(selector);
    var $script2 = $(selector);
    console.log($script2);

    //console.log(content);
    //var $content = $(content);

    //$content.insertAfter($script);
    //$(content).insertAfter($script);
    console.log("-------------------------------------");
  };
console.log("DocWriteFixup.js::end");
