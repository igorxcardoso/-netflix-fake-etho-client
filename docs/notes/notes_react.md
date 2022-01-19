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


## Notas do projeto
### ThemeProvider
Tudo que depende do thema precisa ficar denho da tag de ThemeProvider

### GlobalStyle
É um componente, que é responsavel pela cor do background.

### Routes
Posso ter a rota das seguintes formas
```tsx
<Route path="/login" element={<Login />} />
<Route path={LoginPath} element={<Login />} />
```
Onde o LoginPath é um import para stringa que contem a rota.



### InputText
Posso passar Props como parâmetro para o componente.

Como tenho styled.input no componente, é possível acessar todas os parâmetros que um input (HTML) tem, como text e placeholder.


```tsx
<InputText type={'text'} placeholder={'Email'}/>
<InputText type={'password'} placeholder={'Senha'}/>
```
Tudo que é passado como Pros (no React) vai acbar virando Props nativa do HTML.

No CSS dentro de styled.input, eu tenho do estilo do input
```tsx
  width: calc(100% - 16px);
  padding: 8px;
  border: 0;
  margin: 0 0 22px 0;
  border-radius: ${props => props.theme.border.radius['5']};
  background: ${props => props.theme.palette.core.whiteBackground};
```
OBS: Poderia omitir o último valor do margin, sendo assim, ficaria
```css
margin: 0 0 22px 0
```
Na falta dos valores vai repetir o valor do outro lado.