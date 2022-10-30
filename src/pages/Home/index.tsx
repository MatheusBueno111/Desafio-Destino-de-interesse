import * as Yup from 'yup'
import { Formik, Field, Form } from 'formik'
import 'react-app-polyfill/ie11'
import { City, Country, UserProps } from './types'
import { api } from '../../lib/axios'

import * as Dialog from '@radix-ui/react-dialog'
import Select from '../../components/Select/Select'

import { useContext, useEffect, useState } from 'react'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeContext } from 'styled-components'
import {
  DestinationWrapper,
  FormDestinationContainer,
  HomeContainer,
  InputWrapper,
  PersonalDataContainer,
} from './styles'
import { Envelope, Phone, User } from 'phosphor-react'
import { ShowNewUserModal } from './components/ShowNewUserModal'

export function Home() {
  const [countries, setCountries] = useState<Country[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [countryCode, setCountryCode] = useState('')
  const [user, setUser] = useState<UserProps>()

  const { 'grey-900': grey900 } = useContext(ThemeContext)

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Número de caracteres faltando')
      .max(70, 'Número de caracteres excedido')
      .matches(/^[a-zA-Z][a-zA-Z.\s]{2,20}$/, 'Caracter inválido')
      .required('Campo obrigatório'),
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    phone: Yup.string()
      .matches(
        /(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/,
        'Digite no formato (12) 91234-1234',
      )
      .required('Campo obrigatório'),
    cpf: Yup.string()
      .matches(
        /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/,
        'Digite no formato 123.456.789-12',
      )
      .required('Campo obrigatório'),
    country: Yup.string().required('Selecione um país'),
    city: Yup.string().notRequired(),
  })

  async function getCountries() {
    try {
      const response = await api.get('/country')
      const data = response.data

      setCountries(data)
    } catch (error) {
      console.error(error)
    }
  }

  async function getCities() {
    try {
      const response = await api.get('/city')
      const data = response.data

      setCities(data)
    } catch (error) {
      console.error(error)
    }
  }

  const filteredCities = countryCode
    ? cities.filter((element) => element.country_code === countryCode)
    : []

  const notify = async () =>
    await toast.success('Registrado com sucesso', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })

  useEffect(() => {
    getCountries()
    getCities()
  }, [])

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        cpf: '',
        country: '',
        city: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        const countryNameByCode = countries.find((element) => {
          return element.code === values.country
        })
        const newUser = {
          ...values,
          countryName: countryNameByCode?.name_ptbr,
        }

        setUser(newUser)
        resetForm()
      }}
    >
      {({ errors, handleChange, handleBlur, isValid, dirty }) => (
        <Form id="destinationForm">
          <HomeContainer>
            <FormDestinationContainer>
              <PersonalDataContainer>
                <h2>Dados pessoais</h2>
                <label htmlFor="name">Seu Nome</label>
                <InputWrapper>
                  <User />
                  <Field
                    id="name"
                    name="name"
                    placeholder="John"
                    autoComplete="nope"
                  />
                </InputWrapper>
                {errors.name && <p>{errors.name}</p>}

                <label htmlFor="email">Seu email</label>
                <InputWrapper>
                  <Envelope />
                  <Field
                    id="email"
                    name="email"
                    placeholder="johndoegmail.com"
                    autoComplete="nope"
                  />
                </InputWrapper>
                {errors.email && <p>{errors.email}</p>}

                <label htmlFor="phone">Telefone</label>
                <InputWrapper>
                  <Phone />
                  <Field
                    id="phone"
                    name="phone"
                    placeholder="(12) 91234-1234"
                    autoComplete="nope"
                  />
                </InputWrapper>
                {errors.phone && <p>{errors.phone}</p>}

                <label htmlFor="cpf">CPF</label>
                <InputWrapper>
                  <Phone />
                  <Field
                    id="cpf"
                    name="cpf"
                    placeholder="123.456.789-12"
                    onBlur={(event: any) =>
                      handleBlur((event.target.style.background = grey900))
                    }
                    autoComplete="nope"
                  />
                </InputWrapper>
                {errors.cpf && <p>{errors.cpf}</p>}
              </PersonalDataContainer>

              <DestinationWrapper>
                <h2>Destinos de interesse</h2>
                <label htmlFor="country">Escolha um país:</label>
                <InputWrapper>
                  <Select
                    className="countrys"
                    id="country"
                    onChange={(event) => {
                      handleChange(event)
                      setCountryCode(event.target.value)
                    }}
                    onBlur={(event) =>
                      handleBlur((event.target.style.background = grey900))
                    }
                    options={countries}
                    name="country"
                    value="code"
                    disabled={false}
                  />
                </InputWrapper>

                <label htmlFor="city">Escolha um cidade:</label>
                <InputWrapper>
                  <Select
                    className="countrys"
                    id="city"
                    options={filteredCities}
                    onChange={(event) => {
                      handleChange(event)
                    }}
                    onBlur={(event) =>
                      handleBlur((event.target.style.background = grey900))
                    }
                    name="city"
                    value="city "
                    disabled={!(countryCode.length > 0)}
                  />
                </InputWrapper>
              </DestinationWrapper>
            </FormDestinationContainer>
            <Dialog.Root>
              <>
                <Dialog.Trigger asChild>
                  <button
                    type="submit"
                    onClick={() => {
                      notify()
                    }}
                    id="destinationForm"
                    disabled={!(dirty && isValid)}
                  >
                    Submit
                  </button>
                </Dialog.Trigger>

                {user ? <ShowNewUserModal user={user} /> : []}
              </>
            </Dialog.Root>
          </HomeContainer>
        </Form>
      )}
    </Formik>
  )
}
