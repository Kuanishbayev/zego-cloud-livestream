import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [roomId, setRoomId] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('room/' + roomId)
    }
  return (
    <div className='room'>
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder='Room ID..'
                    required
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                />
            </div>
            <button type='submit'>Stream</button>
        </form>
    </div>
  )
}

export default Home