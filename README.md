# Site Herbalife - E-commerce Frontend

Um site moderno e responsivo para venda de produtos Herbalife, desenvolvido com HTML5, CSS3 e JavaScript vanilla.

## 📁 Estrutura do Projeto

```
herba life/
├── index.html          # Página inicial
├── produtos.html       # Página de produtos
├── sobre.html          # Página sobre a empresa
├── contato.html        # Página de contato
├── css/
│   └── styles.css      # Estilos CSS compartilhados
├── js/
│   └── script.js       # JavaScript compartilhado
└── README.md           # Este arquivo
```

## 🚀 Funcionalidades

### ✨ Design e UX
- **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Identidade Visual Herbalife** - Cores e elementos visuais da marca
- **Animações Suaves** - Transições e efeitos visuais elegantes
- **Navegação Intuitiva** - Menu fixo com indicador de página ativa

### 🛒 E-commerce
- **10 Produtos** - Shakes, chás, vitaminas e lanches
- **Carrinho de Compras** - Adicionar/remover itens, alterar quantidades
- **Filtros por Categoria** - Filtrar produtos por tipo
- **Checkout via WhatsApp** - Finalização de pedido integrada

### 📱 Páginas
1. **Início** - Hero section, produtos em destaque, depoimentos, galeria
2. **Produtos** - Catálogo completo com filtros e busca
3. **Sobre** - História da empresa, missão, valores, depoimentos
4. **Contato** - Formulário de contato, FAQ, informações de contato

### ⚡ Funcionalidades Interativas
- **Menu Mobile** - Hambúrguer responsivo
- **Modal de Carrinho** - Popup com itens selecionados
- **Galeria com Lightbox** - Visualização ampliada de imagens
- **FAQ Interativo** - Perguntas e respostas expansíveis
- **Notificações** - Feedback visual para ações do usuário
- **Scroll Suave** - Navegação fluida entre seções

## 🎨 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos responsivos com Flexbox e Grid
- **JavaScript ES6+** - Funcionalidades interativas
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia Poppins

## 📱 Responsividade

- **Desktop** (1200px+) - Layout em grid com múltiplas colunas
- **Tablet** (768px - 1199px) - Adaptação automática do grid
- **Mobile** (< 768px) - Layout em coluna única com menu hambúrguer

## 🔧 Como Usar

1. **Abra o arquivo `index.html`** no navegador
2. **Navegue pelas páginas** usando o menu de navegação
3. **Adicione produtos ao carrinho** clicando nos botões
4. **Filtre produtos** por categoria na página de produtos
5. **Finalize a compra** - será redirecionado para o WhatsApp
6. **Preencha o formulário de contato** - também vai para o WhatsApp

## 📞 Integração WhatsApp

### Carrinho de Compras
- Lista completa de produtos e quantidades
- Valores individuais e total
- Mensagem formatada automaticamente

### Formulário de Contato
- Dados do formulário formatados
- Assunto selecionado
- Mensagem personalizada

### Configuração
Para alterar o número do WhatsApp, edite o arquivo `js/script.js`:
```javascript
const whatsappUrl = `https://wa.me/SEU_NUMERO_AQUI?text=${encodeURIComponent(message)}`;
```

## 🎯 Personalização

### Cores
As cores da Herbalife estão definidas no arquivo `css/styles.css`:
```css
:root {
    --primary-green: #00A651;
    --secondary-green: #008B45;
    --accent-orange: #FF6B35;
    /* ... */
}
```

### Produtos
Adicione ou edite produtos no arquivo `js/script.js`:
```javascript
const products = [
    {
        id: 1,
        name: "Nome do Produto",
        category: "categoria",
        price: 99.90,
        image: "url_da_imagem",
        description: "Descrição do produto"
    }
    // ...
];
```

### Informações de Contato
Edite as informações de contato nos arquivos HTML:
- Telefone
- Email
- Endereço
- Redes sociais

## 🌟 Características Especiais

- **SEO Friendly** - Estrutura semântica e meta tags
- **Performance** - Código otimizado e lazy loading
- **Acessibilidade** - Navegação por teclado e contraste adequado
- **Cross-browser** - Compatível com todos os navegadores modernos
- **Mobile First** - Desenvolvido pensando primeiro no mobile

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e comerciais. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a Herbalife**
