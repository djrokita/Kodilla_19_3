import uuid from uuid;

const newComment = 'newComment';
const editComment = 'editComment';
const rmComment = 'rmComment';
const upThumb = 'upThumb';
const downThumb = 'downThumb';

const addNewComment = (text) => {
	return {
		type: newComment,
		text: text,
		id: uuid.v4()
	}
};

const makeEditComment = (text, id) => {
	return {
		type: editComment,
		text: text,
		id, id
	}
};

const removeComment = (id) => {
	return {
		type: rmComment,
		id: id
	}
};

const getThumbUp = (id) => {
	return {
		type: upThumb,
		id: id,
		thumpUpCounter: thumpUpCounter + 1
	}
};

const getThumbDown = (id) => {
	return {
		type: downThumb,
		id: id,
		thumpDownCounter: thumpDownCounter + 1
	}
};
