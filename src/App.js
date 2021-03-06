import React from "react";
import './App.css';
import PostMessages from './components/postMessages';
import { Provider } from "react-redux";
import {store} from "./actions/store";
import {Container, Typography,AppBar} from "@material-ui/core"
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";


function App() {
  return (
    <Provider store={store}>
      <Container maxwidth="lg" > 
       <AppBar position="static" color="inherit">
         <Typography
         variant="h2"
         align="center">
           POSTBOX
         </Typography>

         
       </AppBar>
      <PostMessages />
      <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
      </Container>
    
   </Provider>
  );
}

export default App;
