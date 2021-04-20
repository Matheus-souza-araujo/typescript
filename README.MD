## Iniciando um projeto com typescript

- Primeiro devemos iniciar o projeto normalmente como visto anteriormente
    - $ yarn init -y
- Temos que instalar as tipagens do typescript
    - $ yarn add @types/(biblioteca usada) -D
- Instalando o typescript 
    - $ yarn add typescript -D
- Para inicializar o typescript
    - $ yarn tsc --init
- Para o node traduzir o typescript e não ficar jogando o arquivido traduzido em js na nossa pasta, devemos fazer o seguinte:
    - entrar no arquivo tsconfig.json
    - descomentar a configuração "outDir"
    - e configura-la da seguinte forma: "outDir": "./dist"