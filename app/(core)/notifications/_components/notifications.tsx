"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Bell, Dot } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import type { INotificationsResponse } from "@/types/notifications/notification.types";
import { mock_notifications_response } from "@/mock-data/notification";
import Notification from "@/app/(core)/notifications/_components/notification";

export default function Notifications() {
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const [notifications, setNotifications] = useState<INotificationsResponse>({
        notifications: [],
        total_notifications: 0,
        unread_count: 0,
    });

    useEffect(() => {
        setNotifications(mock_notifications_response);
    }, []);

    useEffect(() => {
        function onClickOutside(e: MouseEvent) {
            if (
                open &&
                panelRef.current &&
                !panelRef.current.contains(e.target as Node) &&
                btnRef.current &&
                !btnRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }
        function onEsc(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("keydown", onEsc);
        };
    }, [open]);

    const unreadPostCount = useMemo(() => {
        return notifications.notifications.filter(
            (n) => !n.is_read).length;
    }, [notifications]);

    const markAllAsRead = () => {
        setNotifications((prev) => ({
            ...prev,
            notifications: prev.notifications.map((n) => ({ ...n, is_read: true })),
            unread_count: 0,
        }));
    };

    const markOneAsRead = (id: number) => {
        setNotifications((prev) => {
            const newList = prev.notifications.map((n) =>
                n.id === id ? { ...n, is_read: true } : n
            );
            const stillUnread = newList.filter((n) => !n.is_read).length;
            return {
                ...prev,
                notifications: newList,
                unread_count: stillUnread,
            };
        });
    };

    return (
        <div className="relative">
            <Button
                ref={btnRef}
                onClick={() => setOpen((o) => !o)}
                className={`${open ? "bg-neutral-700" : "bg-transparent"} w-11 h-11 rounded-full hover:bg-neutral-700 [&>svg]:!size-5 cursor-pointer`}
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls="notif-panel"
            >
                <Bell color="white" />
                {unreadPostCount > 0 && (
                    <span className="absolute -top-1 -right-1 grid place-items-center w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold px-1 z-20">
                        {unreadPostCount > 9 ? "9+" : unreadPostCount}
                    </span>
                )}
            </Button>

            {open && (
                <div
                    id="notif-panel"
                    ref={panelRef}
                    role="dialog"
                    aria-label="Notifications"
                    className="absolute right-0 mt-3 w-[380px] max-w-[92vw] rounded-2xl border border-neutral-800 bg-neutral-900/95 backdrop-blur shadow-2xl"
                >
                    <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
                        <div className="flex items-center gap-2 text-sm text-neutral-300">
                            <span className="font-semibold text-white">
                                Notifications
                            </span>
                            <Dot className="w-4 h-4" />
                            <span className="text-neutral-400">
                                {unreadPostCount} Posts unread
                             </span>
                        </div>
                    </div>

                    <div className="max-h-[40vh] overflow-y-auto overscroll-contain mx-2 scrollbar-hide divide-y divide-neutral-800">
                        {notifications.notifications.map((n) => {
                            const isUnread = !n.is_read;

                            return (
                                <div key={n.id} className={`relative flex items-center my-2 ${isUnread ? "bg-neutral-800 rounded-md" : ""}`}>
                                    <div className={"my-2 mx-2 cursor-pointer"}>
                                        <Notification
                                            notification={n}
                                            onClick={() => markOneAsRead(n.id)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="p-3 border-t border-neutral-800 flex items-center justify-center">
                        <button
                            onClick={markAllAsRead}
                            className="text-xs px-3 py-1.5 rounded-xl hover:bg-white/5 cursor-pointer"
                        >
                            Mark all as read
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
