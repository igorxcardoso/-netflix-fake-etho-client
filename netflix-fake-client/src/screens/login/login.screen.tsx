import { Container, Grid } from "@mui/material";
import React from "react";
import Button from "../../components/buttons/button/button.component";
import InputText from "../../components/inputs/input-text/input-text.component";
import logoLogin from '../../assets/icons/logo.svg';
import { MyLogo, MyWropper } from "./login.styled";

export default function Login() {
	return (
		<>
      <Container>
				<MyWropper container justifyContent={'center'}>
        	<Grid item xs={3} justifyContent={'center'}>
						<Grid container justifyContent={'center'}>
							<MyLogo src={logoLogin} alt={'Logo da Netflix'} />
							<InputText type={'text'} placeholder={'Email'}/>
							<InputText type={'password'} placeholder={'Senha'}/>
							<Button primary={true}>{`Entrar`}</Button>
						</Grid>
        	</Grid>
      	</MyWropper>
      </Container>
    </>
  );
}
