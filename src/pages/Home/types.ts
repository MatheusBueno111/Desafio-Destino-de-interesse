export interface Country {
  code: string
  name: string
  name_ptbr: string
}

export interface City extends Country {
  country_code: string
}

export interface UserProps {
  name: string
  email: string
  phone: string
  cpf: string
  country: string
  city?: string
  countryName: string | undefined
}
