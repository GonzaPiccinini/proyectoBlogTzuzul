import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'

const Filter = () => {
    const router = useRouter()
    const [selectValue, setSelectValue] = useState('Más relevantes')
    const firstUpdate = useRef(false)

    const handleChange = e => {
        setSelectValue(e.target.value)
    }

    useEffect(() => {
        if (firstUpdate.current) {
            (selectValue === 'Más relevantes') 
                ? router.push('/publicaciones')
                : router.push(`/publicaciones/categorias/${selectValue}`)      
        } else {
            firstUpdate.current = true
        }
    }, [selectValue])

    return (
        <div className='flex justify-end mr-0 gap-1 text-sm'>
            <label htmlFor='select' className='font-medium'>Ordenar por</label>
            <select onChange={e => handleChange(e)} 
                className='outline-sky-500 px-[1px] cursor-pointer' id='select'>
                <option>Más relevantes</option>
                <option>Noticias</option>
                <option>Reviews</option>
                <option>Gaming</option>
                <option>Hardware</option>
                <option>Software</option>
            </select>
        </div>
    )
}

export default Filter