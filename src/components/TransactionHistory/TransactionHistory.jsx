import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
      <table className={css.table}>
        <thead className={css.headTable}>
          <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.row}>
              <td className={css.type}>{type}</td>
              <td className={css.type}>{amount}</td>
              <td className={css.type}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    }
    