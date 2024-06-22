// rcc is the shortcut broiler plate for class component

import { Component } from "react"
import { Section } from "./Section/Section"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Notification } from "./Notification/Notification"

export default class App extends Component {

  state = {
  Good: 0,
  Neutral: 0,
  Bad: 0,
  isClicked: false
  }
  
  render() {
    const options = ['Good', 'Neutral', 'Bad']
    const { Good, Neutral, Bad, isClicked } = this.state

    const countTotalFeedback = () => {
      return Good + Neutral + Bad
    }
    const countPositiveFeedbackPercentage = () => {
      return Math.floor((Good / total) * 100)
    }
    const total = countTotalFeedback()
    const positivePercentage = countPositiveFeedbackPercentage()
    
    const onLeaveFeedback = (option) => {
      
      this.setState(prevValue => ({
        ...prevValue,
        [option]: prevValue[option] + 1,
        isClicked: true
      }))
    }
    return (
      // <div>
      //   <Section title="" options={options} onLeaveFeedback={onLeaveFeedback} good={good} neutral={neutral} bad={bad} isClicked={isClicked} total={total} positivePercentage={positivePercentage}/>
      // </div>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
            <Notification message="There is no feedback" Good={Good} Neutral={Neutral} Bad={Bad} total={total} isClicked={isClicked} positivePercentage={positivePercentage}/>
        </Section>
      </div>
      
    )
  }
}
