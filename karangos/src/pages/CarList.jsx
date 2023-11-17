import React from 'react'
import myfetch from '../utils/myfetch'

export default function CarList() {
    const [cars, setCars] = React.useState([])

    //useEffect com vetor de dependencias vazio é executado apenas
    //uma vez, na fase mount do ciclo da vida do componente 
    React.useEffect(() => {
        fetchData()
    }, [])


    async function fetchData() {
        try {
            const result = await myfetch.get('cars')
            setCars(result)

        }
        catch (error) {
            console.error(error)
            alert('ERRO:' + error.message)

        }

    }

    return (
        <>
            <h1>Listagem de clientes</h1>
            <p>{JSON.stringify(cars)}</p>
        </>
    )
}