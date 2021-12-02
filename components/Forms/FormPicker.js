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
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <React.Fragment>
      {label && <Text style={{ fontSize: 14 }}>{label}</Text>}
      <Picker
        items={items}
        numColumns={numColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
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
