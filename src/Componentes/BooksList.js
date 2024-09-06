import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BooksList = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/livros')
            .then(response => setLivros(response.data))
            .catch(error => console.error('Erro ao buscar livros:', error));
    }, []);

    return (
        <div>
            <h1>Livros Disponíveis</h1>
            <ul>
                {livros.map(livro => (
                    <li key={livro.IdLivro}>
                        {livro.TituloLivro} - {livro.Status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksList;
