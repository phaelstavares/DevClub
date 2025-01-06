type User = {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

const user: User = {
    id: 1,
    username: "phaelstavares",
    password: "138Fvhd2Vl",
    createdAt: new Date(),
    updatedAt: new Date(),
};

type PartialUser = Partial<User>;
// posso deixar todos os comandos opcional.

type OmitUser = Omit<User, "id" | "createdAt">;
// posso especificar qual comando eu quero omitir.

type SearchUser = Pick<User, "username">;
// posso escolher qual irei utilizar.

const user2: OmitUser = {
    username: "rapha",
    password: "rv3xh85V4",
    updatedAt: new Date(),
};

const user3: SearchUser = {
    username: "phapha",
};