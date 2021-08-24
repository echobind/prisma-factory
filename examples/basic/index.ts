import { createMusicianFactory } from '@generated/prisma-factory'

export const MusicianFactory = createMusicianFactory({ 
  email: 'asdf@wee.net',
  name: "My Name"
})

console.log(MusicianFactory.build())