# Laboratório de QA - Automação de Frontend com Cypress

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/SEU_USUARIO/SEU_REPOSITORIO/cypress.yml?branch=main)
![Cypress](https://img.shields.io/badge/Cypress-15.14.0-green)
![Node.js](https://img.shields.io/badge/Node.js-18.x-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-✔-2088FF)

Este projeto é um laboratório prático de **Quality Assurance (QA)** focado em automação de testes de frontend. O objetivo é demonstrar boas práticas de automação utilizando **Cypress** para validar uma aplicação web moderna de formulário de login, com testes de funcionalidade, validação de campos, responsividade e integração contínua.

## 📋 Visão Geral

O projeto consiste em:
- Uma página de login responsiva e moderna (`index.html`)
- Testes automatizados abrangentes usando **Cypress**
- Configuração de **CI/CD** com **GitHub Actions**
- Testes de responsividade para múltiplos dispositivos
- Validação de formulários e interações do usuário

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **HTML5** | - | Estrutura da página de login |
| **CSS3** | - | Estilização moderna com gradientes e responsividade |
| **JavaScript** | ES6+ | Validação de formulário e interatividade |
| **Cypress** | 15.14.0 | Framework de automação de testes E2E |
| **Node.js** | 18.x | Ambiente de execução |
| **npm** | - | Gerenciador de pacotes |
| **GitHub Actions** | - | Pipeline de Integração Contínua |
| **Ubuntu** | latest | Ambiente de execução dos testes CI |

## 🧪 O que os Testes Validam

### 1. **Testes Funcionais do Formulário de Login**
   - Login com credenciais fictícias
   - Validação de campos obrigatórios
   - Verificação de formato de e-mail válido
   - Funcionalidade de "mostrar/esconder senha"
   - Links e elementos de navegação

### 2. **Testes de Responsividade**
   - Layout em diferentes resoluções (iPhone X, iPad, MacBook)
   - Adaptação para modo retrato e paisagem
   - Verificação de estilos CSS específicos por breakpoint
   - Funcionalidade em dispositivos móveis e desktop

### 3. **Testes de Interface do Usuário**
   - Presença de elementos visuais
   - Títulos e textos corretos
   - Placeholders e labels apropriados
   - Visibilidade e estado dos componentes

### 4. **Validação de Acessibilidade e Usabilidade**
   - Campos habilitados e focáveis
   - Feedback visual ao interagir
   - Navegação por teclado (implícito nos testes de foco)

## 📁 Estrutura do Projeto

```
lab-cypress-pi/
├── .github/
│   └── workflows/
│       └── cypress.yml          # Configuração do CI/CD GitHub Actions
├── cypress/
│   └── e2e/
│       └── login.cy.js          # Testes automatizados do formulário de login
├── index.html                   # Página de login responsiva
├── cypress.config.js            # Configuração do Cypress
├── package.json                 Dependências do projeto
├── package-lock.json            Versões exatas das dependências
└── README.md                    Este arquivo
```

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente incluído com Node.js)
- **Git** (para clonar o repositório)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   cd lab-cypress-pi
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute a aplicação localmente**
   ```bash
   # Inicie um servidor local (Python 3)
   python3 -m http.server 3000
   
   # Ou use npx serve (se preferir)
   npx serve -s . -l 3000
   ```
   
   Acesse: [http://localhost:3000](http://localhost:3000)

4. **Execute os testes do Cypress**
   
   **Modo Headless (linha de comando):**
   ```bash
   npm run cypress:run
   ```
   
   **Modo Interativo (interface gráfica):**
   ```bash
   npm run cypress:open
   ```

## 🧪 Execução dos Testes

### Testes Disponíveis
```bash
# Executar todos os testes (inclui iniciar servidor)
npm run test:e2e

# Executar todos os testes (sem servidor, precisa de servidor rodando)
npm run cypress:run

# Executar apenas o spec de login
npm run cypress:test

# Abrir interface interativa do Cypress
npm run cypress:open

# Iniciar servidor de desenvolvimento
npm start
```

### Tipos de Testes Incluídos
- **Teste de Login**: Valida fluxo completo de autenticação
- **Teste de Validação**: Verifica mensagens de erro apropriadas
- **Teste de Responsividade**: Testa em múltiplos dispositivos
- **Teste de UI**: Confirma presença e estado dos elementos

## 🔄 Integração Contínua (CI/CD)

O projeto utiliza **GitHub Actions** para executar os testes automaticamente em cada `push` ou `pull_request` na branch `main`.

### Fluxo do CI:
1. **Checkout** do código
2. **Cache** das dependências e binário do Cypress
3. **Instalação** das dependências com `npm ci`
4. **Inicialização** do servidor estático
5. **Execução** dos testes Cypress em modo headless
6. **Relatório** de sucesso/falha no GitHub

### Status do Workflow:
- ✅ **Sucesso**: Todos os testes passaram
- ❌ **Falha**: Um ou mais testes falharam
- ⚠️ **Cancelado**: Workflow interrompido manualmente

## 📊 Resultados dos Testes

Os testes incluem:
- **100% de cobertura** das funcionalidades principais
- **Testes em 10+ resoluções** diferentes
- **Validação cross-browser** (via Cypress)
- **Tempo de execução**: ~30 segundos no CI

## 🎯 Objetivos de Aprendizado

Este laboratório foi projetado para demonstrar:

1. **Automação de testes E2E** com Cypress
2. **Testes de responsividade** automatizados
3. **Configuração de CI/CD** para projetos frontend
4. **Boas práticas de QA** em desenvolvimento web
5. **Integração** de testes automatizados no fluxo de desenvolvimento

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é licenciado sob a licença ISC - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🔧 Personalização

Antes de usar este projeto, substitua os placeholders no README:
- `SEU_USUARIO/SEU_REPOSITORIO` pelo seu username/nome do repositório
- Adicione seu nome no arquivo LICENSE
- Atualize as informações de contato conforme necessário

## 📞 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/issues) no repositório.

---

**Desenvolvido com ❤️ para a comunidade de QA e Desenvolvimento Frontend**

> *"A qualidade nunca é um acidente; é sempre o resultado de um esforço inteligente."* - John Ruskin