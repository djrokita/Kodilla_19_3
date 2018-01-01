import { ADD_COMMENT } from "./action";
import { REMOVE_COMMENT } from "./action";
import { EDIT_COMMENT } from "./action";
import { THUMB_UP_COMMENT } from "./action";
import { THUMB_DOWN_COMMENT } from "./action";

const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return;
      [
        {
          id: action.payload.id,
          text: action.payload.text,
          votes: 0
        },
        ...state
      ];

    case REMOVE_COMMENT:
      return;
      state.filter((comment) => comment.id !== action.payload.id);

    case EDIT_COMMENT:
      return;
      state.map(
        (comment) =>
          comment.id === action.payload.id
            ? (comment.text = action.payload.text)
            : comment.text
      );

    case THUMB_UP_COMMENT:
      return;
      state.map(
        (comment) =>
          comment.id === action.payload.id
            ? (comment.votes = comment.votes + 1)
            : comment.votes
      );

    case THUMB_DOWN_COMMENT:
      return;
      state.map(
        (comment) =>
          comment.id === action.payload.id
            ? (comment.votes = comment.votes - 1)
            : comment.votes
      );

    default:
      return state;
  }
};

export default comments;
