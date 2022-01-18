Para ecrever código TypeScript basca coloca-lo dentro de chaves ({}):

```tsx
function App() {
  const myText = "Olá";

  return (
    <div id={myText} className="test-text">
      <header>
        <b>{myText}</b>
      </header>
    </div>
  );
}
```

## Padão de Projeto e Diretórios


### Screens
Dentro de screens cada pasta é uma tela

### Padão de escrita
Usar o camelcase com a primeira letra maiúscula




## Tematização do projeto usando Styled Components
Deixa o código dinâmico. Uma aplicação pode ter divesos temas, e uma aplicação é o modo escuro que encontramos em muitas aplicações de mercado.

### ThemeProvider
É contexo (user context), sendo um hook do próprio React, e ele alimenta de forma automática todo styled que está sendo usado no fluxo abaixo dele, como é possível observar

```tsx
    <Button>Normal</Button>

    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
```
O theme que é passo é um objeto. No caso do projeto é uma variável que é exportada, e é acessada no App.tsx.

No projeto foram criados arquivos para isolar as resposabilidade, por exemplo,um arquivo para paleta de cores, outro para bordas e assim por diante.



## Material
O tamanho máximo de colunas que posso ter é de 12, como por exemplo
```tsx
<Grid container>
  <Grid item xs={4}>
      <Button primary={true}>{`Igor`}</Button>
  </Grid>
  <Grid item xs={4}>
      <Button primary={true}>{`Igor`}</Button>
  </Grid>
  <Grid item xs={4}>
      <Button primary={true}>{`Igor`}</Button>
  </Grid>
  <Grid item xs={4}>
      <Button primary={true}>{`Igor`}</Button>
  </Grid>
</Grid>
```
No exemplo acima, os três primeiros button, cada um tem tamanho 4 e o notal dá 12, ficaram na primeira fileira, mas o último ficará em fieira de santana.