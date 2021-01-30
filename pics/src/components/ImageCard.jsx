import React, { Component } from 'react'

class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }
    

    render() {
        const { urls, alt_description } = this.props.image;

        return (
            <div>
                <img ref={this.imageRef}
                     src={urls.regular} 
                     alt={alt_description}
                />
            </div>
        )
    }
}

export default ImageCard;