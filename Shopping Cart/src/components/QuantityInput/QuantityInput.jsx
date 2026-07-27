import styles from "./QuantityInput.module.css";

function QuantityInput({
  value,
  onIncrement,
  onDecrement,
  onChange,
  onBlur,
  min = 1,
}) {
  return (
    <div className={styles.quantityControls}>
      <button onClick={onDecrement} disabled={value <= min}>
        -
      </button>
      <input
        className={styles.input}
        type="number"
        min={min}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
export default QuantityInput;
