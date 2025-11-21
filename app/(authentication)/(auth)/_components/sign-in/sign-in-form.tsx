"use client";

import { useState, useRef } from "react";
import { loginAction, verifyOtpAction } from "@/actions/auth/auth.action";
import { GlassInputWrapper } from "@/app/(authentication)/(auth)/_components/glass-input-wrapper";
import MainButton from "@/components/ui/main-button";
import { cn } from "@/lib/utils";
import { OTPInput, type SlotProps } from "input-otp";
import { z } from "zod";

const Email = z.email();

export const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [emailLoading, setEmailLoading] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);

    const [otp, setOtp] = useState("");
    const [step, setStep] = useState<"email" | "code">("email");

    const [_hasGuessed, setHasGuessed] = useState<undefined | boolean>(undefined);
    const inputRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<string | null>(null);

    // 1) Envoi du code
    async function onSend(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setEmailLoading(true);
        setError(null);

        const normalizedEmail = email.trim().toLowerCase();

        const res = await loginAction(normalizedEmail);

        setEmailLoading(false);

        if (!res?.success) {
            setError(res?.error ?? "Une erreur est survenue.");
            return;
        }

        setStep("code");
    }

    // 2) Vérification du code → connexion
    async function onVerify() {
        setOtpLoading(true);
        setError(null);

        const normalizedEmail = email.trim().toLowerCase();

        const res = await verifyOtpAction({
            email: normalizedEmail,
            code: otp,
        });

        setOtpLoading(false);

        if (!res.success || res.status === 403) {
            setOtp("");
            setError(res.error ?? "Code invalide.");
            return;
        }

        window.location.replace("/");
    }

    return step === "email" ? (
        <form className="space-y-5" onSubmit={onSend}>
            <div className="flex animate-element flex-col gap-y-2 [animation-delay:300ms]">
                <label
                    htmlFor={"email"}
                    className="font-medium text-muted-foreground text-sm"
                >
                    Email
                </label>
                <GlassInputWrapper>
                    <input
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="w-full bg-transparent p-4 text-sm focus:outline-none"
                        autoComplete="email"
                        required
                    />
                </GlassInputWrapper>
            </div>

            {error && (
                <p className="text-xs text-red-400">
                    {error}
                </p>
            )}

            <MainButton
                variant={"primary"}
                type={"submit"}
                className="w-full animate-element [animation-delay:600ms]"
                disabled={emailLoading || !Email.safeParse(email).success}
                size={"lg"}
                isLoading={emailLoading}
            >
                Continue
            </MainButton>
        </form>
    ) : (
        <div className="space-y-5">
            <div>
                <p className={"font-medium text-muted-foreground text-sm"}>
                    If an account exists at{" "}
                    <span className={"text-violet-300"}>{email}</span>, you&apos;ll
                    receive a code.
                </p>
            </div>

            <div className="flex flex-col gap-y-2">
                <div className="flex items-center justify-center">
                    <OTPInput
                        id="confirmation-code"
                        ref={inputRef}
                        value={otp}
                        onChange={setOtp}
                        containerClassName="flex items-center gap-3 has-disabled:opacity-50"
                        maxLength={6}
                        onFocus={() => setHasGuessed(undefined)}
                        render={({ slots }) => (
                            <div className="flex gap-2">
                                {slots.map((slot, idx) => (
                                    <Slot key={idx} {...slot} />
                                ))}
                            </div>
                        )}
                        onComplete={onVerify}
                        disabled={otpLoading}
                    />
                </div>
            </div>

            {error && (
                <p className="text-xs text-red-400 text-center">
                    {error}
                </p>
            )}

            <MainButton
                className="mt-2 w-full text-center"
                onClick={() => {
                    setEmail("");
                    setOtp("");
                    setError(null);
                    setStep("email");
                }}
                disabled={otpLoading}
                variant={"secondary"}
            >
                Back
            </MainButton>
        </div>
    );
};

function Slot(props: SlotProps) {
    return (
        <div
            className={cn(
                "flex size-14 items-center justify-center rounded-md border border-input bg-background font-medium text-lg text-white shadow-xs transition-[color,box-shadow]",
                { "z-10 border-ring ring-[3px] ring-ring/50": props.isActive },
            )}
        >
            {props.char !== null && <div>{props.char}</div>}
        </div>
    );
}
