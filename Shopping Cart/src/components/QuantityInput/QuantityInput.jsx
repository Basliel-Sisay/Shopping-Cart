function QuantityInput({ value, onIncrement, onDecrement, onChange, onBlur, min = 1}){
  return (
    <div className="quantityControls">
      <button onClick={onDecrement} disabled={value <= min}>-</button>
      <input
        type="number"
        min={min}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button onClick={onIncrement}> +</button>
    </div>
  );
}
export default QuantityInput;