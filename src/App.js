import React,{Component} from "react"
import PageContent from "./app/PageContent"
import Footer from "./app/Footer"
import Sidemenu from "./app/Sidemenu"


export default class App extends Component{
  render(){
    return (
     <div className="nav-md">
        <div className="container body">
        <div className="main_container">
          <div className="col-md-3 left_col">
            <Sidemenu/>
          </div>
          <PageContent></PageContent>
          <Footer></Footer>
        </div>
        </div>
     </div>
    )
  }
}