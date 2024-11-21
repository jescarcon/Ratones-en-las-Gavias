import React, { useState, useEffect } from 'react';
import './Games.css';
import { BASE_API_URL } from '../constants';
import Footer from '../Main/Footer/Footer';
export default function Games() {
    const [games, setGames] = useState([]); // Lista de objetos Games
    const [loading, setLoading] = useState(false); // Estado de carga
    const [currentUser, setCurrentUser] = useState(null); // Usuario actual obtenido del backend
    const username = localStorage.getItem('username'); // Obtiene el username del localStorage
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal
    const [contextMenu, setContextMenu] = useState({
        visible: false,
        x: 0,
        y: 0,
        game: null, // El juego seleccionado
    });

    // Opciones para los campos con valores predefinidos
    const DIFFICULTY_CHOICES = [
        { value: 'Principiante', label: 'Principiante' },
        { value: 'Intermedio', label: 'Intermedio' },
        { value: 'Avanzado', label: 'Avanzado' },
    ];

    const MODE_CHOICES = [
        { value: 'Presencial en Mesa', label: 'Presencial en Mesa' },
        { value: 'Rol en Vivo', label: 'Rol en Vivo' },
        { value: 'Online', label: 'Online' },
    ];

    const STATUS_CHOICES = [
        { value: 'Por Iniciar', label: 'Por Iniciar' },
        { value: 'En Curso', label: 'En Curso' },
        { value: 'Finalizado', label: 'Finalizado' },
    ];
    const [formData, setFormData] = useState({
        name: '',
        system: '',
        genre: '',
        duration: '',
        difficulty: DIFFICULTY_CHOICES[0].value, // Valor predeterminado: primera opción
        players: '',
        game_mode: MODE_CHOICES[0].value, // Valor predeterminado: primera opción
        location: '',
        status: STATUS_CHOICES[0].value, // Valor predeterminado: primera opción
    }); // Datos del formulario
    // Función para obtener el usuario por username
    const fetchCurrentUser = async () => {
        if (!username) {
            alert('No se encontró el nombre de usuario en localStorage.');
            return;
        }

        try {
            const response = await fetch(`${BASE_API_URL}/api/authApp/users/${username}/`);
            if (response.ok) {
                const userData = await response.json();
                setCurrentUser(userData);
            } else {
                console.error('Error al obtener el usuario:', response.status);
            }
        } catch (error) {
            console.error('Error al buscar el usuario:', error);
        }
    };

    // Función para cargar la lista de Games
    const fetchGames = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_API_URL}/api/gameApp/games/`);
            if (response.ok) {
                const data = await response.json();
                setGames(data);
            } else {
                console.error('Error fetching Games');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    // Función para manejar los cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Función para crear un nuevo Game
    const createGame = async () => {
        if (!currentUser) {
            alert('No se encontró el usuario actual. Asegúrate de que el usuario esté cargado.');
            return;
        }

        setLoading(true);
        try {
            const token = localStorage.getItem('access');
            if (!token) {
                alert('No se encontró un token de autenticación. Inicia sesión nuevamente.');
                return;
            }

            const response = await fetch(`${BASE_API_URL}/api/gameApp/games/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ ...formData, user: currentUser.id }),
            });

            if (response.ok) {
                setFormData({
                    name: '',
                    system: '',
                    genre: '',
                    duration: '',
                    difficulty: '',
                    players: '',
                    game_mode: '',
                    location: '',
                    status: '',
                }); // Limpiar el formulario
                fetchGames(); // Refrescar la lista de Games
            } else {
                const errorData = await response.json();
                console.error('Error creating game:', errorData);
                alert('Error al crear el game: ' + JSON.stringify(errorData));
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al crear el game.');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        const handleClickOutside = () => {
            if (contextMenu.visible) {
                setContextMenu({ ...contextMenu, visible: false });
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [contextMenu]);
    // Cargar Games y usuario al montar el componente
    useEffect(() => {
        fetchCurrentUser();
        fetchGames();
    }, []);

    return (
        <div className="Games-Main-container">
            <div className="Games-single">
                <div className="Games-header">
                    <h2 className="Games-title">Partidas de Rol</h2>
                </div>

                <div className="Games-subtitle">
                    <p>
                        Crea tus propias historias o únete para formar parte de cientos de escenarios
                    </p>
                    <p>¡Sin excusas para no parar de Rolear!</p>
                </div>

                <hr className="separator" />
            </div>

            <div className="Games-table-section">
                <div className="Games-table-button">
                    <button
                        className="Games-create-button"
                        onClick={() => setIsModalOpen(true)} // Abrir el modal al hacer clic
                    >
                        Crea tu Partida
                    </button>
                </div>

                <div>
                    <table className="Games-table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Sistema</th>
                                <th>Género</th>
                                <th>Duración</th>
                                <th>Dificultad</th>
                                <th>Jugadores</th>
                                <th>Modo de Juego</th>
                                <th>Ubicación</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game, index) => (
                                <tr
                                    key={index}
                                    style={{ cursor: 'context-menu' }}
                                    onContextMenu={(e) => {
                                        e.preventDefault(); // Previene el menú contextual del navegador
                                        setContextMenu({
                                            visible: true,
                                            x: e.pageX,
                                            y: e.pageY,
                                            game: game, // Asigna el juego correspondiente
                                        });
                                    }}
                                >
                                    <td>{game.name}</td>
                                    <td>{game.system}</td>
                                    <td>{game.genre}</td>
                                    <td>{game.duration}</td>
                                    <td>{game.difficulty}</td>
                                    <td>0/{game.players}</td>
                                    <td>{game.game_mode}</td>
                                    <td>{game.location || 'Online'}</td>
                                    <td>{game.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className='modal-header'>
                            <h2>Crea una nueva Partida</h2>
                            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                                X
                            </button>
                        </div>
                        <form>
                            <div className='form-rows'>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Nombre de tu Aventura</label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Nombre de tu partida."
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="system">Sistema de Rol</label>
                                        <input
                                            id="system"
                                            type="text"
                                            name="system"
                                            placeholder="Ej. D&D 5a, Pathfinder etc..."
                                            value={formData.system}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="genre">Género</label>
                                        <input
                                            id="genre"
                                            type="text"
                                            name="genre"
                                            placeholder="Aventura, Ciencia Ficción ..."
                                            value={formData.genre}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="duration">Duración estimada</label>
                                        <input
                                            id="duration"
                                            type="text"
                                            name="duration"
                                            placeholder="5 horas, 3 sesiones de 2h ..."
                                            value={formData.duration}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>


                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="difficulty">Dificultad de la Partida</label>
                                        <select
                                            id="difficulty"
                                            name="difficulty"
                                            value={formData.difficulty}
                                            onChange={handleChange}
                                        >
                                            {DIFFICULTY_CHOICES.map((choice) => (
                                                <option key={choice.value} value={choice.value}>
                                                    {choice.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="players">Jugadores Máximos</label>
                                        <input
                                            id="players"
                                            type="number"
                                            name="players"
                                            placeholder="5"
                                            value={formData.players}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="game_mode">Modo de Juego</label>
                                        <select
                                            id="game_mode"
                                            name="game_mode"
                                            value={formData.game_mode}
                                            onChange={handleChange}
                                        >
                                            {MODE_CHOICES.map((choice) => (
                                                <option key={choice.value} value={choice.value}>
                                                    {choice.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="location">Ubicación de las Sesiones</label>
                                        <input
                                            id="location"
                                            type="text"
                                            name="location"
                                            placeholder="Ubicación"
                                            value={formData.location}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="status">Estado de la Partida</label>
                                        <select
                                            id="status"
                                            name="status"
                                            value={formData.status}
                                            onChange={handleChange}
                                        >
                                            {STATUS_CHOICES.map((choice) => (
                                                <option key={choice.value} value={choice.value}>
                                                    {choice.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">

                                    </div>
                                </div>

                            </div>

                            <button type="button" onClick={createGame} disabled={loading}>
                                {loading ? 'Creando...' : 'Crear Game'}
                            </button>
                        </form>


                    </div>
                </div>
            )}


            {contextMenu.visible && (
                <div
                    className="context-menu"
                    style={{
                        top: `${contextMenu.y}px`,
                        left: `${contextMenu.x}px`,
                    }}
                    onClick={() => setContextMenu({ ...contextMenu, visible: false })} // Cierra al hacer clic
                >
                    <ul>
                        <li
                            className="context-menu-item"
                            onClick={() => {
                                console.log('Ver Detalles:', contextMenu.game);
                                setContextMenu({ ...contextMenu, visible: false });
                            }}
                        >
                            Ver Detalles
                        </li>
                        <li
                            className="context-menu-item"
                            onClick={() => {
                                console.log('Solicitar Unirse:', contextMenu.game);
                                setContextMenu({ ...contextMenu, visible: false });
                            }}
                        >
                            Solicitar Unirse
                        </li>
                        <li
                            className="context-menu-item"
                            onClick={() => {
                                console.log('Eliminar:', contextMenu.game);
                                setContextMenu({ ...contextMenu, visible: false });
                            }}
                        >
                            Eliminar
                        </li>
                    </ul>
                </div>
            )}


            <Footer />
        </div>
    );
}
