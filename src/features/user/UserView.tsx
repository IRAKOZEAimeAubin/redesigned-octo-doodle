import {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {fetchUsers} from './userSlice'

const UserView = () => {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className='bg-sky-100 w-[400px] flex flex-col items-center rounded'>
      <h2 className='font-medium'>List of users:</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul className='flex flex-col items-center'>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default UserView
