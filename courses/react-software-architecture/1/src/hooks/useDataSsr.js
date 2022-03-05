import { useContext, useState } from 'react'

import { InitialDataContext } from '../contexts/InitialDataContext'

export function useDataSsr(resourceName, loadResource) {
  const initialData = useContext(InitialDataContext)
  const [data, setData] = useState(initialData?._data?.[resourceName])

  function errorHandler(error) {
    console.error('useDataSsr >>>>>', error)

    initialData._data[resourceName] = null
  }

  if (initialData._isServerSide) {
    initialData._requests.push(
      loadResource()
        .then((resource) => {
          initialData._data[resourceName] = resource
        })
        .catch(errorHandler)
    )
  }

  if (!initialData._isServerSide && !data) {
    loadResource()
      .then((resource) => {
        setData(resource)

        initialData._data[resourceName] = resource
      })
      .catch(errorHandler)
  }

  return data
}
