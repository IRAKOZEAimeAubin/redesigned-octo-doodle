import {useState} from 'react'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import {ordered, restocked} from './cakeSlice'

const CakeView = () => {
  const [order, setOrder] = useState(1)
  const [restock, setRestock] = useState(1)
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
  const dispatch = useAppDispatch()
  return (
    <div className='bg-orange-100 w-[400px] flex flex-col gap-2 items-center rounded'>
      <h2 className='mt-2'>
        Number of cakes - <span className='font-bold'>{numOfCakes}</span>
      </h2>
      <input
        type='number'
        className='p-2 w-36 rounded'
        value={order}
        onChange={(e) => setOrder(parseInt(e.target.value))}
      />
      <button
        className='bg-green-200 py-1 px-2 rounded-md font-medium w-36'
        onClick={() => dispatch(ordered(1))}
      >
        Order Cake
      </button>
      <input
        type='number'
        className='p-2 w-36 rounded'
        value={restock}
        onChange={(e) => setRestock(parseInt(e.target.value))}
      />
      <button
        className='bg-red-200 py-1 px-2 rounded-md font-medium mb-2 w-36'
        onClick={() => dispatch(restocked(4))}
      >
        Restock Cake
      </button>
    </div>
  )
}

export default CakeView
