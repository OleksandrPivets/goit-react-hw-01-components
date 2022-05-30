import TransactionList from './TransactionList';
import PropTypes from 'prop-types';
import s from './transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transaction}>
      <thead className={s.tableHead}>
        <tr>
          <th className={s.tableRow}>Type</th>
          <th className={s.tableRow}>Amount</th>
          <th className={s.tableRow}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionList
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
