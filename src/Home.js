import { Component } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";


export default class Home extends Component {
    render () {
        return (
            <div>
                 <div class="container"><Header/> </div>
                 <Body/> 
            </div>
        );
    }
}