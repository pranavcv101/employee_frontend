import "./Select.css";

export const Select = ({
  options,
  id,
  label,
  variant,
  onChange,
  value,
}: {
  value?: string | number;
  options: SelectOption[];
  id: string;
  label: string;
  variant?: string;
  onChange?: (event: any) => void;
}) => {
  return (
    <div className="SelectWrapperContainer">
      <label>{label}</label>
      <select
        id={id}
        className={`selectinputWrapper ${variant}`}
        onChange={onChange}
        value={value}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {" "}
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export type SelectOption = {
  value: string;
  label: string;
};
