resize_player = function(){
  console.log(document.getElementById("frame"));
  document.getElementById("frame").contentWindow.document.getElementsByClassName("viewer")[0].style="zoom:2 !important;";
}
resize_player();
