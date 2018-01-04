import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from "./action";

const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [{
            id: action.payload.id,
            text: action.payload.text,
            votes: 0
          },
          ...state
        ];

    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.payload.id);

    case EDIT_COMMENT:
      return state.map(comment => // sposób nr 1
            comment.id === action.payload.id
              ? Object.assign({}, comment, { comment.text = action.payload.text })
              : comment.text
        );

    case THUMB_UP_COMMENT:
      return state.map(comment => { // sposób nr 2
            return { 
              comment.id === action.payload.id
                ? comment.votes = comment.votes + 1
                : comment.votes
            }
        );

    case THUMB_DOWN_COMMENT:
      return state.map(comment => comment.id === action.payload.id
              ? Object.assign({}, comment, { comment.votes = comment.votes - 1 }
              : comment.votes
        );

    default:
      return state;
  }
};

export default comments;
