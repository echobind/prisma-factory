import { TeamMemberFactory } from 'prisma/factories/team';

async function main() {
  const data = await TeamMemberFactory.create();
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
