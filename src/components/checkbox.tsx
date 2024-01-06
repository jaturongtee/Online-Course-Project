import { useState, useEffect } from 'react';

interface CheckboxProps {
  id: string;
  label: string;
}

const Checkbox = ({ id, label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const storedValue = localStorage.getItem(id);
    if (storedValue) {
      setIsChecked(storedValue === 'true');
    }
  }, [id]);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    localStorage.setItem(id, String(newCheckedState));
  };

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
