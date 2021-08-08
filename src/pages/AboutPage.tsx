import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Информация</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
        soluta ipsam ad placeat laudantium facilis fuga cumque dolorem explicabo
        atque.
      </p>
      <button className='btn' onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};
