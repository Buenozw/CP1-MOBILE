📱 Formulário de Cadastro - React Native

Aplicativo desenvolvido em React Native como parte do Checkpoint 01 da disciplina Mobile Application Development.
O projeto consiste em um aplicativo simples contendo um formulário de cadastro, onde o usuário preenche suas informações e visualiza os dados inseridos na própria tela após o envio.

👨‍💻 Autor

João Victor Bueno Castelini da Silva
Curso: Análise e Desenvolvimento de Sistemas
Instituição: FIAP – Paulista

🎯 Objetivo do Projeto

Desenvolver um aplicativo React Native que implemente um formulário de cadastro utilizando os principais componentes da biblioteca React Native e os hooks fundamentais do React.
O aplicativo permite que o usuário:

Preencha um formulário com seus dados
Envie as informações
Visualize os dados cadastrados diretamente na tela

🧱 Tecnologias Utilizadas

React Native
Expo
JavaScript
React Hooks

⚙️ Componentes Utilizados

O aplicativo utiliza os seguintes componentes obrigatórios:

SafeAreaView
View
Text
TextInput
TouchableOpacity
ScrollView
StyleSheet

🧠 Hooks Utilizados
useState

Utilizado para armazenar os dados digitados pelo usuário:

nome
curso
disciplina
descricao
useEffect

Utilizado para executar uma ação quando o aplicativo é iniciado, exibindo uma mensagem no console.

📋 Funcionalidades do Aplicativo

✔ Exibição de um formulário de cadastro
✔ Entrada de dados através de campos de texto
✔ Botão para envio do formulário
✔ Validação simples para garantir que todos os campos estejam preenchidos
✔ Exibição dos dados cadastrados após o envio
✔ Interface estilizada utilizando StyleSheet

🖥️ Estrutura do Projeto
📂 projeto
 ├── App.js
 ├── package.json
 ├── assets
 └── node_modules
 
▶️ Como Executar o Projeto

1️⃣ Instalar dependências
npm install
2️⃣ Iniciar o projeto
npm start

📲 No celular: utilizando o aplicativo Expo Go e escaneando o QR Code

💻 No computador: utilizando um emulador Android ou executando no navegador

🎥 Demonstração
O vídeo demonstrando o funcionamento do aplicativo pode ser acessado no link abaixo:
(Adicionar aqui o link do vídeo)

📌 Requisitos Atendidos

Interface construída com SafeAreaView, View e Text
Campos de entrada com TextInput
Controle de dados com useState
Execução de efeito com useEffect
Botão para envio do formulário
Exibição dos dados cadastrados
Estilização utilizando StyleSheet
