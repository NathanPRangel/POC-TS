import { usersRepository } from "../repository/users.repository";
import { errors } from "../erros/erros";
import { User } from "../protocols/users.protocols";

export async function postUser(name: string, email: string): Promise<void> {

        const user: { rows: User[] } = await usersRepository.userexists (name);
      
        if (user.rows.length > 0) throw errors.conflict("Esse usuário")

        await usersRepository.SalveUser(name,email);

}

export const usersServices = { postUser };