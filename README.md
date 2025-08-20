# Site Arte em Madeira

Site completo e responsivo para uma loja de artesanato em madeira.

## Estrutura do Projeto

- `index.html` - Página inicial
- `sobre.html` - Página sobre a empresa
- `produtos.html` - Página de produtos
- `contato.html` - Página de contato com formulário
- `galeria.html` - Página da galeria de imagens
- `css/` - Pasta com os arquivos de estilo
  - `style.css` - Estilos principais
  - `responsive.css` - Estilos responsivos
- `js/` - Pasta com os arquivos JavaScript
  - `script.js` - Funcionalidades principais
  - `email.js` - Configuração do formulário de contato
- `img/` - Pasta com as imagens do site

## Funcionalidades

1. Design responsivo para todos os dispositivos
2. Menu mobile interativo
3. Filtro de produtos por categoria
4. Galeria de imagens com lightbox
5. Formulário de contato funcional com FormSubmit
6. Animação de scroll suave
7. Validação de formulário

## Publicação no GitHub Pages

1. Faça upload de todos os arquivos para um repositório no GitHub
2. Vá nas configurações do repositório
3. Na seção "Pages", selecione a branch principal (main/master)
4. Aguarde alguns minutos e seu site estará publicado em: `https://seuusuario.github.io/nome-do-repositorio`

## Personalização do Formulário de Contato

Para receber os emails do formulário de contato:

1. No arquivo `contato.html`, localize a linha:
   ```html
   <form id="formContato" action="https://formsubmit.co/seu-email@exemplo.com" method="POST">
