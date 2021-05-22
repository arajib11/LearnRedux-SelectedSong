import { combineReducers } from 'redux';

const songReducer = () => {
	return [
		{ title: 'Stay With Me', duration: '5.16' },
		{ title: 'Ride On Time', duration: '4.41' },
		{ title: 'Summertime', duration: '4.33' },
		{ title: 'Your Lie in April', duration: '5.57' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	//ini mengkombinasikan menjadi array yang nanti di panggil this.props
	songs: songReducer,
	selectedSong: selectedSongReducer,
});
