const fetchUsers = async () => {
	try {
		const res = await fetch(`https://localhost/api/users`);
		const data = await res.json();
		console.log("Users:", data);
	} catch (err) {
		console.error("Erreur API:", err);
	}
};

export default async function RootPage() {
	const users = await fetchUsers();

	console.log(users);
  
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const res = await fetch(`/api/users`);
				const data = await res.json();
				console.log("Users:", data);
			} catch (err) {
				console.error("Erreur API:", err);
			}
		};

		fetchUsers();
	}, []);

	return (
		<></>
	);
}
