import React, { useState } from "react";
import InputText from "../../../../components/inputs/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";

export default function Form() {
  const [data, setData] = useState( {email: '', password: '' } )

  // const getChange = (event: any) => setData(prevState => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value
  // }));


  function getChange(event: any) {
    return setData(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
      })
    );
  }

  // Spred opperetion


  console.log(data)


  return (
    <>
      <InputText type={'text'} placeholder={'Email'} name={'email'} onChange={getChange} />
      <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={getChange} />
      <Button primary={true}>{`Entrar`}</Button>
    </>
  );
}