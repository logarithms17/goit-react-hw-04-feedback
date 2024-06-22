// rcc is the shortcut broiler plate for class component

import { useState } from "react"
import { Section } from "./Section/Section"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Notification } from "./Notification/Notification"

function App() {

  const [status, setStatus] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0
  })
  const [isClicked, setIsClicked] = useState(false)
  // state = {
  // Good: 0,
  // Neutral: 0,
  // Bad: 0,
  // isClicked: false
  // }
  
    const options = ['Good', 'Neutral', 'Bad']
    const { Good, Neutral, Bad } = status

    const countTotalFeedback = () => {
      return Good + Neutral + Bad
  }
  
    const countPositiveFeedbackPercentage = () => {
      return Math.floor((Good / total) * 100)
  }
  
  const total = countTotalFeedback()
  
    const positivePercentage = countPositiveFeedbackPercentage()
    
  const onLeaveFeedback = (option) => {
      
    setStatus(prevValue => ({
      ...prevValue,
      [option]: prevValue[option] + 1,
    }))

    setIsClicked(true)
  }

    return (
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

export default App;
