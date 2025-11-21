import { SignInForm } from "@/app/(authentication)/(auth)/_components/sign-in/sign-in-form";

export default function SignInPage() {
	return (
		<section className="flex flex-1 items-center justify-center p-8">
			<div className="w-full max-w-md">
				<div className="flex flex-col gap-6">
					<div className={"space-y-px"}>
						<h1 className="animate-element font-semibold text-4xl leading-tight [animation-delay:100ms]">
							Welcome
						</h1>
						<p className="animate-element text-muted-foreground [animation-delay:200ms]">
							Enter your Email to sign in or sign up.
						</p>
					</div>

					<SignInForm />

					{/*<div className="relative flex animate-element items-center justify-center [animation-delay:700ms]">
						<span className="w-full border-border border-t" />
						<span className="absolute bg-[#0f0f0f] px-4 text-muted-foreground text-sm">
							Or continue with
						</span>
					</div>

					<div
						className={
							"flex w-full animate-element items-center justify-center gap-x-2.5 [animation-delay:800ms]"
						}
					>
						<Button
							variant="outline"
							size="icon"
							className="bg-[#0f0f0f] [&>svg]:!size-5 size-10.5" // <- force les svg enfants à 2rem
						>
							<Google />
						</Button>
					</div>*/}
				</div>
			</div>
		</section>
	);
}
