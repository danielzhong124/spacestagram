import {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container} from 'reactstrap';
import axios from 'axios';

export default class ImageCollection extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=OTTlYHDCukPedTr9h24abVQM7wPkc5ZS5HgMmUAj&start_date=2022-01-01&thumbs=True")
        .then(res => {
            const images=res.data;
            this.setState({images});
        })
    }

    render() {
        return (
            <Container>
                {
                    this.state.images.map(image =>
                        <Card key={image.date}>
                            {image.media_type === "image" ? (
                                <CardImg top src={image.url} alt={image.title} width="100%" />
                            ):(<CardImg top src={image.thumbnail_url} alt={image.title} width="100%" />)}
                            <CardBody>
                                <CardTitle tag="h6">{image.title}</CardTitle>
                                <CardSubtitle className="mb-2 text-muted">{image.date}</CardSubtitle>
                                <CardText>{image.explanation}</CardText>
                            </CardBody>
                        </Card>
                    )
                }
            </Container>
        )
    }
}