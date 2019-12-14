'use strict';

const filter = new MetadataFilter({ artist: removeNowPlayingPrefix });

Connector.playerSelector = '.qt-musicplayer';

Connector.artistTrackSelector = '#streamCurrentlyPlaying';

Connector.pauseButtonSelector = '.sm2_playing';

Connector.applyFilter(filter);

function removeNowPlayingPrefix(artist) {
	return artist.replace('NOW PLAYING:', '');
}