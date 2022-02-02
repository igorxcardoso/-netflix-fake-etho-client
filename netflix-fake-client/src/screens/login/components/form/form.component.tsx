import React, { useCallback, useState } from "react";
import InputText from "../../../../components/inputs/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";
import * as yup from 'yup';

export default function Form() {
  const [data, setData] = useState( {email: '', password: '' } )

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
        email: yup.string().required().email(),
        password: yup.string().required()
      });

      try {
        await schema.validate(data);
        // console.log(true, data);
        return true;

      }catch(error: any) {
        console.log(error.errors[0]);
        return false;
      }
    },
    [data]
  );

  const onSubmit = useCallback(
    async () => {
      await validation();

      // console.log(data);
    },
    [validation]  // Vai atulizar o data que voi gravado na função onSumit
  );             // Está falando para o Hook useCallback que deve ser redeclarado a cada mudança do data


  // console.log(data)


  return (
    <>
      <InputText type={'text'} placeholder={'Email'} name={'email'} onChange={getChange} />
      <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={getChange} />
      <Button onClick={onSubmit} primary={true}>{`Entrar`}</Button>
    </>
  );
}