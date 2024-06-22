
import PropTypes from 'prop-types'

export const Section = ({ title, children }) => {

return (
    <div>
        <h1>{title}</h1>
        <section>{children}</section>
        
    </div>
)
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
