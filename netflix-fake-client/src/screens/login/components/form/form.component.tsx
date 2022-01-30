import React, { useCallback, useState } from "react";
import InputText from "../../../../components/inputs/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";

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

  console.log(data)


  return (
    <>
      <InputText type={'text'} placeholder={'Email'} name={'email'} onChange={getChange} />
      <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={getChange} />
      <Button primary={true}>{`Entrar`}</Button>
    </>
  );
}