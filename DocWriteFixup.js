console.log("DocWriteFixup.js::start");
var _$_write= document.write;
  document.write = (content) => {
    //console.log(document.currentScript);
    var $script = $(document.currentScript);
    var $parent = $script.parent();
    console.log($parent);

    //console.log(content);
    //var $content = $(content);

    //$content.insertAfter($script);
    $(content).insertAfter($script);
  };
console.log("DocWriteFixup.js::end");
