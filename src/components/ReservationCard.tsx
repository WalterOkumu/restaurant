import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice'
import { removeReservation } from '../features/reservationsSlice'
import { v4 as uuid } from 'uuid'

interface ReservationCardTypes {
  name: string
  index: number
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch()

  return (
    <div
      className='reservation-card-container'
      onClick={() => {
        dispatch(
          addCustomer({
            id: uuid(),
            name,
            food: [],
          }),
        )
        dispatch(removeReservation(index))
      }}
    >
      {name}
    </div>
  )
}

export default ReservationCard
