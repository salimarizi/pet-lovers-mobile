import { GET_ALL_OWNERS, GET_SELECTED_OWNER } from "../constants";

const INIT_STATE = {
  owners_data: [],
  owner_data: {
    id: 0,
    name: "",
    pet_counts: 0
  },
};

const owner = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_OWNERS: {
      return {
        ...state,
        owners_data: action.payload,
      };
    }

    case GET_SELECTED_OWNER: {
      return {
        ...state,
        owner_data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default owner;
