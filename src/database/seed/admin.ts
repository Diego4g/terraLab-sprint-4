import { hash } from "bcryptjs";
import { createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash(process.env.PASSWORD_ADMIN, 8);

  await connection.query(
    `INSERT INTO USERS(id, email, password, "isAdmin", created_at)
      values('${id}', 'admin@geoloc.com.br', '${password}', true, 'now()')`
  );

  await connection.close;
}

create().then(() => console.log("User ADMIN created"));
