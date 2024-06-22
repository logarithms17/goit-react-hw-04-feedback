
import PropTypes from 'prop-types'

export const Section = ({ title, children }) => {

return (
    <div>
        {/* <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        <Notification message="There is no feedback" good={good} neutral={neutral} bad={bad} total={total} isClicked={isClicked} positivePercentage={positivePercentage}/> */}
        <h1>{title}</h1>
        <section>{children}</section>
        
    </div>
)
}

// Section.propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string).isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired,
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     isClicked: PropTypes.bool.isRequired,
//     total: PropTypes.number.isRequired,
//     positivePercentage: PropTypes.number.isRequired
// }

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
