
# Criação de novo prejeto React
Para criar um projeto novo com a tipagem do TypeScript

```
npx create-react-app my-app --template typescript
```








# Instalação de dependências

## React Router
```
npm install react-router-dom@6
```

## Styled Components
Instalação da depeência e da tipagem para o TypeScript
```
npm i --save styled-components
npm i --save-dev @types/styled-components
```
### vscode-styled-components
Extensão usada para destacar a o css na string.







# Material
No projeto foi utilizado os grids do material
```
npm install @mui/material @emotion/react @emotion/styled
```

Informações para o grid
https://mui.com/pt/components/grid/






# Arquitetura/Diretórios

## screens
Nesse diretório estão as telas da aplicação, como a tela de login e a home.

### screens/login
Aqui estão todos elemntos que para tela de login, e dentro do diretório comtém um subdirtório chamado *components*, que é aonde estão os componentes específico da tela de login.

#### screens/login/form
Aqui estão os somponentes utilizado para fazer o from, como input e botão.



# Validação usando o yup
Um lib de validação que não tem nada a ver com Rectjs. Com o yup é possível definir o formato que o dado tem que ter, e vai relizar as validações. Se a entrada foir válida será retornado um booleano, e em caso de erro será retornado o erro.

***schema***: onde é definido os campos, os valores e todas as regras de dados para cada campo.

**Libs para validação no Recat**: 1. React Hook Form; 2.Redux Form (descontinuado, pois é ruim).

O yup é uma factory, pois sempre está retornando um dado e a si mesmo, assim como um Hook.

