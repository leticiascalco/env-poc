const path = require('path');
const dotenv = require('dotenv');

// Força o ENV_PROJECT antes de carregar os envs (evita problema com Jest)
process.env.ENV_PROJECT = process.env.ENV_PROJECT || 'localstack';

// Carrega o .env da raiz do projeto
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

// Usa a variável definida no .env
const envProject = process.env.ENV_PROJECT;

// Carrega o arquivo de ambiente correspondente
dotenv.config({ path: path.resolve(__dirname, '..', 'environments', `${envProject}.env`) });

describe('Ambiente carregado', () => {
    it('deve carregar AWS_REGION da env correta', () => {
      expect(process.env.AWS_REGION).toBeDefined();
    });
  
    it('deve carregar CLIENT_SECRET_ARN da env correta', () => {
      expect(process.env.CLIENT_SECRET_ARN).toMatch(/^arn:aws/);
    });
  });
  
