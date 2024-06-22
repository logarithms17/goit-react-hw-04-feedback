import PropTypes from 'prop-types'

export const Statistic = ({ Good, Neutral, Bad, total, positivePercentage }) => {
    return (
    <div>
            <p>Good: {Good}</p>
            <p>Neutral: {Neutral}</p>
            <p>Bad: {Bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback: {!isNaN(positivePercentage) ? positivePercentage : 0}%</p>
        </div>
    )
}

Statistic.propTypes = {
    Good: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}