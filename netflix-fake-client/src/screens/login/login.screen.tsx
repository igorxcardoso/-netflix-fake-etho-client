import { Grid } from "@mui/material";
import React from "react";
import Button from "../../components/buttons/button/button.component";

export default function Login() {
    return (
        <>

            <h1>Estamos aqui!</h1>
            <Grid container justifyContent={'center'}>
                <Grid item xs={4}>
                    <Button primary={true}>{`Igor`}</Button>
                </Grid>
            </Grid>
        </>
    );
}
