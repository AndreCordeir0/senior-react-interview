# Sênior

### **OBJETIVO**

Criar uma aplicação de perguntas e respostas (Quiz).

### **Descrição do Projeto**

Você foi contratado para desenvolver uma aplicação WEB que possibilite os usuários a responderem perguntas sobre conhecimentos gerais e ter a opção de visualizar o histórico de tentativas.

**Cenário esperado**:

1. Ao abrir a página deve apresentar ao usuário um input para a quantidade de perguntas que ele deseja responder;
2. Com a quantidade especificada deve direcioná-lo para uma página contendo dois botões: "Start" e "Cancel", sendo respectivamente responsáveis para iniciar o quiz e voltar para a seleção da quantidade de perguntas;
3. Com a quantidade em estado deve-se consultar a [api de perguntas;](https://opentdb.com/api.php?amount=$QUANTIDADE)
4. Após a consulta deve-se apresentar cada pergunta com suas alternativas (Pode ser multi-telas ou todas em uma única tela) e contabilizar as respostas do usuário sem exibir se são corretas ou não;
5. Ao final do quiz, deve exibir um relatório de perguntas e respostas com a quantidade total de acertos e erros e deve exibir cada questão marcando a opção que o usuário respondeu e a opção correta (Caso sejam a mesma apenas a opção correta);
6. O Relatório deve ser salvo no navegador;
7. Caso o usuário esteja na primeira tela e possua um registro salvo em histórico deve-se apresentar a opção de visualizar histórico

### Critérios de avaliação

- A aplicação cumpre os requisitos do teste.
- O repositório possui instruções de como rodar o projeto.
- Legibilidade do código.
- Performance
- Padrão de arquitetura da aplicação
- Conteinerização
- Incluir no README do projeto uma descrição breve das escolhas pessoais de tecnologias implementadas no projeto

### Pontos de atenção

- A aplicação deve utilizar a lib React + Typescript
- Fique a vontade para adicionar bibliotecas externas ou frameworks ao projeto.