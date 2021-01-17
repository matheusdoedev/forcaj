import { useState, useEffect, createContext } from "react";

import api from "../services/api";

export const EscolasContext = createContext();

export const EscolasContextComponent = ({ children }) => {
  const [escolas, setEscolas] = useState([]);
  const [id, setID] = useState(515);
  const [uf, setUF] = useState("ba");

  const [error, setError] = useState("");

  const handleGetEscolasPeloId = async () => {
    await api
      .get(`/escolas/${id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxO21hdGhldXNkb2VzYW50b3NAZ21haWwuY29tO01hdGhldXM7YWN0aXZlIiwiaWF0IjoxNjEwODEyODE2LCJleHAiOjE2MTA4MTY0MTZ9.lDOpgzdqARQ_4px19z_mTnTvGGwxKy9FpA6Uy2QA_kw`,
        },
      })
      .then((r) => setEscolas(r.data))
      .catch((err) => console.log(err));
  };

  const handleGetEscolasPorUf = async () => {
    await api
      .get(`/escolas/uf/uf`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxO21hdGhldXNkb2VzYW50b3NAZ21haWwuY29tO01hdGhldXM7YWN0aXZlIiwiaWF0IjoxNjEwODEyODE2LCJleHAiOjE2MTA4MTY0MTZ9.lDOpgzdqARQ_4px19z_mTnTvGGwxKy9FpA6Uy2QA_kw`,
        },
        params: {
          direction: "ASC",
          page: 0,
          size: 10,
          sort: "nomeEscola",
          uf,
        },
      })
      .then((r) => {
        if (r.data.content.length > 0) {
          setEscolas(r.data.content);
        } else {
          setError("Não foi possível encontrar a escola");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <EscolasContext.Provider
      value={{
        handleGetEscolasPeloId,
        escolas,
        setID,
        handleGetEscolasPorUf,
        setUF,
      }}
    >
      {children}
    </EscolasContext.Provider>
  );
};
