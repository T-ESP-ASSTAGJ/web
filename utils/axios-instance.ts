import axios from "axios";
import {cookies} from "next/headers";

export const axiosInstance = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	withCredentials: true,
	validateStatus: () => true,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth_token")?.value;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

/*axiosInstance.interceptors.response.use(
    async (response) => {
        if (response.status === 401 && !response.config.url.includes('/auth/refresh')) {
            console.log('🔄 Token expiré. Tentative de refresh...');

            try {
                const newToken = await refreshAccessToken();

                if (newToken) {
                    await SecureStore.setItemAsync('access_token', newToken);
                    const originalRequest = response.config;
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return axiosInstance(originalRequest);
                } else {
                    await forceLogout();
                }
            } catch (err) {
                console.error('❌ Refresh token échoué');
                /!*await forceLogout();*!/
            }
        }

        return response;
    },
    (error) => Promise.reject(error)
);*/
