import React from "react";
import PropTypes from "prop-types";
import { SELECT, LABEL } from "./dropdown.style";

Dropdown.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  labelname: PropTypes.string,
  labelclassName: PropTypes.string,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  options: [
    {
      label: "Select a Category",
      value: "Select a Category",
    },
  ],
  onChange: () => console.log("Please enter the onChange info"),

  className: "",
  labelname: "",
  labelclassName: "",
};

export default function Dropdown(props) {
  const {
    name,
    options,
    onChange,
    className,
    labelname,
    labelclassName,
    defaultValue,
    ...otherProps
  } = props;

  return (
    <span>
      <LABEL for={name} className={labelclassName}>
        {labelname}
      </LABEL>
      <SELECT
        className={className}
        onChange={onChange}
        value={defaultValue}
        name={name}
        {...otherProps}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </SELECT>
    </span>
  );
}
