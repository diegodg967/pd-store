import { SelectWrapper } from './styles';

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
    <SelectWrapper value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectWrapper>
  );
};
