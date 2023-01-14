import React from "react";

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isloaded: true
        };
    }

    async componentDidMount(){
        setTimeout(() => {
        }, 1000);
    }

    render(){
        return(<div className="container-fluid">
                    <div className="masthead text-white text-center sub-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 mx-auto">
                                <h1 className="mb-5 maintitle">Homepage</h1>
                                <a className="btn btn-success" href="/register">Success</a>
                                </div>
                                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="features-icons text-center sub-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    Page Content
                                </div>        
                            </div>
                        </div>
                    </div>
               </div>);
    }
}
export default Homepage;