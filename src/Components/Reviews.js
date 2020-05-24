import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import { Jumbotron } from 'react-bootstrap';

const Review = props => (
    <tr>
        <td>{props.review.title}</td>
        <td>{props.review.releaseDate}</td>
        <td>{props.review.rating}</td>
        <td>{props.review.artist}</td>
        <td>{props.review.review}</td>
        <td>
            <Link to={"/edit/"+props.review._id}>Edit</Link>
        </td>
    </tr>
)



export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {reviews: []};
    }
    componentDidMount() {
        axios.get('http://localhost:4000/reviews/')
            .then(response => {
                this.setState({reviews: response.data});
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    reviewList() {
        return this.state.reviews.map(function(currentReview, i) {
            return <Review review={currentReview} key={i} />;
        });
    }

    render() {
        return (
            <>
            <Jumbotron className='text-center'>
                <h2>Reviews</h2>
            </Jumbotron>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Release Date</th>
                            <th>Rating</th>
                            <th>Artist</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.reviewList()}
                    </tbody>
                </table>
            </>
        )
    }
}
