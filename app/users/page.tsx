import UserTable from '@/app/components/UserTable'
import { User } from './columns'

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  const data = await res.json()
  return data
}

export default async function Users() {
  const users = await getUsers()

  return (
    <section className='py-24'>
      <div className='container'>
        <UserTable users={users} />
      </div>
    </section>
  )
}
