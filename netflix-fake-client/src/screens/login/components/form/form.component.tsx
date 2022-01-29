import React from "react";
import InputText from "../../../../components/inputs/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";

export default function Form() {
  return (
    <>
      <InputText type={'text'} placeholder={'Email'}/>
      <InputText type={'password'} placeholder={'Senha'}/>
      <Button primary={true}>{`Entrar`}</Button>
    </>
  );
}