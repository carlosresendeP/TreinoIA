
# FitnessAI
Um projeto de inteligência artificial para geração de treinos personalizados utilizando a API do ChatGPT no backend e uma interface moderna com Vite + React no frontend.

---

## 📌 Sobre o projeto

O **FitnessAI** é uma aplicação web que permite ao usuário gerar receitas culinárias personalizadas com base nos ingredientes disponíveis ou no tipo de prato desejado. A aplicação utiliza a API do ChatGPT para criar as receitas de forma dinâmica e criativa.

---

## 📸 Demonstração

![Captura de tela 2025-07-07 205721](https://github.com/user-attachments/assets/de49a365-fbb4-46d1-a565-7d1eb280eb19)



---

## 🚀 Tecnologias utilizadas

### 💽 Frontend
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- JavaScript
- CSS

### ⚙️ Backend
- Node.js
- Express
- API do ChatGPT (OpenAI)

---

## 🧠 Como funciona

1. O usuário acessa a interface web.
2. Digita os ingredientes ou o tipo de prato desejado.
3. O frontend envia essa informação para o backend via requisição HTTP.
4. O backend processa a requisição e consulta a API do ChatGPT.
5. A IA gera uma receita personalizada.
6. O backend devolve a resposta para o frontend.
7. A receita é exibida de forma organizada na tela para o usuário.

---

## 📂 Estrutura do projeto

```
devReceita/
├── backend/
│   ├── index.js
│   ├── routes/
│   └── services/
│       └── openaiService.js
│   └── .env
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── src/
│       ├── App.jsx
│       ├── components/
│       └── services/
├── package.json
├── README.md
```

---

## 📦 Como instalar e executar o projeto

### 🔧 Backend

```bash
cd API
npm install
```
Crie um arquivo `.env` com:
```
OPENAI_API_KEY=sua_chave_aqui
```
Inicie o servidor:
```bash
node index.js
```

### 🔡 Frontend

```bash
cd interface
npm install
npm run dev
```
Acesse no navegador:
```
http://localhost:3001
```

---

## 📏 Funcionalidades

- ✅ Geração de treinos personalizadas via inteligência artificial.
- ✅ Interface rápida e responsiva com Vite + React.
- ✅ Comunicação via API REST entre frontend e backend.
- ✅ Possibilidade de personalizar os pedidos para a IA.
- ✅ Exibição organizada dos exercicios.

---

## 📖 Aprendizados

Durante o desenvolvimento do **FitnessAI**, foram aplicadas práticas modernas de desenvolvimento web, integração de APIs de IA e manipulação de requisições HTTP. O projeto reforçou conceitos como:

- Consumo de APIs externas com segurança via `.env`
- Integração frontend-backend via REST
- Uso de Vite para build rápido no React
- Boas práticas de organização de projeto

---

## 📬 Contato

**Carlos Alexandre**  
📧 seu-email@gmail.com  
https://github.com/carlosresendeP

---

## 📃 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
