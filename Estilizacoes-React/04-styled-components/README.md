# Implementação com Styled Components

Esta implementação utiliza Styled Components para sua estilização.

## Principais Recursos

- Essa versão do projeto utiliza o Styled Components em sua estilização, mantendo a mesma estilização das demais versões do projetos;
- Implementa design responsivo com consultas de media-querys;
- Suporte para: Tema escuro e Produtos Favoritos com persistência em localStorage;
- Estrutura baseada em componentes reutilizáveis;
- Focus ring para acessibilidade;
- Estados de carregamento tipo Skeleton para evitar mudanças bruscas de layout.

## Estrutura

- `src/assets/` - Recursos de imagem;
- `src/components/` - Componentes React, com estilização via Styled Components aplicados diretamente ;
- `src/hooks/` - Hook Personalizado para lidar com o LocalStorage;

## Abordagem de Estilização

- Estilos aplicados diretamente nos componentes através do Styled Components;

## Componentes

- Barra de navegação com alternância de tema persistente ;
- ProductGrid com colunas responsivas;
- ProductCard com imagem, título com ellipsis , preço, icone de favoritos persistente;
- Botão com variantes solid,outline e ghost;
- Componentes de carregamento tipo Skeleton.

## Executando o Aplicativo

1. No terminal, acessar a pasta do projeto e do sub-projeto, conforme o tipo de estilização desejada;
2. Digitar: npm install - para instalar os pacotes necessários;
3. Digitar: npm start - para rodar o projeto no navegador.
