"use server";

import { axiosInstance } from "@/utils/axios-instance";
import axios from "axios";
import {cookies} from "next/headers";

export async function loginAction(email: string) {
    try {
        await axiosInstance.post("/auth/request", { email });
        return { success: true as const };
    } catch (e) {
        console.error(e);
        return {
            success: false as const,
            error: "Impossible d'envoyer le code. Réessaie plus tard.",
        };
    }
}

export async function verifyOtpAction(params: { email: string; code: string }) {
    try {
        const res = await axiosInstance.post("/auth/verify", params);

        const cookieStore = await cookies();
        cookieStore.set({
            name: "auth_token",
            value: res.data.token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",           // envoyé sur tout ton site
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7, // 7 jours
        });

        return {
            success: true as const,
            status: res.status,
            data: res.data
        };
    } catch (e: unknown) {
        console.error(e);

        if (axios.isAxiosError(e) && e.response?.status === 403) {
            return {
                success: false as const,
                status: 403,
                error: "Code invalide ou expiré.",
            };
        }

        return {
            success: false as const,
            status: 500,
            error: "Erreur serveur. Réessaie plus tard.",
        };
    }
}
