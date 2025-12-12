# 💼 Portfólio Pessoal

Portfólio profissional desenvolvido com Next.js 15, TypeScript e Tailwind CSS. Apresenta projetos, experiências, stack tecnológica e informações de contato.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização com utility-first
- **Lucide React** - Ícones modernos
- **React Icons** - Biblioteca de ícones complementar

## ✨ Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Animações suaves com scroll reveal
- ✅ Terminal interativo com múltiplas linguagens
- ✅ Seções: Hero, Sobre, Stack, Projetos, Experiência, Educação, Contato
- ✅ Suporte para múltiplos repositórios GitHub por projeto
- ✅ Dark mode otimizado
- ✅ Performance otimizada com Next.js Image

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portifolio.git

# Entre na pasta
cd portifolio

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/              # App Router (Next.js 15)
├── components/       # Componentes React
│   ├── sections/    # Seções da página
│   └── ui/          # Componentes reutilizáveis
├── data/            # Dados do portfólio (PT)
├── hooks/           # Custom hooks
└── types/           # TypeScript types
```

## 📝 Personalização

Edite os dados em `src/data/portfolioPT.ts`:
- Informações pessoais
- Projetos
- Experiências profissionais
- Educação e cursos
- Stack tecnológica
- Links de contato

## 🎨 Customização de Estilos

As cores e temas podem ser ajustados em:
- `tailwind.config.ts` - Cores, fontes e tema
- `src/app/globals.css` - Variáveis CSS e animações

## 🌐 Deploy

O projeto está configurado para deploy na Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/portifolio)

### Branches:
- `main` - Produção (deploy automático)
- `develop` - Desenvolvimento (preview)

## 📄 Licença

Este projeto é de código aberto para fins educacionais.
