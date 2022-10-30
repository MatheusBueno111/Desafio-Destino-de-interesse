import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    margin-top: 5rem;
    margin-right: 2.4rem;
    border: none;
    border-radius: 0.375rem;
    background-color: ${({ theme }) => theme['green-500']};
    font-weight: 700;
    color: ${({ theme }) => theme['grey-900']};

    padding: 0.75rem 1rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme['green-300']};
      transition: background-color 0.2s;
    }
  }

  p {
    color: red;
    font-size: 0.75rem;
    font-weight: 700;
  }
`

export const FormDestinationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
`

export const PersonalDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);

  gap: 1rem;
  padding: 4rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme['grey-800']};

  h2 {
    color: ${({ theme }) => theme['green-300']};
  }

  label {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme['grey-100']};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1;
  }
`

export const DestinationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);

  background-color: ${({ theme }) => theme['grey-800']};
  padding: 4rem;
  border-radius: 0.375rem;

  gap: 1rem;

  h2 {
    color: ${({ theme }) => theme['green-300']};
  }

  label {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme['grey-100']};
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    left: 16px;
    top: 12px;
    color: ${({ theme }) => theme['grey-500']};
  }

  :focus-within {
    svg {
      color: ${({ theme }) => theme['green-500']};
      transition: color 0.3s;
    }
  }

  input {
    display: flex;
    flex: 1;
    color: ${({ theme }) => theme['grey-100']};
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    background-color: ${({ theme }) => theme['grey-900']};
    border: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;

    ::placeholder {
      color: ${({ theme }) => theme['grey-500']};
    }
    :focus {
      outline: 1px solid ${({ theme }) => theme['green-500']};
      transition: outline 0.3s;
    }
  }

  select {
    background-color: ${({ theme }) => theme['grey-900']};
    color: ${({ theme }) => theme['grey-100']};
    padding: 0.5rem;
    border: none;
    border-radius: 0.375rem;
    border-right: 1rem;

    option {
    }

    :focus {
      outline: 1px solid ${({ theme }) => theme['green-500']};
      transition: outline 0.3s;
      color: ${({ theme }) => theme['green-500']};
    }

    ::-webkit-scrollbar {
      width: 0.5rem;
      border: 1px solid red;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme['grey-900']};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme['grey-600']};
      border-radius: 0.5rem;
      border-left: 10px solid transparent;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme['grey-500']};
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-right: 2.4rem;
  width: 2.2rem;
  height: 2.2rem;
  border: solid;
  border-radius: 50%;
  padding: 0.2rem;
  background-color: ${({ theme }) => theme['green-300']};
  color: ${({ theme }) => theme['green-300']};
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme['grey-900']};
  }
`
