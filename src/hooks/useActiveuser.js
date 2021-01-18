import { useHistory, useParams } from "react-router-dom";

import api from "../services/api";

const useActivateUser = () => {
  const router = useHistory();

  const token = useParams().hash;

  if (!token) {
    router.push("/cadastro/email-invalido");
  }

  const handleConfirmAccount = async () => {
    return await api.get(`/auth/confirmAccount/?token=${token}`);
  };

  const response = handleConfirmAccount();

  if (response.status >= 400) {
    router.push("/cadastro/email-invalido");
  } else {
    router.push("/");
  }
};

export default useActivateUser;
