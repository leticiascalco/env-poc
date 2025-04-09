# env-poc

Esse projeto é uma POC (prova de conceito) simples pra testar o carregamento de variáveis de ambiente em projetos Node.js que usam Jest.

A ideia aqui é poder trocar de ambiente (como `dev`, `localstack`, etc.) só mudando uma variável no arquivo `.env` da raiz. Os testes carregam automaticamente o ambiente certo antes de rodar.

---

## Como funciona

1. Na raiz do projeto tem um arquivo `.env` com uma variável chamada `ENV_PROJECT`:
   ```env
   ENV_PROJECT=localstack
   ```

2. Esse valor (no exemplo acima, `localstack`) é usado pra carregar um arquivo com variáveis dentro da pasta `environments/`.

3. Os testes usam essas variáveis, e o Jest já tá configurado pra carregar tudo automaticamente via `jest.setup.js`.

---

## Exemplo de estrutura do projeto

```
env-poc/
├── .env                 ← define o ambiente (ex: localstack)
├── environments/
│   ├── localstack       ← variáveis específicas desse ambiente
│   └── dev              ← outro exemplo
├── jest.setup.js        ← carrega o ambiente antes dos testes
├── __tests__/
│   └── env-loader.test.js
├── package.json
```

---

## Como rodar

1. Clone o repositório:

```bash
git clone git@github.com:leticiascalco/env-poc.git
cd env-poc
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o ambiente no arquivo `.env`:

```env
ENV_PROJECT=localstack
```

4. Rode os testes:

```bash
npm test
```

---

## Observações

- Os arquivos da pasta `environments/` devem seguir o padrão `.env`, ou seja, só `VAR=valor`, sem `export` ou `&&`.
- Esse projeto foi feito com foco em aprendizado, então a ideia é manter tudo o mais simples possível ✨

---

Feito por Leticia Scalco ☕🚀
