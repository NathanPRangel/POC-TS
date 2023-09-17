import pg from "pg";
import dotenv from "dotenv"; // Certifique-se de importar dotenv para carregar variáveis de ambiente a partir do .env

dotenv.config(); // Carregue as variáveis de ambiente a partir do arquivo .env

const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.DATABASE_URL, // Use a variável de ambiente DATABASE_URL
  ssl: process.env.NODE_ENV === "production", // Opcional: habilitar SSL em produção
});

export { db };
