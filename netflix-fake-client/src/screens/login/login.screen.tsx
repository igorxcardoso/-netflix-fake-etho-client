import { Container, Grid } from "@mui/material";
import React from "react";
import Button from "../../components/buttons/button/button.component";
import InputText from "../../components/inputs/input-text/input-text.component";

export default function Login() {
    return (
        <>
            <h1>Estamos aqui!</h1>
            <Container>
                <Grid container justifyContent={'center'}>
                    <Grid item xs={4}>
						<InputText type={'text'} placeholder={'Email'}/>
						<InputText type={'password'} placeholder={'Senha'}/>
                        <Button primary={true}>{`Igor`}</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
