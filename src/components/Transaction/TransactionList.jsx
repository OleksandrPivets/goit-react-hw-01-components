import PropTypes from 'prop-types';
import s from './transaction.module.css';

const TransactionList = ({ type, amount, currency }) => {
  return (
    <tr className={s.table}>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </tr>
  );
};

TransactionList.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionList;
