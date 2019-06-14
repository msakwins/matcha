import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Input = ({
  placeholder,
  error,
  type,
  required,
  readOnly,
  disabled,
  autoFocus,
  onInput,
  value,
  }) => 
  <InputWrapper error={error}>
    <input
      type={type}
      placeholder={required ? `${placeholder}*` : `${placeholder}`}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      autoFocus={autoFocus}
      onInput={onInput}
      value={value}
    />
    <span>{error}</span>
  </InputWrapper>

export default Input;

const InputWrapper = styled.div`
  input {    
    margin: 10px 0 5px;
    border-radius: 0;
    color: ${theme.colors.black};
    background: transparent;
    border: none;
    width: 180px;
    font-family: ${theme.font.primary};
    padding: 0 10px;
    outline: none;
    min-height: 35px;
    height: 35px;
    border-bottom: 1px solid ${theme.colors.black};

    ::placeholder {
      font-family: ${theme.font.primary};
      color: ${theme.colors.mediumGrey};
      font-size: 16px;
    }

    :focus {
      ::placeholder {
        opacity: 0;
      }
    }
  }

  span {
    display: none;
    font-size: 11px;
    text-align: left;
    letter-spacing: 0.03rem;
  }

  ${({ error }) => error && `
    input {
      border-color: ${theme.colors.lightRed};
    }
    
    span {
      color: ${theme.colors.red};
      display: block;
    }
  `};
`;