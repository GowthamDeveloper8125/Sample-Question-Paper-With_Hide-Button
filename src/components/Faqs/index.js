// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {showButton: false}

  showAnswer = id => {
    console.log(id)
    this.setState(prevState => ({showButton: !prevState.showButton}))
  }

  render() {
    const {faqsList} = this.props
    const {showButton} = this.state

    return (
      <div className="MainContainer">
        <div className="subContainer">
          <h1 className="Heading">FAQs</h1>
          <li className="List">
            {faqsList.map(eachItem => (
              <FaqItem
                faqsList={eachItem}
                showButton={showButton}
                showAnswer={this.showAnswer}
                key={eachItem.id}
              />
            ))}
          </li>
        </div>
      </div>
    )
  }
}

export default Faqs
