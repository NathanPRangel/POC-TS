import httpStatus from "http-status";
import { Request, Response } from "express";
import { User } from "../protocols/users.protocols";
import { usersRepository } from "../repository/users.repository";
import { errors } from "../erros/erros";

import { usersServices } from "../services/users.services";

export async function postUser(req: Request, res: Response) {
  try {
    const { name, email } = req.body as User;
    await usersServices.postUser(name, email);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro ao criar usuário.");
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const users = await usersRepository.getUser();
    res.status(httpStatus.OK).send(users.rows);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro ao buscar usuários.");
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await usersRepository.deleteUser(id);
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    console.error(`Erro ao excluir usuário com ID ${req.params.id}:`, error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Erro ao excluir usuário com ID ${req.params.id}.`);
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, email } = req.body as User;
    
    const resultado = await usersRepository.existsUser(id);
    if (resultado.rows.length === 0) {
      throw errors.notFound("Esse usuário");
    }
    
    await usersRepository.updateUser(name, email, id);
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    console.error(`Erro ao atualizar usuário com ID ${req.params.id}:`, error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Erro ao atualizar usuário com ID ${req.params.id}.`);
  }
}
