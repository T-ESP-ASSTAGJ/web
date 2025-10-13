"use client";

import { useEffect } from "react";

export default function Home() {
	console.log("Home page");
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
		<div className="container mx-auto max-w-3xl px-4 py-2">
			<pre className="overflow-x-auto font-mono text-sm">ROOT PAGE</pre>
		</div>
	);
}
