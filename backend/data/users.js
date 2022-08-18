import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('xxxx', 10),
    isAdmin: true,
  },

  {
    name: 'kaleab bayih',
    email: 'kaleab@example.com',
    password: bcrypt.hashSync('xxxx', 10),
  },
  {
    name: 'john john',
    email: 'john@example.com',
    password: bcrypt.hashSync('xxxx', 10),
  },
]

export default users
