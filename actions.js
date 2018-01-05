import uuid from "uuid";

export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const THUMB_UP_COMMENT = "THUMB_UP_COMMENT";
export const THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";

const addComment = (text) => {
  return {
    type: ADD_COMMENT,
    payload: {
      text,
      id: uuid.v4()
    }
  };
};

const editComment = (text, id) => {
  return {
    type: EDIT_COMMENT,
    payload: {
      text,
      id
    }
  };
};

const removeComment = (id) => {
  return {
    type: REMOVE_COMMENT,
    payload: {
      id
    }
  };
};

const getThumbUp = (id) => {
  return {
    type: THUMB_UP_COMMENT,
    payload: {
      id
    }
  };
};

const getThumbDown = (id) => {
  return {
    type: THUMB_DOWN_COMMENT,
    payload: {
      id
    }
  };
};
