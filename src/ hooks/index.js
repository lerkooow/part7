import { useState } from 'react'

export const useField = (type) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const resetField = () => {
        setValue("");
    };

    const fieldProps = {
        type,
        value,
        onChange,
    };

    return [fieldProps, resetField];
};
