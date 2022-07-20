// @ts-nocheck
import React from 'react'

const Input = ({ type, defaultValue, handleChange, name, ...rest }) => {
  const [value, setValue] = React.useState(defaultValue);
  React.useEffect(() => setValue(defaultValue), [defaultValue]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={(e) => {
        console.log('1');
        handleChange(name, e.target.value);
      }}
      type={type}
      name={name}
      {...rest}
    />
  )
};

export {
  Input
}
