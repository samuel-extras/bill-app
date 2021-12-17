import React from "react";
import { useFormikContext } from "formik";
import { ErrorMessage } from ".";
import Picker from "../Picker";
import Text from "../Text";

const FormPicker = ({
  items,
  name,
  numColumns,
  label,
  PickerItemComponent,
  placeholder,
  width,
  onChange = () => false,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  // setFieldValue(name, item)
  // console.log(values);
  const handleOnChange = (item) => {
    setFieldValue(name, item);
    onChange(item);
  };

  return (
    <React.Fragment>
      {label && <Text style={{ fontSize: 14 }}>{label}</Text>}
      <Picker
        items={items}
        numColumns={numColumns}
        onSelectItem={(item) => handleOnChange(item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};

export default FormPicker;
