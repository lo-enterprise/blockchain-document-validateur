var endpoint = 'api';
Dropzone.autoDiscover = false;
var myDropzone;

function successmultiple(files, message, e) {
    for (i = 0; i < files.length; i++)
        myDropzone.removeFile(files[i]);
    $("#infobox").attr("class", "alert alert-success");
    $("#iconbox").attr("class", "fa fa-check fa-stack-1x fa-inverse");
    $("#msgbox").html(messageValide);
}
function errormultiple(files, message, e) {
    $("#infobox").attr("class", "alert alert-danger");
    $("#iconbox").attr("class", "fa fa-exclamation fa-stack-1x fa-inverse");
    $("#msgbox").html(messageInvalide);
}
$(function() {
  myDropzone = new Dropzone("div#validatezone", {
    url : endpoint + "/validate",
    uploadMultiple: true,
    paramName: "myfiles",
    dictDefaultMessage: dictDefaultMessage,
    dictFallbackMessage:dictDefaultMessage,
    maxFile: 2,
    autoProcessQueue: false,
    successmultiple: successmultiple,
      errormultiple: errormultiple,
      addRemoveLinks: true,
    init: function() {
        this.on("removedfile", function() {
            $("#infobox").attr("class", "alert alert-info");
            $("#iconbox").attr("class", "fa fa-info fa-stack-1x fa-inverse");
            $("#msgbox").html(dictDefaultMessage);
        });
  }
  });
});

function processValidate() {
    myDropzone.processQueue();
}
