import {Component} from 'react';
import {Button} from 'reactstrap';

export default class LikeButton extends Component {
    state = {
        liked: false
    }

    toggle() {
        let liked = !this.state.liked;
        this.setState({liked})
    }

    render() {
        return (
            <Button onClick={() => this.toggle()}>
                {this.state.liked === false ? ("Like") : ("Unlike")}
            </Button>
        )
    }
}