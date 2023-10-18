import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {ordered, restocked} from './iceCreamSlice'
import {useState} from 'react'

const IceCreamView = () => {
  const [order, setOrder] = useState(1)
  const [restock, setRestock] = useState(1)
  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch = useAppDispatch()
  return (
    <div className='bg-amber-100 w-[400px] flex flex-col gap-2 items-center rounded'>
      <h2 className='mt-2'>
        Number of ice creams -{' '}
        <span className='font-bold'>{numOfIceCreams}</span>
      </h2>
      <input
        type='number'
        className='p-2 w-44 rounded'
        value={order}
        onChange={(e) => setOrder(parseInt(e.target.value))}
      />
      <button
        className='bg-green-200 py-1 px-2 rounded-md font-medium w-44'
        onClick={() => dispatch(ordered(order))}
      >
        Order Ice Cream
      </button>
      <input
        type='number'
        className='p-2 w-44 rounded'
        value={restock}
        onChange={(e) => setRestock(parseInt(e.target.value))}
      />
      <button
        className='bg-red-200 py-1 px-2 rounded-md font-medium mb-2 w-44'
        onClick={() => dispatch(restocked(restock))}
      >
        Restock Ice Cream
      </button>
    </div>
  )
}

export default IceCreamView
