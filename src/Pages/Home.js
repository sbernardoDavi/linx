import { Component } from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";


export default class Home extends Component {
    render () {
        return (
            <div>
                 <div> <Header/> </div>
                 <div> <Body/>  </div> 
                 <div> <Cards/> </div>
            </div>

        );
    }
}