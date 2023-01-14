import { useState } from 'react';


export const useLogBook = () => {
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    return { openModal, toggleModal };
};