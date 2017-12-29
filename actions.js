import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const addComment = (text) => {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

const editComment = (text, id) => {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

const removeComment = (id) => {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

const getThumbUp = (id) => {
	return {
		type: THUMB_UP_COMMENT,
		id
	}
}

const getThumbDown = (id) => {
	return {
		type: THUMB_DOWN_COMMENT,
		id
	}
}
