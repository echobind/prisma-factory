import { createUser } from '../prisma/factories/user';

async function main() {
  const data = await createUser();
  console.log(data);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
