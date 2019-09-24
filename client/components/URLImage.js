import React, {Component} from 'react'
import {render} from 'react-dom'
import {Image} from 'react-konva'

// modififed from konva
export default class URLImage extends Component {
  state = {
    image: null
  }
  componentDidMount() {
    this.loadImage()
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage()
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad)
  }
  loadImage() {
    this.image = new window.Image()
    this.image.src = this.props.src
    this.image.width = window.innerWidth
    this.image.height = window.innerHeight
    this.image.addEventListener('load', this.handleLoad)
  }
  handleLoad = () => {
    this.setState({
      image: this.image
    })
  }
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        image={this.state.image}
        ref={node => {
          this.imageNode = node
        }}
      />
    )
  }
}
