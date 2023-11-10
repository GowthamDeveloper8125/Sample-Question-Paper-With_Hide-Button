// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {show: false}

  onClickPlusButton = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  render() {
    const {show} = this.state
    const {faqsList} = this.props
    const {questionText, answerText} = faqsList
    const altValue = show ? 'minus' : 'plus'
    const PlusMinusImages = show
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    return (
      <div className="ListItemMainContainer">
        <div className="QuestionContainer">
          <h1>{questionText}</h1>
          <button
            className="Button"
            type="button"
            onClick={this.onClickPlusButton}
          >
            <img src={PlusMinusImages} alt={altValue} />
          </button>
        </div>

        {show && (
          <div>
            <hr />
            <p>{answerText}</p>
          </div>
        )}
      </div>
    )
  }
}

export default FaqItem
