import type { NextApiRequest, NextApiResponse } from 'next';
import { CadastroUsuario } from 'types/CadastroUsuario';

const cadastrarUsuario = (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST'){
    
    const usuario = req.body as CadastroUsuario;

    if(!usuario.nome || usuario.nome.length < 2) {
      return res.status(400).json({erro: 'Nome inválido'})
    }

    if (!usuario.email || usuario.email.length < 5 || !usuario.email.includes('@') || !usuario.email.includes('.')) {
      return res.status(400).json({erro: 'Email inválido'})
    }

    if(!usuario.senha || usuario.senha.length < 4) {
      return res.status(400).json({erro: 'Senha inválida'})
    }

    return res.status(200).json({msg: 'Usuario cadastrado com sucesso'})
  }

  return res.status(405).json({erro: 'Método HTTP informado não é válido'})
}

export default cadastrarUsuario;