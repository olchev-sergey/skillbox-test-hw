import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistInfoPage.css";

export function PlaylistInfoPage() {
	const { playlistId } = useParams();
	const playlist = PLAYLISTS[Number(playlistId)];

	if (!playlist || !playlist.songs.length) {
		return (
			<div className="playlistInfoPage">
				<h2>PlaylistInfoPage</h2>

				<div className="playlist">
					<p>плейлист с таким playlistId нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="playlistInfoPage">
			<h2>PlaylistInfoPage</h2>

			<div className="playlist">
				<Link to={`/playlists?searchGenre=${playlist.genre}`}>
					Жанр: <b>{playlist.genre}</b>
				</Link>
				<p>
					Название: <b>{playlist.name}</b>
				</p>
			</div>

			<hr />

			<div className="songs">
				{playlist.songs.map((song) => (
					<p> - {song}</p>
				))}
			</div>
		</div>
	);
}
