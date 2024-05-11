import React, { useEffect, useState } from 'react';
import { users as userData } from './constants';
import '../App.css'
import Button from '@mui/material/Button';

type User = {
    id: string;
    username: string;
    address: string;
    age: number;
    companyName: string;
}
const Search = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [removedUsers, setRemovedUsers] = useState<User[] | any>([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Function to generate random ID
    const generateRandomId = () => {
        const characters = 'ABCDEF123456';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }; 
    
    
   
    // Function to filter, map, add ID, and sort users
    const processData = (data: typeof userData) => {
        const filteredUsers = data.filter((user: { age: number; }) => user.age >= 18);
        const mappedUsers = filteredUsers.map((user) => ({
            id: generateRandomId(),
            username: user.username,
            address: user.address.street + ', ' + user.address.suite + ', ' + user.address.city + ', ' + user.address.zipcode,
            age: user.age,
            companyName: user.company.name
        }));
        const sortedUsers = mappedUsers.sort((a: User, b: User) => {
            return a.age - b.age;
        });
        setUsers(sortedUsers);
    };

    // Function to handle user removal
    const handleRemoveUser = (id: string) => {
        const updatedUsers = users.filter((user: { id: string; }) => user.id !== id);
        const removedUser = users.find((user: { id: string }) => user.id === id);
        setUsers(updatedUsers);
        setRemovedUsers([...removedUsers, removedUser]);
        
        
    };

    // Function to handle user restoration
    const handleRestoreUser = (id: string) => {
        const restoredUser = removedUsers.find((user: { id: string; }) => user.id === id);
        const updatedRemovedUsers = removedUsers.filter((user: { id: string; }) => user.id !== id);
        setUsers([...users, restoredUser]);
        setRemovedUsers(updatedRemovedUsers)
    };

    // Function to handle search term change
    const handleSearch = (e: any) => {
        setSearchTerm(e.target.value);
    };

    // Filter users based on search term
    const filteredUsers = users.filter((user: { username: string; }) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredRemoveUsers = removedUsers.filter((user: { username: string; }) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );


    useEffect(() => {
        processData(userData);
    }, []);

    return (
        <>
            <div className='input-div-styles'>
                <input
                    type="text"
                    className='input-styles'
                    placeholder="Search by username"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            {(filteredUsers.length === 0 && filteredRemoveUsers.length === 0) ?

              <div className='flex-items'>
                  <div className="card App">
                    <p>No Data Found</p>
                </div>
              </div> :
                <div className='flex-items'>

                    <div>
                        <h1>Listed Item</h1>
                        {filteredUsers.map((user: User) => (
                            <div key={user.id} className="card">
                                <p>UserId: {user.id}</p>
                                <p>Username: {user.username}</p>
                                <p>Address: {user.address}</p>
                                <p>Age: {user.age}</p>
                                <p>Company Name: {user.companyName}</p>
                                <Button size="small" variant="contained" color="secondary" onClick={() => handleRemoveUser(user.id)}>Remove</Button>
                            </div>
                        ))}
                    </div>
                    <div>
                    <h1>Storage </h1>
                  {  filteredRemoveUsers.length === 0 && 
                    <div className='flex-items'>
                    <div className="card App">
                      <p> there is no data available in the Store</p>
                  </div>
                </div>
                  } 
                        {filteredRemoveUsers.map((user: User) => (
                            <div key={user.id} className="card">
                                <p>UserId: {user.id}</p>
                                <p>Username: {user.username}</p>
                                <p>Address: {user.address}</p>
                                <p>Age: {user.age}</p>
                                <p>Company Name: {user.companyName}</p>
                                <Button size="small" variant="contained" color="success" onClick={() => handleRestoreUser(user.id)}>Restore</Button>
                            </div>
                        ))}
                    </div>



                </div>}

        </>
    );
};

export default Search;
