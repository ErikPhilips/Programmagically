console.log("DocWriteFixup.js::start");
var _$_write= document.write;
  document.write = (content) => {
    //console.log(document.currentScript);
    //var $script = $(document.currentScript);

    //console.log(content);
    //var $content = $(content);

    //$content.insertAfter($script);
    $("<div>Dyn Content</div>").insertAfter("#test5");
  };
console.log("DocWriteFixup.js::end");
