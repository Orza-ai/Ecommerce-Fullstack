import React, { useState } from 'react'

const useForm = ( initialForm = {}) => {

    const [ formState, setFormState ] = useState( initialForm )

    const inputChange = ({ userValue }) => {
        const { name, value } = userValue
        setFormState({
            formState,
            [ name ]: value
        })
    }

    const resetForm = () => {
        setFormState ( initialForm )
    }

return (
    {
        formState,
        inputChange,
        resetForm,
    }
)
}

export default useForm