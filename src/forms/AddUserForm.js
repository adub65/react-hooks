import React, { useState } from "react"

const AddUserForm = props => {
	const initialFormState = { id: null, name: "", username: "", spiritAnimal: "" }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		if (!user.name || !user.username || !user.spiritAnimal) return
			props.addUser(user)
			setUser(initialFormState)
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

			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
