document.write("Here is my js code");

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
      document.getElementById("content-pane").innerHTML='<object type="text/html" data="src/html/home_content.html"></object>';
    break;
    case DEMO:
      document.getElementById("content-pane").innerHTML='<object type="text/html" data="src/html/demo_content.html"></object>';
    break;

  }
  console.log("updated");
}

//update();
