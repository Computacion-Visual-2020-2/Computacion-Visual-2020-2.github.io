import React from "react"
import PropTypes from "prop-types"

class Team extends React.Component {
    constructor(props) {
        super(props)
        this.loadImage(props.img)
        this.state = { img: undefined }
    }

    async loadImage(path) {
        const img = await import(`../../images/${path}`);
        this.setState({ img: img.default })
    }

    render() {
        return <>
            { this.state.img && 
                <span className="image main">
                    <img src={this.state.img} alt="" />
                </span> 
            }
            
            {this.props.paragraphs && this.props.paragraphs.map(paragraph => 
                <p>{ paragraph }</p>
            )}

            <ul className="icons">
                <li>
                    <a href={this.props.github} className="icon fa-github">
                        <span className="label">GitHub</span>
                    </a>
                </li>
            </ul>
        </>
    }
}

Team.propTypes = {
    img: PropTypes.string,
    paragraphs: PropTypes.array,
    github: PropTypes.string
}

export default Team