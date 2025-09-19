import { v4 as uuidv4 } from 'uuid'


const getStringNow = () => {
  const date = new Date().toISOString()
  const randomString = uuidv4()

  console.log(`${date}: ${randomString}`)

  setTimeout(getStringNow, 5000)
}

getStringNow()