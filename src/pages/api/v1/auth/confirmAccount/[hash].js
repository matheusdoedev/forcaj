import { useRouter } from "next/router";
import api from '../../../../../services/api'
 
function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
}

export default async function activateUser(req, res) {
   const router = useRouter();

    const token = req.query.hash; 
    if (!token) {
      return res.status(401).json({message: 'Cannot Validate an User!'})
    }
  
    const response = await api.get(`/auth/confirmAccount/?token=${token}`);

    if (response.status >= 400) {
      return res.status(401).json({message: 'Não foi possivel validar o usúario!'})

    } else {
      router.push("/");
      res.writeHead(307, { Location: '/' });
      res.end();
    }
  }