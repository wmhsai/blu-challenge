
import CurrencyFormat from 'react-currency-format';
import { ControllerProps, useController } from 'react-hook-form';
import { styles } from '.';
import { isValidBankAccount, isValidPhoneNumber, isValidateNationalCode } from "../../utils/Validations";
import { INPUT_TYPES } from '../../utils/enums';
import { InputProps } from './inputsProps';

function SeparatedPriceInput({
  name,
  disabled,
  label,
  defaultValue,
  rules,
  required,
  control,
  type,
}: InputProps) {

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    ['e', 'E', '+', '-', '.'].includes(event.key) && event.preventDefault();
  };

  const validationRules: ControllerProps['rules'] = {
    ...rules,
    ...(required && {
      required: rules?.required || '*',
    }),
  }

  if (type == INPUT_TYPES.NATIONAL_CODE) {
    validationRules!.validate = isValidateNationalCode;
  }
  else if (type == INPUT_TYPES.PHONE_NUMBER) {
    validationRules!.validate = isValidPhoneNumber;
  }
  else if (type == INPUT_TYPES.BANK_ACCOUNT) {
    validationRules!.validate = isValidBankAccount;
  }

  const {
    field,
    fieldState: { error },
  } = useController({
    name: name,
    control: control,
    rules: validationRules,
    defaultValue: defaultValue ?? null,
  });

  return (
    <div style={styles.textInputWrapper}>
      <label style={styles.labelStyle}>
        {label}
        {required ? '*' : ''}
      </label>
      <CurrencyFormat
        onValueChange={(values: { value: string | number }) => {
          field.onChange(values.value);
        }}
        disabled={disabled}
        {...field}
        value={field.value || ""}
        name={name}
        onKeyDown={handleKeyDown}
        thousandSeparator
        isNumericString
        style={styles.inputStyle} />
      {
        error && (
          <span style={styles.spanStyle}>{error.message}</span>
        )
      }
    </div >
  );
}

export default SeparatedPriceInput;

