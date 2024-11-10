import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerField.module.css';

export default function DatePickerField({
  className,
  field,
  form,
  placeholder,
}) {
  const { name, value } = field;
  const { setFieldValue } = form;

  const handleChange = date => {
    setFieldValue(name, date);
  };

  return (
    <DatePicker
      {...field}
      className={className}
      formatWeekDay={day => day.slice(0, 3)}
      selected={value || null}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
      placeholderText={placeholder}
    />
  );
}
