import { useState, useEffect } from 'react'

export function useFetch(fetchData) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    setLoading(true)

    fetchData()
      .then((response) => {
        setData(response)
      })
      .catch((fetchError) => {
        console.error('useFetch >>>>>', fetchError)

        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [fetchData])

  return {
    loading,
    error,
    data,
  }
}
