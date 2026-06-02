# 🚀 Guia de Deploy - ALFTech Solar

## 📋 Situação Atual

✅ Projeto completo e pronto para deploy
✅ Git inicializado e primeiro commit feito
✅ Todos os arquivos commitados

## 🌐 Opções de Deploy Gratuito

### Opção 1: GitHub Pages (Recomendado) ⭐

#### Passo 1: Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. **Repository name**: `alftech-solar`
3. **Description**: "Landing Page ALFTech Solar - Energia Solar Sustentável"
4. Marque como **Public**
5. **NÃO** marque "Add a README file"
6. Clique em **"Create repository"**

#### Passo 2: Conectar e Fazer Push

No terminal, execute:

```bash
cd /Users/lucassilvadesousa/Desktop/alftech-solar

# Adicionar repositório remoto (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/alftech-solar.git

# Fazer push
git push -u origin main
```

**Nota**: Se pedir credenciais, use seu username e um **Personal Access Token** (não a senha).

#### Como criar Personal Access Token:
1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Nome: `Deploy ALFTech Solar`
4. Marque: **`repo`**
5. Clique em "Generate token"
6. **COPIE O TOKEN** e use como senha

#### Passo 3: Ativar GitHub Pages

1. No seu repositório, vá em **Settings** > **Pages**
2. Em **"Source"**, selecione:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
3. Clique em **"Save"**
4. Aguarde 2-3 minutos

#### 🎉 Seu site estará em:
```
https://SEU-USUARIO.github.io/alftech-solar/
```

---

### Opção 2: Netlify (Mais Fácil!) 🚀

#### Método A: Drag & Drop

1. Acesse: https://www.netlify.com
2. Faça login (pode usar conta do GitHub)
3. Clique em **"Add new site"** > **"Deploy manually"**
4. **Arraste a pasta `alftech-solar`** para a área indicada
5. Aguarde o upload
6. **PRONTO!** 🎉

Você receberá um link como:
```
https://random-name-123456.netlify.app
```

#### Personalizar domínio no Netlify:
1. Vá em **"Site settings"** > **"Domain management"**
2. Clique em **"Options"** > **"Edit site name"**
3. Escolha: `alftech-solar`
4. Seu site ficará: `https://alftech-solar.netlify.app`

#### Método B: Deploy via GitHub (Recomendado)

1. Siga os passos 1-2 do GitHub Pages acima
2. No Netlify, clique em **"Add new site"** > **"Import an existing project"**
3. Escolha **"Deploy with GitHub"**
4. Autorize o Netlify
5. Selecione o repositório `alftech-solar`
6. Clique em **"Deploy site"**
7. **PRONTO!** 🎉

**Vantagem**: Atualizações automáticas a cada `git push`!

---

### Opção 3: Vercel 🔥

1. Acesse: https://vercel.com
2. Faça login (pode usar conta do GitHub)
3. Clique em **"Add New"** > **"Project"**
4. Importe o repositório `alftech-solar`
5. Clique em **"Deploy"**
6. **PRONTO!** 🎉

Seu site estará em:
```
https://alftech-solar.vercel.app
```

---

## 📱 Compartilhar o Link

### 1. Link Direto
Compartilhe o link gerado pela plataforma escolhida.

### 2. QR Code
1. Acesse: https://www.qr-code-generator.com
2. Cole o link do seu site
3. Baixe o QR Code
4. Use em materiais impressos

### 3. Link Encurtado
1. Acesse: https://bitly.com
2. Cole o link
3. Crie um link curto: `bit.ly/alftech-solar`

---

## 🔄 Como Atualizar o Site

Sempre que fizer alterações:

```bash
cd /Users/lucassilvadesousa/Desktop/alftech-solar

# Adicionar alterações
git add .

# Fazer commit
git commit -m "Descrição das alterações"

# Enviar para o GitHub
git push
```

**Netlify e Vercel**: Atualizam automaticamente após o push!
**GitHub Pages**: Aguarde 1-2 minutos após o push.

---

## 🎨 Domínio Personalizado (Opcional)

### Comprar Domínio

**Registro.br** (domínios .br):
- Acesse: https://registro.br
- Pesquise: `alftechsolar.com.br`
- Custo: ~R$ 40/ano

**Hostinger**:
- Acesse: https://www.hostinger.com.br
- Domínios .com a partir de R$ 40/ano

### Configurar Domínio

#### No GitHub Pages:
1. Settings > Pages > Custom domain
2. Digite seu domínio
3. Configure DNS no provedor

#### No Netlify/Vercel:
1. Domain Settings > Add custom domain
2. Siga as instruções de DNS

---

## ✅ Checklist Pré-Deploy

Antes de compartilhar o link, verifique:

- [ ] Todas as informações estão corretas
- [ ] Número do WhatsApp atualizado
- [ ] Links das redes sociais funcionam
- [ ] Simulador funciona corretamente
- [ ] FAQ abre e fecha corretamente
- [ ] Menu mobile funciona
- [ ] Site responsivo (teste no celular)
- [ ] Todas as imagens carregam
- [ ] Botão flutuante do WhatsApp funciona

---

## 🆘 Problemas Comuns

### "Authentication failed" ao fazer push
**Solução**: Use Personal Access Token em vez da senha

### Site não aparece no GitHub Pages
**Solução**: 
- Aguarde 5-10 minutos
- Verifique se a branch está correta
- Limpe o cache do navegador

### Imagens não aparecem
**Solução**: 
- Verifique os caminhos das imagens
- Use caminhos relativos
- Verifique o console do navegador (F12)

---

## 📞 Próximos Passos

Após o deploy:

1. ✅ Teste o site em diferentes dispositivos
2. ✅ Compartilhe com a equipe
3. ✅ Configure Google Analytics (opcional)
4. ✅ Adicione o site no Google Search Console
5. ✅ Crie campanhas de marketing
6. ✅ Monitore conversões

---

## 🎉 Parabéns!

Seu site está pronto para receber visitantes e gerar leads!

**Boa sorte com a ALFTech Solar!** 🌞⚡

---

*Última atualização: Junho 2024*