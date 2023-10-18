import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
        getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const refreshToken = async() => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accesstoken);
            const decoded = jwt_decode(response.data.accesstoken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if(error.response){
                navigate('/')
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accesstoken}`;
            setToken(response.data.accesstoken);
            const decoded = jwt_decode(response.data.accesstoken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    })

    const getUsers = async() => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    return (
        <div className= "container mt-5">
            <h1>Welcome Back: {name} </h1>
            <button onClick={getUsers} className='button is-info'>Get Users</button>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard