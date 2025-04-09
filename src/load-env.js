const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// Carrega o .env principal da raiz do projeto
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const envProject = process.env.ENV_PROJECT || 'localstack';
console.log('[INFO] ENV_PROJECT definido como:', envProject);

// Caminho para o arquivo de variáveis específico
const envFilePath = path.resolve(__dirname, '..', 'environments', `${envProject}.env`);

if (!fs.existsSync(envFilePath)) {
  console.error('[ERRO] Arquivo de ambiente não encontrado:', envFilePath);
  process.exit(1);
}

// Carrega o arquivo de ambiente específico
dotenv.config({ path: envFilePath });

console.log('[INFO] Variáveis carregadas:');
console.log('AWS_REGION:', process.env.AWS_REGION);
console.log('CLIENT_SECRET_ARN:', process.env.CLIENT_SECRET_ARN);
