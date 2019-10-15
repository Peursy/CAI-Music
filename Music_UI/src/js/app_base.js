const HOME = 0;
const DEMO = 1;

var current_content_pane = HOME;

function change_content_pane (content){
  current_content_pane = content;
  update();
}

function update(){
  switch (current_content_pane) {
    case HOME:
      document.getElementById("content-pane").innerHTML='<object class="center" type="text/html" data="src/html/home_content.html" style="width:100%; height:100%;"></object>';
    break;
    case DEMO:
      document.getElementById("content-pane").innerHTML='<object class="center" type="text/html" data="src/html/demo_content.html" style="width:100%; height:100%;"></object>';
    break;

  }
  console.log("updated");
}

//update();
