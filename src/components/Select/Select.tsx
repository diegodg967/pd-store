interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => unknown;
  options: SelectOption[];
  value: string;
}

export const Select = ({ onChange, options, value }: SelectProps) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value="price-asc">
          {option.label}
        </option>
      ))}
    </select>
  );
};
