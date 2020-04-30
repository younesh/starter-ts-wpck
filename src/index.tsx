
// import styles 
import "./styles/main.scss";

// import atomic components ... 
import { initButtons } from "./atomic/1-atoms/buttons/_buttons";
import { initApp } from "./app";
   
/* call atoms ..  */
initButtons();
initApp();
 