import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/15108807?s=460&u=3098d945a866ac14c6f87a71a8b0e9e3449e65b5&v=4"
            alt="Antônio Sousa"
          />
          <div>
            <strong>antonioaads/github-explorer</strong>
            <p> Descrição do repositório </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/15108807?s=460&u=3098d945a866ac14c6f87a71a8b0e9e3449e65b5&v=4"
            alt="Antônio Sousa"
          />
          <div>
            <strong>antonioaads/github-explorer</strong>
            <p> Descrição do repositório </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/15108807?s=460&u=3098d945a866ac14c6f87a71a8b0e9e3449e65b5&v=4"
            alt="Antônio Sousa"
          />
          <div>
            <strong>antonioaads/github-explorer</strong>
            <p> Descrição do repositório </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
