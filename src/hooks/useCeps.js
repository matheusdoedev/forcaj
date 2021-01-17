import { useState, useEffect } from "react";

import api from "../services/api";

const useCeps = () => {
  const [cep, setCep] = useState("40800007");
  const [cepData, setCepData] = useState({});

  const handleGetCepData = async () => {
    await api
      .get(`/ceps/${cep}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxO21hdGhldXNkb2VzYW50b3NAZ21haWwuY29tO01hdGhldXM7YWN0aXZlIiwiaWF0IjoxNjEwODExNjc2LCJleHAiOjE2MTA4MTUyNzZ9.f6LB1BcUFNRFvf-MYhq395P8sYO8JUJaQ7lsMT1djCU`,
        },
      })
      .then((r) => {
        setCepData(r.data);
      })
      .catch((err) => console.log(err));
  };

  return { handleGetCepData, cepData, setCep, cepData };
};

export default useCeps;
