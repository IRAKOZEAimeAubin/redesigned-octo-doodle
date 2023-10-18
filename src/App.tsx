import CakeView from './features/cake/CakeView'
import IceCreamView from './features/iceCream/IceCreamView'
import UserView from './features/user/UserView'

function App() {
  return (
    <div className='flex flex-col max-w-full items-center gap-4 mt-5'>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App
