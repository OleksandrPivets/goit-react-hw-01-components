import PropTypes from 'prop-types';

const StatisticsList = ({label, percentage}) =>{
    return(
        <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
        </li>
         )
}   

StatisticsList.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
export default StatisticsList;