var _$_write= document.write;
  document.write = (content) => {
    var $script = $(document.currentScript);
    console.log($script);
    var $content = $(content);
    console.log($content);
    $script.insertAfter($content);
  };
$("#test").append("<div>Test2</div>");
$("#test").insertAfter("<div>Test3</div>");
