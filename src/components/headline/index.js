import PropTypes from 'prop-types';
const Headline = (props) => {
    const { header, desc } = props
    const tempArr = [
        {
            fname: 'joe',
            lname: 'Bloggs',
            email: 'joe@gmail.com',
            age: 24,
            onlineStatus: true
        }
    ]
    return (
        <div   >
            <h1>{header}</h1>
            <p>{desc}</p>
        </div>
    )
}
Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fname: PropTypes.string,
        lname: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}
export default Headline
