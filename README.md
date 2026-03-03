# 👑 ScarletReino

Site motivacional criado com amor para ajudar a Scarlet a chegar na formatura em dezembro!

## 🎯 Como funciona

O site é uma aplicação web simples que:
- Mostra contagem regressiva para a formatura
- Acompanha os treinos semanais (3x por semana)
- Celebra quando ela completa os exercícios
- FICA FURIOSO quando ela pula treino
- Oferece recompensas reais que você define

## 🚀 Como hospedar (GRÁTIS)

### Opção 1: Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com) e crie uma conta
2. Clique em "Add New Project"
3. Arraste a pasta `scarletreino` para lá
4. Pronto! O site estará online em segundos

### Opção 2: Netlify
1. Acesse [netlify.com](https://www.netlify.com)
2. Arraste a pasta para a área indicada
3. Pronto!

### Opção 3: GitHub Pages (Grátis com domínio customizado)
1. Crie um repositório no GitHub
2. Suba os arquivos
3. Ative GitHub Pages nas configurações

## 🌐 Como comprar um domínio

### Domínios baratos:
| Empresa | Preço aproximado | Link |
|---------|-----------------|------|
| Godzilla | R$30-40/ano | godaddy.com.br |
| HostGator | R$40-50/ano | hostgator.com.br |
| Namecheap | R$35-45/ano | namecheap.com |

### Conectando domínio:
1. Compre o domínio (ex: scarletreino.com)
2. No Vercel/Netlify, vá em "Domains"
3. Siga as instruções para conectar

## ⚙️ Configuração

### Mudar a data da formatura
Abra `script.js` e edite a linha:
```javascript
const FORMATURE_DATE = new Date('2026-12-05T23:59:59');
```
Coloque a data exata da formatura da Scarlet!

### Mudar as recompensas
Abra `index.html` e procure pela seção `<!-- Rewards Section -->`. Edite os textos das recompensas como quiser!

### Adicionar mais frases
No `script.js`, edite os arrays:
- `motivationalQuotes` - frases motivacionais
- `angryPhrases` - frases de FÚRIA
- `celebrationPhrases` - frases de celebração

## 💾 Como os dados são salvos

O site usa `localStorage` do navegador. Isso significa:
- Os dados ficam salvos no celular/computador dela
- Se ela limpar o cache do navegador, os dados somem
- Ela precisa usar sempre o mesmo dispositivo

## 🎁 Features

1. **Contagem regressiva** - Para a formatura
2. **Sistema de Fúria** - O mascote fica vermelho e xinga de forma engraçada
3. **Checklist completo** - Todos os exercícios do treino
4. **Explicação dos exercícios** - Botão "Como fazer" em cada exercício
5. **Streak** - Dias seguidos treinando
6. **Recompensas** - Desbloqueia em 3, 9, 18 e 36 treinos
7. **Celebração com confetes** - Quando completa um treino
8. **Frases engraçadas** - Que variam conforme o desempenho dela
9. **3 dias de treino** - A, B e C organizados por supersets

## 💡 Dicas para usar

1. Coloque o site como favorito no celular dela
2. Personalize as frases para serem mais engraçadas para vocês dois
3. Defina recompensas que você realmente vai cumprir!
4. Acompanhe o progresso junto com ela
5. Celebre cada treino completado!

## 🎨 Personalização

Cores principais (em `styles.css`):
- Rosa: #e91e63
- Roxo: #9c27b0
- Laranja: #ff9800
- Verde (sucesso): #4caf50
- Vermelho (fúria): #f44336

---

Feito com ❤️ para a melhor médica do mundo

"Lembre-se: a formatura em dezembro não vai esperar. Cada treino conta!" 💪
