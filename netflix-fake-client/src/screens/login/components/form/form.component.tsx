import React, { useCallback, useState } from "react";
import InputText from "../../../../components/inputs/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";
import * as yup from 'yup';
import { ErrorMessage } from "./form.types";
import { ErrorDescription } from "./form.styled";

export default function Form() {
  const [data, setData] = useState( {email: '', password: '' } )
  const [error, setError] = useState('')

  const getChange = useCallback(
    /*callback*/
    function(event: any) {
      return setData(function(prevState) {
        return {...prevState, [event.target.name]: event.target.value};
      });
    },
    /*deps*/
    [setData]
  )

  const validation = useCallback(
    async () => {
      // Definição do schema
      const schema = yup.object().shape({
        email: yup.string().required(ErrorMessage.Required).email(ErrorMessage.Email),
        password: yup.string().required(ErrorMessage.Password)
      });

      try {
        await schema.validate(data);    // Queoro validar o data em cida do schema que foi definido
        // console.log(true, data);
        return true;

      }catch(error) {
        // @ts-ignore
        setError(error.errors);
        return false;
      }
    },
    [data, setError]    // Está falando para o Hook useCallback que deve ser redeclarado a cada mudança do data
  );                    // Vai atulizar o data que está sendo usado na função validation

  const onSubmit = useCallback(
    async () => {
      await validation();
    },
    [validation]     // Está falando para o Hook useCallback que deve ser redeclarado a cada mudança do validation
  );

  // console.log(data)


  return (
    <>
      <InputText type={'text'} placeholder={'Email'} name={'email'} onChange={getChange} />
      <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={getChange} />
      <ErrorDescription>{error}</ErrorDescription>
      <Button onClick={onSubmit} primary={true}>{`Entrar`}</Button>
    </>
  );
}