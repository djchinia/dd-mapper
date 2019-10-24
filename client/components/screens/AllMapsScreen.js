import React, {Component} from 'react'
import {connect} from 'react-redux'
import {MapCard} from '../'
import {Row, Col} from 'react-materialize'

class AllMapsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMapImages: [
        {
          id: 1,
          imageUrl:
            'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
        },
        {
          id: 2,
          imageUrl:
            'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
        },
        {
          id: 3,
          imageUrl:
            'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
        },
        {
          id: 4,
          imageUrl:
            'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
        },
        {
          id: 5,
          imageUrl:
            'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_LowRes.jpg'
        }
      ]
    }
  }

  render() {
    // const {email} = this.props
    return (
      <div>
        <Row>
          {this.state.allMapImages && (
            <div>
              {this.state.allMapImages.map(mapImage => (
                <div key={mapImage.id}>
                  <Col m={4} s={12}>
                    <MapCard mapImage={mapImage} />
                  </Col>
                </div>
              ))}
            </div>
          )}
        </Row>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(AllMapsScreen)