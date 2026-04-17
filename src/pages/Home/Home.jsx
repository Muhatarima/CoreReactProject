import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Friends from '../../components/Friends/Friends'
import Hero from '../../components/Hero/Hero'
import Loader from '../../components/Loader/Loader'

function Home() {
  const { timeline } = useOutletContext()
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const res = await fetch('/friends.json')
        const data = await res.json()
        setFriends(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadFriends()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Hero friends={friends} timeline={timeline} />
      <Friends friends={friends} />
    </div>
  )
}

export default Home