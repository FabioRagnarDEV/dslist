# 🎮 DSList - Backend

API REST desenvolvida com Java e Spring Boot para gerenciamento de listas de jogos. Este projeto faz parte de um estudo prático de desenvolvimento backend, onde é possível criar, listar e reorganizar jogos em diferentes listas temáticas.

---

## 🚀 Tecnologias utilizadas
- Java 17
- Spring Boot
- Spring Data JPA
- Banco de Dados H2 (para testes)
- Maven
- Lombok
- Spring Web

---

## 🔗 Funcionalidades
- ✅ Listagem de todos os jogos
- ✅ Consulta detalhada de um jogo específico
- ✅ Listagem de todas as listas de jogos
- ✅ Listagem dos jogos pertencentes a uma lista
- ✅ Alteração da ordem dos jogos dentro de uma lista

---

## 🗂️ Arquitetura
O projeto segue uma arquitetura em camadas:

- **Controller:** Responsável por expor os endpoints da API.
- **Service:** Camada de lógica de negócios.
- **Repository:** Camada de acesso e manipulação de dados no banco.
- **Model (Entities):** Mapeamento das tabelas do banco de dados.
- **DTOs:** Camada de transporte de dados, protegendo as entidades.

---

## 🏛️ Modelo de Domínio

O diagrama abaixo representa o modelo de domínio da aplicação:

![image](https://github.com/user-attachments/assets/8559d694-a703-41f2-a86c-4e073c3c6883)


### 🔹 Entidades:

- **Game**
  - id (Long)
  - title (String)
  - year (Integer)
  - genre (String)
  - platforms (String)
  - score (Double)
  - imgUrl (String)
  - shortDescription (String)
  - longDescription (String)

- **GameList**
  - id (Long)
  - name (String)

- **Belonging**
  - position (Integer)
  - (Relacionamento entre Game e GameList com controle de ordenação)

---

## 🔥 Endpoints

| Método | Endpoint                            | Descrição                                     |
|--------|--------------------------------------|------------------------------------------------|
| GET    | `/games`                            | Lista todos os jogos                          |
| GET    | `/games/{id}`                        | Busca detalhes de um jogo específico           |
| GET    | `/lists`                             | Lista todas as listas de jogos                |
| GET    | `/lists/{listId}/games`              | Lista jogos de uma lista específica            |
| POST   | `/lists/{listId}/replacement`        | Move um jogo da posição X para Y na lista     |

---

## 💾 Banco de Dados

- Banco **H2** em memória, utilizado para desenvolvimento e testes locais.
- As tabelas são geradas automaticamente via JPA/Hibernate.
- Arquivo `data.sql` com carga inicial de dados.

---
