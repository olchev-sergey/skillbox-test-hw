import { Link, useParams } from "react-router-dom";
import { USERS } from "../../data";
import "./UserInfoPage.css";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];

	if (!user) {
		return (
			<div className="userInfoPage">
				<div className="users">
					<p>пользователя таким userId нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>
					<b>{user.fullName}</b>
				</p>
				<p>{user.bio}</p>

				{user.playlist && (
					<div>
						<hr />
						<p>
							playlist:{" "}
							<Link to={`/playlists/${user.playlist.id}`}>
								{user.playlist.name}
							</Link>
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
