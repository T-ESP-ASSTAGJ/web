import { create } from "zustand";

interface AppState {
    /* Background blur of a actual post */
    actualBackgroundBlur: string;
    updateActualBackgroundBlur: (newBackgroundBlur: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
    actualBackgroundBlur: "",

    updateActualBackgroundBlur: (newBackgroundBlur) =>
        set(() => ({
            actualBackgroundBlur: newBackgroundBlur,
        })),
}));
