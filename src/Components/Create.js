import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';


export default class Create extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            title: '',
            releaseDate: 0,
            rating: 0,
            artist: '',
            review: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeReleaseDate(e) {
        this.setState({
            releaseDate: e.target.value
        });
    }

    onChangeRating(e) {
        this.setState({
            rating: e.target.value
        });
    } 

    onChangeArtist(e) {
        this.setState({
            artist: e.target.value
        });
    }
    onChangeReview(e) {
        this.setState({
            review: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        
        //submition logic, WE WILL DO THIS LATER!!!!!!!!!


        console.log(`Form submitted:`);
        console.log(`Review title: ${this.state.title}`);
        console.log(`Review release date: ${this.state.releaseDate}`);
        console.log(`Review rating: ${this.state.rating}`);
        console.log(`Review artist: ${this.state.artist}`);
        console.log(`Review: ${this.state.review}`);
        
        this.setState({
            title: '',
            releaseDate: 0,
            rating: 0,
            artist: '',
            review: ''
        })
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                      <Jumbotron className='text-center'>
                <h2>Create</h2>
            </Jumbotron>
                <h3>Create New Review</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Review:</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.review}
                                onChange={this.onChangeReview}
                                />
                    </div>
                </form>
            </div>
      
        )
    }
}


