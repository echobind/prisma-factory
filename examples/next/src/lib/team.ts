import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Member {
  role: string;
  image: string;
  name: string;
  twitter: string;
  linkedin: string;
  description: string;
}

export const teamMembers = [
  {
    role: 'Co-Founder / CEO',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Camila West',
    twitter: '#',
    linkedin: '#',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    role: 'Co-Founder / CTO',
    image:
      'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Mark Linhsorg',
    twitter: '#',
    linkedin: '#',
    description: 'Habitant morbi tristique senectus et netus et malesuada fames. Vestibulum morbi',
  },
  {
    role: 'Marketing Manager',
    image:
      'https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Kim Yung',
    twitter: '#',
    linkedin: '#',
    description: 'Quis risus sed vulputate odio ut enim blandit volutpat. Amet cursus sit amet.',
  },
  {
    role: 'Manager, Business Relations',
    image:
      'https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxibGFjayUyMGd1eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Morgan Adebayo',
    twitter: '#',
    linkedin: '#',
    description:
      'Consectetur libero id faucibus nisl tincidunt eget nullam fringilla urna porttitor.',
  },
  {
    role: 'Chief Operating Officer',
    image:
      'https://images.unsplash.com/photo-1522938974444-f12497b69347?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Bimbo Akintola',
    twitter: '#',
    linkedin: '#',
    description:
      'Mi eget mauris pharetra et ultrices neque ornare aenean massa eget egestas purus.',
  },
  {
    role: 'Head of Human Resources',
    image:
      'https://images.unsplash.com/photo-1574034589502-9f8a1ed46fa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Yasmine Jones',
    twitter: '#',
    linkedin: '#',
    description: 'Diam maecenas sed enim ut sem viverra aliquet eget magna ac placerat vestibulum.',
  },
];

export async function getTeamMembers() {
  return await prisma.teamMember.findMany({
    select: {
      id: true,
      name: true,
      role: true,
      description: true,
      image: true,
      twitter: true,
      linkedin: true,
    },
    take: 6,
  });
}
