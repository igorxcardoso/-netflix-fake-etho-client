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



## Login

### InputText
O esse componente foi criado em components/inputs/input-text/input-text.component.ts.
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

Informações do input nativo do HTML: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input




### Logo
É recomendado criar um componente pala a logo, mas como à aplicação é pequena o logo será importado diretamente em login.screen.tsx e passada para um tag img.

Foi criado um componente no login.styled.ts que será usado para estilizar a logo. Esse componente só será usado no login.

Dentro do componente será usado o styled aplicado ao img para termos acessos as propriedades nativas do HTML.

Se estiver dentro de uma coluna e precisar centralizar todos os elementos, basta aplicar de forma total (mais externo).



### Centralização do conteúdo na tela

O container é o que agrupa as colunas. Na tela delogin, o container é do tamanho da dela e está centrelizando todo conteudo no centro da tela.

Para centrizar é possível usar justifyContent.

É possível centralizar todo conteúdo da página usando os seguintes atributos que fazem parte do Material dentro do Grid:
```
minHeight={'100vh'} alignItems={'center'}
```

Mas é possível estender um componente, caso não tivéssemos o Material



### Uso so styled
Para utilizar o styled para definir um novo componente é preciso importar a biblioteca do styled, e acessa a propriedade elemento que queremos criar, e então a partir disso passmos uma string com a estilização que automaticamente será criado o componente.
```tsx
export const MyLogo  = styled.img`
  margin: 0 0 128px;
`;
```

É possível estender com ponente que já existem, e então criar outras versões ou subversões. Esses componentes vão herdar do mesmo modo quando é usado um elemento nativo do styled.
```
```






### Unidades CSSS
A seguir estão algumas unidades do CSS.
#### vh (Viewport Height)
VH é a medida usada na altura, no height do CSS. Altura vertical (toda altura do navegador na vertical). Funciona por porcentagem, por exemplo:
```css
#modal{
 position:absolute;
 height:100vh;
}
```

#### vw (Viewport Width)
VW é a medida usada na largura, no width do CSS. Funciona por porcentagem, vejamos um exemplo abaixo:
```css
#modal{
 position:absolute;
 width:100vw;
}
```





# Hooks
## O que são?
Hooks são uma nova proposta que irá nos permitir utilizar estado, ciclo de vida, entre outras funcionalidades sem a necessidade de escrevermos componentes com classe.

## useState
O useState é um hook. Nós o chamamos dentro de um componente funcional para adicionar alguns states locais a ele. React irá preservar este state entre re-renderizações. useState retorna um par: o valor do state atual e uma função que permite atualizá-lo.

O useState serve para persistir dados, de maneira resumida.
O useState vai retornar um Array, sendo assim é usado a desestruturação de array.
É possível colocar um calor incial no useState.
```tsx
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
```

**OBS**: desestruturação de array
```js
  > const [a, b] = [1, 2]
  undefined
  > a
  1
  > b
  2
```

**OBS**: desestruturação de object
```js
  > const {e, d} = {'d': 1, 'c':9}
  undefined
  > e
  undefined
  > d
  1
  >
```

O setData recebe uma prop chamada de prevState, que seria o state atual daquele estado. O prevState é o valor mais atual. (vide código da aplicação)

Ter o controle de agrupar os dados que fazem sentido entre si.