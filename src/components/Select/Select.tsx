import React from 'react'
import { Field } from 'formik'
import { Country, City } from '../../pages/Home/types'

// import { Container } from './styles';

type SelectProps = {
  options: Country[] | City[]
  id: string
  name: string
  value: string
  className: string
  disabled: boolean

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}

const Select: React.FC<SelectProps> = ({
  options,
  id,
  name,
  onChange,
  onBlur,
  value,
  disabled,
  className,
}) => {
  return (
    <Field
      id={id}
      as="select"
      name={name}
      onChange={onChange}
      disabled={disabled}
      onBlur={onBlur}
    >
      {options.length > 0 ? (
        options.map((element, index) => {
          return (
            <option
              className={className}
              key={index}
              value={element[value as keyof typeof element]}
            >
              {element.name ? element.name : 'oi'}
            </option>
          )
        })
      ) : (
        <option>Não Possui opções</option>
      )}
    </Field>
  )
}

export default Select
