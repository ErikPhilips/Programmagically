console.log("DocWriteFixup.js::start");
var _$_write= document.write;
  document.write = (content) => {
    console.log(document.currentScript);
    var $script = $(document.currentScript);

    console.log(content);
    var $content = $(content);

    $content.insertAfter($script);
  };
$("#test").append("<div>Test2</div>");
$("#test").insertAfter("<div>Test3</div>");
console.log("DocWriteFixup.js::end");
