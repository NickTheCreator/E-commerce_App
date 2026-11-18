# 🖥️ E-commerce-type

Uma interface de comércio eletrônico feita com React e TypeScript, com navegação, troca de tema, tradução e componentes reutilizáveis.

---

## 📋 Sobre

Este projeto mostra a interface inicial de uma loja virtual. O usuário pode pesquisar produtos, abrir a página de login, alternar entre os temas azul e rosa e mudar o idioma entre inglês e português.

O projeto inclui cabeçalho, área de conteúdo, rodapé, estado de carregamento, estado de erro e página 404. Foi criado como um exercício de frontend usando componentes reutilizáveis e pastas separadas por página.

---

## ✨ Funcionalidades

- Cabeçalho com logo, endereço, campo de busca, carrinho e botão de login
- Navegação entre `/` e `/login`
- Temas azul e rosa com preferência salva no armazenamento local
- Traduções em inglês e português carregadas por arquivos JSON
- Rodapé com links agrupados em About, Quick Links, Help & Support, Company e Social
- Tela de carregamento com indicador animado enquanto as páginas são carregadas
- Tela de erro com botão para recarregar a aplicação
- Página não encontrada com opção de voltar à página anterior ou ao início
- Carregamento sob demanda das páginas Início, Login e Não encontrada
- Stories no Storybook e testes unitários dos componentes compartilhados

---

## 🛠️ Tecnologias usadas

- **TypeScript** — tipos e lógica da aplicação
- **React** — componentes e estado da interface
- **React DOM** — mostra a aplicação no navegador
- **React Router** — navegação entre páginas e configuração das rotas
- **SCSS** — temas e estilos dos componentes
- **Sass Embedded** — compila os arquivos SCSS
- **Vite** — servidor de desenvolvimento e build de produção
- **i18next** — carrega as traduções em inglês e português
- **react-i18next** — conecta as traduções aos componentes React
- **react-error-boundary** — mostra uma tela de recuperação quando um componente falha
- **SVGR** — transforma ícones SVG em componentes React
- **Storybook** — mostra e documenta componentes isoladamente
- **Vitest** — executa os testes unitários
- **Testing Library** — verifica a renderização e as interações dos componentes
- **Oxlint** — verifica o código TypeScript e JavaScript
- **Stylelint** — verifica os arquivos SCSS

---

## 🚀 Como executar

1. Clone ou baixe este repositório.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço informado pelo Vite.

### Outros comandos

```bash
npm run build
npm run preview
npm run lint
npm run lint:ts
npm run lint:scss
npm run test:unit
npm run storybook
npm run build-storybook
npm run test:regression
```

---

## 📁 Estrutura de arquivos

```text
e-commerce-type/
├── .storybook/
│   ├── main.ts
│   └── preview.tsx
├── .github/
│   └── workflows/
│       └── main.yaml
├── public/
│   └── locales/
│       ├── en/
│       │   ├── login.json
│       │   └── translation.json
│       └── pt/
│           ├── login.json
│           └── translation.json
├── src/
│   ├── app/
│   │   ├── providers/
│   │   │   ├── router/
│   │   │   │   ├── routerConfig.tsx
│   │   │   │   └── ui/
│   │   │   │       └── AppRouter.tsx
│   │   │   ├── theme/
│   │   │   │   └── ThemeProvider.tsx
│   │   │   └── index.ts
│   │   ├── styles/
│   │   │   ├── themes/
│   │   │   │   ├── blue.scss
│   │   │   │   └── pink.scss
│   │   │   ├── global.scss
│   │   │   ├── index.scss
│   │   │   └── reset.scss
│   │   └── App.tsx
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── ui/
│   │   │   │   ├── HomePage.tsx
│   │   │   │   ├── HomePageLazy.async.tsx
│   │   │   │   ├── HomePage.module.scss
│   │   │   │   └── HomePage.stories.tsx
│   │   │   └── index.ts
│   │   ├── Login/
│   │   │   ├── ui/
│   │   │   │   ├── LoginPage.tsx
│   │   │   │   ├── LoginPageLazy.async.tsx
│   │   │   │   └── LoginPage.stories.tsx
│   │   │   └── index.ts
│   │   └── NotFound/
│   │       ├── ui/
│   │       │   ├── NotFoundPage.tsx
│   │       │   ├── NotFoundPage.module.scss
│   │       │   └── NotFoundPage.stories.tsx
│   │       └── index.ts
│   ├── shared/
│   │   ├── assets/
│   │   │   └── icons/
│   │   ├── config/
│   │   │   ├── i18n/
│   │   │   │   ├── i18n.ts
│   │   │   │   └── LanguageIconList.ts
│   │   │   ├── router/
│   │   │   │   └── routePaths.ts
│   │   │   ├── storybook/
│   │   │   │   ├── decorators/
│   │   │   │   │   ├── LanguageDecorator.tsx
│   │   │   │   │   ├── RouterDecorator.tsx
│   │   │   │   │   └── ThemeDecorator.tsx
│   │   │   │   └── index.ts
│   │   │   ├── test/
│   │   │   │   └── setupTests.ts
│   │   │   ├── theme/
│   │   │   │   ├── ThemeContext.ts
│   │   │   │   └── useTheme.ts
│   │   │   └── index.ts
│   │   ├── lib/
│   │   │   ├── classNames/
│   │   │   │   ├── classNames.ts
│   │   │   │   └── classNames.test.ts
│   │   │   └── index.ts
│   │   ├── ui/
│   │   │   ├── AppIcon/
│   │   │   │   ├── AppIcon.tsx
│   │   │   │   ├── AppIcon.module.scss
│   │   │   │   └── AppIcon.stories.tsx
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.scss
│   │   │   │   ├── Button.stories.ts
│   │   │   │   └── Button.test.tsx
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Input.module.scss
│   │   │   │   └── Input.stories.tsx
│   │   │   ├── Spinner/
│   │   │   │   ├── Spinner.tsx
│   │   │   │   ├── snipper.module.scss
│   │   │   │   └── Spinner.stories.tsx
│   │   │   └── index.ts
│   │   └── widget/
│   │       ├── Footer/
│   │       │   ├── index.ts
│   │       │   └── ui/
│   │       │       ├── Footer.tsx
│   │       │       ├── Footer.module.scss
│   │       │       └── Footer.stories.tsx
│   │       ├── Header/
│   │       │   ├── index.ts
│   │       │   └── ui/
│   │       │       ├── Header.tsx
│   │       │       ├── Header.module.scss
│   │       │       ├── Header.stories.tsx
│   │       │       ├── LanguageSwitcher/
│   │       │       │   ├── LanguageSwitcher.tsx
│   │       │       │   └── LanguageSwitcher.stories.tsx
│   │       │       └── ThemeSwitcher/
│   │       │           ├── ThemeSwitcher.tsx
│   │       │           └── ThemeSwitcher.stories.tsx
│   │       ├── PageError/
│   │       │   ├── index.ts
│   │       │   └── ui/
│   │       │       ├── PageError.tsx
│   │       │       ├── PageError.module.scss
│   │       │       └── PageError.stories.tsx
│   │       └── PageLoader/
│   │           ├── index.ts
│   │           └── ui/
│   │               ├── PageLoader.tsx
│   │               ├── PageLoader.module.scss
│   │               └── PageLoader.stories.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── .oxlintrc.json
├── .stylelintrc.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.shims.d.ts
```

---

## 🎨 Design

- **Fonte:** Clarity City, carregada pelo Google Fonts, com sans-serif como alternativa
- **Cores principais:** azul `#1c3ffd`, rosa `#ff8ab3`, branco `#ffffff` e cinza escuro `#343a40`
- **Personalidade:** visual limpo, colorido e voltado ao comércio eletrônico

---

## 💡 O que foi praticado

- Como organizar uma aplicação React com pastas para aplicação, páginas, componentes compartilhados, widgets e configurações utilizando o design **Feature-Sliced**
- Como controlar o tema global com React Context e armazenamento local
- Como criar rotas e navegar entre páginas com React Router
- Como carregar traduções e trocar idiomas com i18next
- Como testar e visualizar componentes com Vitest e Storybook
