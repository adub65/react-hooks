import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.updateUser(user.id, user)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />

<label>Spirit Animal</label>
				<select
					name="spiritAnimal"
					value={user.spiritAnimal}
					onChange={handleInputChange}
				>
					<option value="">Select Your Spirit Animal</option>
					<option value="lion">Lion</option>
					<option value="wolf">Wolf</option>
					<option value="bull">Bull</option>
					<option value="sheep">Sheep</option>
					<option value="hippopotamus">Hippopotamus</option>
					<option value="eagle">Eagle</option>
				</select>

      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm