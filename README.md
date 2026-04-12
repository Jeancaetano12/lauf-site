## Començando:

Primeiramente, rode o comando pra instalar os pacotes basicos pra iniciar o projeto:

```bash
# Instala as dependencias do projeto
npm install
```
Apos instalado as dependencias do projeto, rode co comando:

```bash
# Inicia o servidor de desenvolvimento na porta localhost:3000
npm run dev
```
## Crie seu arquivo de variavel de ambiente

Crie um arquivo chamado `.env` na raiz do projeto para uso futuro. Esse arquivo `NÃO` deve ser enviado para o repositório (Por padrão ele não é enviado, confira se ele ficou apagadinho no seu VSCODE, não mexa é assim mesmo).

## Extensões recomendadas pra que quer usar o VScode:

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (Te ajuda a usar o tailwind de forma mais fluida)

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (Te ajuda a manter o código javascript limpo e organizado)

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (Te ajuda com o git e com o github pra acomapanhar o versionamento de código)

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) (Te ajuda a visualizar o historico de commits)

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) (Te ajuda a organizar os arquivos na barra lateral)

## Padronização de commits

Usamos prefixos pra identificar o tipo de commit, por exemplo:

- `feat:` Adiciona uma nova funcionalidade
- `fix:` Corrige um bug
- `docs:` Adiciona ou atualiza documentação
- `style:` Formatação de código, sem alteração de lógica
- `refactor:` Refatoração de código
- `test:` Adiciona ou atualiza testes
- `chore:` Atualização de dependências, configuração, etc.

Sempre comece o commit com um desses prefixos, seguido de dois pontos e um espaço, e depois uma descrição curta do que foi feito. O commit pode ter mais de um tipo, mas sempre comece com o prefixo que representa a mudança mais significativa.

**Caso você tenha adicionado uma biblioteca/dependencia, comece o commit evidenciando isso.**

## Links de documentação relevante

- [Next.js Documentation](https://nextjs.org/docs) - Documentação do NextJS
- [Learn Next.js](https://nextjs.org/learn) - Tutorial interativo do NextJS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Documentação do tailwind
