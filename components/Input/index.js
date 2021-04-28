const Input = ({ disabled, id, inputClass, label, value }) => {
  return (
    <div>
      <label htmlFor={id} hidden>
        {label}
      </label>
      <input
        id={id}
        className={inputClass}
        value={value}
        disabled={disabled}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
