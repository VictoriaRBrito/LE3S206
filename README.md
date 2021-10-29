# S206LE3
### Atividade desenvolvida para testar o site da Amazon utilizando o cypress :robot:

## Execução do projeto:
Para executar o projeto por linha de comando, abra o terminal e digite

```
./node_modules/.bin/cypress run --spec 'cypress/integration/le3_tests/**/'
```
## Relatório de testes:
Para gerar o relatório de testes:
1. É preciso adicionar as dependências que são necessárias para gerar o relatório de testes, para isso digite:

```
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator 
```

2. Ao fim dos testes, faça o merge dos arquivos .json que foram gerados:

```
npx mochawesome-merge "cypress/reports/*.json" > mochawesome.json 
```
3. Para gerar o relatório de testes em HTML:

```
npx marge mochawesome.json 
```
