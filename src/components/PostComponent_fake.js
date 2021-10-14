import React, { Component } from 'react';

class PostComponent extends Component {


    //Fake API
    data = [
        { id: 1, body: "Post one", author: "Mohamed hashir" },
        { id: 2, body: "Post two", author: "Mohamed harsan" },
        { id: 3, body: "Post three", author: "Mohamed haspan" }
    ];

    state = {
        error: null,
        isLoaded: false,
        items: []
    }

    componentDidMount() {
        //API CALL
        if (this.data.length === 0) {
            this.setState({
                isLoaded: true,
                error: "No data available"
            });
        } else {
            this.setState({
                isLoaded: true,
                items: this.data
            });
        }
    }

    render() {

        const error = this.state.error;
        const isLoaded = this.state.isLoaded;
        const items = this.state.items;

        if (error) {
            return (
                <h3>Error : Could not load the items</h3>
            );
        } else if (!isLoaded) {
            return (
                <h3>Loading...</h3>
            );
        } else {
            return (
                <div className="conatiner">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">

                            {items.map(item =>

                                <div key={item.id} className="card mt-3">
                                    <div className="card-header">
                                        <h6>{item.author}</h6>
                                    </div>
                                    <div className="card-body">
                                        {item.body}
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-primary">Like</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default PostComponent;