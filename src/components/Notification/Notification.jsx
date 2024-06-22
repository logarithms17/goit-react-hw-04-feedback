import { Statistic } from "components/Statistic/Statistic"
import PropTypes from 'prop-types'

export const Notification = ({ Good, Neutral, Bad, isClicked, total, positivePercentage, message }) => {
    return (
        <div>
            {isClicked ? <Statistic Good={Good} Neutral={Neutral} Bad={Bad} total={total} positivePercentage={positivePercentage} /> : <p>{message}</p>}
        </div>
    )
}

Notification.propTypes = {
    Good: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
    isClicked: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
}
