import { Container, Grid } from "@mui/material";
import React from "react";
import logoLogin from '../../assets/icons/logo.svg';
import { MyLogo, MyWropper } from "./login.styled";
import Form from "./components/form/form.component";

export default function Login() {
	return (
		<>
      <Container>
				<MyWropper container justifyContent={'center'}>
        	<Grid item xs={3} justifyContent={'center'}>
						<Grid container justifyContent={'center'}>
							<MyLogo src={logoLogin} alt={'Logo da Netflix'} />
							<Form />
						</Grid>
        	</Grid>
      	</MyWropper>
      </Container>
    </>
  );
}
