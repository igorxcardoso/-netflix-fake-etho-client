import { Container, Grid } from "@mui/material";
import React from "react";
import Button from "../../components/buttons/button/button.component";
import InputText from "../../components/inputs/input-text/input-text.component";
import logoLogin from '../../assets/icons/logo.svg';
import { MyLogo } from "./login.styled";

export default function Login() {
	return (
		<>
      <Container>
				<Grid container justifyContent={'center'}>
        	<Grid item xs={4} justifyContent={'center'}>
						<Grid container justifyContent={'center'}>
							<MyLogo src={logoLogin} alt={'Logo da Netflix'} />
							<InputText type={'text'} placeholder={'Email'}/>
							<InputText type={'password'} placeholder={'Senha'}/>
							<Button primary={true}>{`Igor`}</Button>
						</Grid>
        	</Grid>
      	</Grid>
      </Container>
    </>
  );
}
