import {useState, useEffect} from 'react'
function useLocalStorage(storageName, initialValues) {
  
  const [item, setItem] = useState(initialValues);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;
        const localStorageItems = localStorage.getItem(storageName);
        if (!localStorageItems) {
          localStorage.setItem(storageName, JSON.stringify(initialValues))
          parsedItem=initialValues
        }else {
          parsedItem = JSON.parse(localStorageItems)
          setItem(parsedItem)    
        }
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      } 
    }, 3000);
  });

  const saveItems = (newItems) => {
    localStorage.setItem(storageName, JSON.stringify(newItems))
    setItem(newItems)
  }

  return {item, saveItems, loading, error};
}
export {useLocalStorage};