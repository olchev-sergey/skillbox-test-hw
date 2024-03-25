import { ChangeEvent } from "react";
import { PLAYLISTS } from "../../data";
import "./PlaylistsPage.css";
import { Link, useSearchParams } from "react-router-dom";

export function PlaylistsPage() {
	const [searchParam, setSearchParam] = useSearchParams();

	const searchGenre = searchParam.get("searchGenre")?.toLowerCase() || "";
	const searchName = searchParam.get("searchName")?.toLowerCase() || "";

	const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchParam({ searchGenre: value.toLowerCase(), searchName });
	};

	const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchParam({ searchName: value.toLowerCase(), searchGenre });
	};

	const fillteredPlaylists = PLAYLISTS.filter(
		({ genre }) =>
			genre !== "Non Music" && genre.toLowerCase().includes(searchGenre)
	).filter(({ name }) => name.toLowerCase().includes(searchName));

	return (
		<div className="playlistsPage">
			<h2>PlaylistsPage</h2>

			<div className="playlists">
				<label>
					введите жанр{" "}
					<input type="text" value={searchGenre} onChange={handleSearchGenre} />
				</label>
				<label>
					введите название{" "}
					<input type="text" value={searchName} onChange={handleSearchName} />
				</label>

				{fillteredPlaylists.map(({ id, name }) => (
					<Link to={`/playlists/${id}`} key={id}>
						{name}
					</Link>
				))}
			</div>
		</div>
	);
}
