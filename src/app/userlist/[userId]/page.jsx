import React from 'react';

const UserDetails = async({ params }) => {

    const {userId } = await params;
    console.log(userId)
    return (
        <div>
            <h1>This is dynamic user details page</h1>
            <p>User type: {userId}</p>
        </div>
    );
};

export default UserDetails;