import { ADD_USER } from "./actions";

function users(state = [], action) {
	switch (action.type) {
		case ADD_USER:
			return [
				{
					name: action.name,
					id: action.id
				},
				...state
			];
		default:
			return state;
	}
}

export default users;
