import './App.scss';
import React,{Component} from 'react';
import Navigation from "../Navigation/Navigation";
import MainLogo from "../MainLogo/MainLogo";
import WidgetProducts from "../WidgetProducts/WidgetProducts";
import About from "../About/About";
import Contact from "../Contact/Contact";
import PhotoGallery from "../PhotoGallery/PhotoGallery";


class App extends Component{
  render() {
    return(
        <div className={"app__container"}>
        <Navigation/>
        <MainLogo/>

        <WidgetProducts/>
        <About/>
            <PhotoGallery/>
        <Contact/>
        </div>

    )
  }

}
export default App;
