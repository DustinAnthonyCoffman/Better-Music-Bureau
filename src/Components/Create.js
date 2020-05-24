import React, {Component} from 'react';
import axios from 'axios';
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
        console.log(`Form submitted:`);
        console.log(`Review title: ${this.state.title}`);
        console.log(`Review release date: ${this.state.releaseDate}`);
        console.log(`Review rating: ${this.state.rating}`);
        console.log(`Review artist: ${this.state.artist}`);
        console.log(`Review: ${this.state.review}`);

        const newReview = {
            title: this.state.title,
            releaseDate: this.state.releaseDate,
            rating: this.state.rating,
            artist: this.state.artist,
            review: this.state.review
        }

        axios.post('http://localhost:4000/reviews/add', newReview)
            .then(res => console.log(res.data));
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
                        <label>Title:</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Release Date:</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.releaseDate}
                                onChange={this.onChangeReleaseDate}
                                />
                    </div>
                    <div className="form-group">
                        <label>Rating:</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.rating}
                                onChange={this.onChangeRating}
                                />
                    </div>
                    <div className="form-group">
                        <label>Artist:</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.artist}
                                onChange={this.onChangeArtist}
                                />
                    </div>
                    <div className="form-group">
                        <label>Review:</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.review}
                                onChange={this.onChangeReview}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Create Review" />
                    </div>
                </form>
            </div>
      
        )
    }
}


