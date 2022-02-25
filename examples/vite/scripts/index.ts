import { createTeamMember } from '../prisma/factories/team';

async function main() {
  const data = await createTeamMember();
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
