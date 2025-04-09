const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// Carrega o .env principal da raiz do projeto
dotenv.config({ path: path.resolve(__dirname, '.env') });

const envProject = process.env.ENV_PROJECT;

if (!envProject) {
  console.warn('[WARN] ENV_PROJECT não está definido no .env. Nenhuma variável adicional será carregada.');
} else {
  const envFilePath = path.resolve(__dirname, 'environments', envProject);

  if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath });
    console.log(`[INFO] Variáveis de ambiente carregadas de: environments/${envProject}`);
  } else {
    console.warn(`[WARN] Arquivo ${envFilePath} não encontrado.`);
  }
}
