"use client";

import { useEffect, useState } from "react";

export default function Home() {
	const [apiUrl, setApiUrl] = useState<string | null>(null);

	// Fetch runtime config on mount
	useEffect(() => {
		const fetchConfig = async () => {
			try {
				const response = await fetch('/api/config');
				if (!response.ok) throw new Error('Failed to fetch config');
				const config = await response.json();
				console.log('Runtime API URL:', config.apiUrl);
				setApiUrl(config.apiUrl);
			} catch (error) {
				console.error('Error fetching config:', error);
			}
		};

		fetchConfig();
	}, []);

	// Fetch users once we have the API URL
	useEffect(() => {
		if (!apiUrl) return;

		const fetchUsers = async () => {
			try {
				const res = await fetch(`${apiUrl}/api/users`);
				const data = await res.json();
				console.log("Users:", data);
			} catch (err) {
				console.error("Erreur API:", err);
			}
		};
	}, [apiUrl]);
}
