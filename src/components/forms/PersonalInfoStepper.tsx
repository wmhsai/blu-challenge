import { useFormContext } from "react-hook-form";
import { styles } from ".";
import { INPUT_TYPES } from "../../utils/enums";
import DatePickerCustom from "../inputs/DatePicker";
import NumberInput from "../inputs/NumberInput";
import TextInput from "../inputs/TextInput";

const PersonalInfoStepper = () => {
  const { control } = useFormContext();
  return (
    <form style={styles.FormWrapper}>
      <TextInput control={control} name="FirstName" label="نام" required />
      <TextInput control={control} name="LastName" label="نام خانوادگی" required />
      <NumberInput control={control} name="NationalCode" label="کد ملی" required type={INPUT_TYPES.NATIONAL_CODE} />
      <NumberInput control={control} name="PhoneNumber" label="شماره تماس" required type={INPUT_TYPES.PHONE_NUMBER} />
      <DatePickerCustom control={control} name="BirthDate" label="تاریخ تولد" required />
    </form>
  )
}

export default PersonalInfoStepper;