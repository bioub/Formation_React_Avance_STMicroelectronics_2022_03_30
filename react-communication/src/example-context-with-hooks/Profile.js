import React from 'react';
import { useUser } from './UserContext';

function Profile() {
  const { name, setName } = useUser();
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setName(event.target.name.value);
        }}
      >
        <p>
          Name :
          <input name="name" defaultValue={name} />
        </p>
        <p>
          <button>Change</button>
        </p>
      </form>
    </div>
  );
}

export default Profile;
