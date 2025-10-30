"use client";

import type { INotification } from "@/types/notifications/notification.types";
import { formatNotificationMessage } from "@/helpers/notifications/format-notification-helper";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { timeAgoFullString } from "@/helpers/format-date-helper";
import React from "react";

interface NotificationProps {
	notification: INotification;
    onClick?: () => void;
}

export default function Notification({ notification, onClick }: NotificationProps) {
	const { username, action } = formatNotificationMessage(notification);

	return (
		<div
            className="flex gap-3 w-full"
            onClick={onClick}
        >
			<div className="relative shrink-0">
					<Avatar className="rounded-lg overflow-hidden">
						<AvatarImage
							src={notification.preview_image ?? undefined}
							style={{ width: 48, height: 48, borderRadius: "6px" }}
						/>
						<AvatarFallback className="w-[48px] h-[48px] rounded-lg bg-neutral-800 text-white text-xs flex items-center justify-center">
							Avatar
						</AvatarFallback>
					</Avatar>
			</div>

			<div className="flex flex-col gap-1 w-full min-w-0">
				<div className="flex items-start justify-between gap-2">
					{notification.target_type === "message" ? (
						<div className="flex flex-wrap gap-1 text-white">
							<p className="font-light text-sm">{action}</p>
							<p className="text-sm">{username}</p>
						</div>
					) : (
						<div className="flex flex-wrap gap-1 text-white">
							<p className="font-bold text-sm">{username}</p>
							<p className="font-light text-sm">{action}</p>
						</div>
					)}

				</div>
                <p className="text-xs text-gray-400 whitespace-nowrap">
                    {timeAgoFullString(notification.created_at)}
                </p>
            </div>
		</div>
	);
}
