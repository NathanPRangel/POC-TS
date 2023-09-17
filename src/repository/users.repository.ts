import { db } from "../database/database.connection";
import { QueryResult } from "pg"; // Importe a tipagem apropriada para o PostgreSQL

async function userexists(name: string): Promise<QueryResult> {

  const resultado = await db.query('SELECT * FROM users WHERE name = $1;', [name]);

  return resultado;
}

async function SalveUser(name: string, email: string): Promise<QueryResult> {

  const result = await db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
  
  return result;
}

async function getUser(): Promise<QueryResult> {

  const resultado = await db.query('SELECT * FROM users;');

  return resultado;
}

async function deleteUser(id: string): Promise<QueryResult> {

  const resultado = await db.query('DELETE FROM users WHERE id = $1;', [id]);

  return resultado;
}

async function updateUser( name: string, email: string, id: string ): Promise<QueryResult> {

  const resultado = await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3;', [name, email, id]);

  return resultado;
}

async function existsUser(id: string): Promise<QueryResult> {

  const resultado = await db.query('SELECT * FROM users WHERE id = $1;', [id]);

  return resultado;
}

export const usersRepository = {
  userexists,
  SalveUser,
  getUser,
  deleteUser,
  updateUser,
  existsUser
};
