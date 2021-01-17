import { useState, createContext, useState } from "react";
import api from "../services/api";

export const JovensContext = createContext();

export const JovensContextComponent = ({ children }) => {
    const [cor, setCor] = useState("");
    const [cpf, setCPF] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState({
        bairro: "",
        cep: "",
        complemento: "",
        localidade: "",
        logradouro: "",
        uf: "",
    });
    const [escola, setEscola] = useState({
        id: 0,
    });
    const [genero, setGenero] = useState("");
    const [grauDeInstrucao, setGrauDeInstrucao] = useState("");
    const [nome, setNome] = useState("");
    const [numeroEndereco, setNumeroEndereco] = useState("");
    const [redeSocialList, setRedeSocialList] = useState([
        { "url": "" }
    ]);
    const [responsavel, setResponsavel] = useState({
        "mae": "",
        "pai": ""
    });
    const [rg, setRG] = useState("");
    const [telefone, setTelefone] = useState({
        "celuar": "",
        "fixo": "",
    });

    const [id, setId] = useState(0);

    const [jovem, setJovem] = useState({})

    const handlePostCreateJovem = async () => {
        await api.post("/jovens", {
            cor,
            cpf,
            dataNascimento,
            email,
            endereco,
            escola,
            genero,
            grauDeInstrucao,
            nome,
            numeroEndereco,
            redeSocialList,
            responsavel,
            rg,
            telefone,
        }, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxO21hdGhldXNkb2VzYW50b3NAZ21haWwuY29tO01hdGhldXM7YWN0aXZlIiwiaWF0IjoxNjEwODEyODE2LCJleHAiOjE2MTA4MTY0MTZ9.lDOpgzdqARQ_4px19z_mTnTvGGwxKy9FpA6Uy2QA_kw`
            }
        }).then(r => {
            // redirect to next page

        }).catch(err => console.log(err));
    };

    const handleGetJovemPorId = async () => {
        await api.get(`/jovens/${id}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxO21hdGhldXNkb2VzYW50b3NAZ21haWwuY29tO01hdGhldXM7YWN0aXZlIiwiaWF0IjoxNjEwODEyODE2LCJleHAiOjE2MTA4MTY0MTZ9.lDOpgzdqARQ_4px19z_mTnTvGGwxKy9FpA6Uy2QA_kw`
            }
        }).then(r => setJovem(r.data)).catch(err => console.log(err));
    };

    const handlePostCreateJovem = async () => {
            await api.
    };

    const handlePostCreateJovem = async () => {
            await api.
    };

    return(

    );
}