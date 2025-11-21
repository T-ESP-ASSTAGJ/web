"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/shadcn/accordion";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import { Header } from "@/components/ui/vitrine/header";
import { Navbar } from "@/components/ui/vitrine/navbar";
import { motion } from "framer-motion";
import {
	Camera,
	Fingerprint,
	MessageSquare,
	ShieldCheck,
	Sparkles,
	Users,
} from "lucide-react";
import React from "react";

export default function LandingPage() {
	return (
		<div className="min-h-dvh bg-white text-foreground">
			<Navbar />
			<Header />

			<main className="mx-auto px-4 sm:px-6 lg:px-8 bg-white">
				<LogosBar />
				<FeatureGrid />
				<SplitFeature />
				<SocialProof />
				<HowItWorks />
				<CTASection />
				<FAQSection />
			</main>
			<SiteFooter />
		</div>
	);
}

function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 backdrop-blur border-b">
			<div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				<a href="#" className="flex items-center gap-2">
					<div className="size-7 rounded-xl bg-primary/10 grid place-items-center">
						<Sparkles className="size-4 text-primary" />
					</div>
					<span className="font-semibold tracking-tight">Nova</span>
				</a>
				<nav className="hidden md:flex items-center gap-6 text-sm">
					<a href="#features" className="hover:text-primary">
						Fonctionnalités
					</a>
					<a href="#how" className="hover:text-primary">
						Comment ça marche
					</a>
					<a href="#faq" className="hover:text-primary">
						FAQ
					</a>
				</nav>
				<div className="flex items-center gap-2">
					<Button variant="ghost" className="hidden sm:inline-flex">
						Se connecter
					</Button>
					<Button>Essayer l'app</Button>
				</div>
			</div>
		</header>
	);
}

function HeroSection() {
	return (
		<section className="py-20 md:py-28">
			<div className="grid lg:grid-cols-2 gap-10 items-center">
				<div>
					<Badge className="mb-4" variant="secondary">
						Social • Privé • Temps réel
					</Badge>
					<motion.h1
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-4xl/tight md:text-6xl/tight font-semibold tracking-tight"
					>
						Des conversations <span className="text-primary">simples</span>,
						fiables et <span className="text-primary">privées</span>.
					</motion.h1>
					<p className="mt-4 text-lg text-muted-foreground max-w-xl">
						Nova est un réseau social centré sur vos échanges. Messages, appels,
						stories et un assistant IA — le tout chiffré de bout en bout.
					</p>
					<div className="mt-6 flex flex-col sm:flex-row gap-3">
						<Button size="lg" className="">
							Télécharger iOS
						</Button>
						<Button size="lg" variant="outline">
							Télécharger Android
						</Button>
					</div>
					<div className="mt-4 text-sm text-muted-foreground">
						Aucune pub. Essai gratuit.
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.98 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="relative mx-auto w-full max-w-[420px]"
				>
					<div className="absolute -inset-4 rounded-[2.5rem] bg-primary/10 blur-2xl" />
					<div className="relative rounded-[2.5rem] ring-1 ring-border bg-background shadow-2xl overflow-hidden">
						{/* Mockup téléphone */}
						<div className="aspect-[9/19.5] w-full grid place-items-center">
							<div className="p-6 w-full">
								<div className="flex items-center justify-between text-xs text-muted-foreground">
									<span>09:41</span>
									<span>5G • 100%</span>
								</div>
								<div className="mt-4 space-y-3">
									<ChatBubble name="Camille" text="On se voit ce soir?" />
									<ChatBubble name="Toi" text="Carrément ✨" own />
									<ChatBubble
										name="Mehdi"
										text="J'appelle en visio dans 2min."
									/>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function ChatBubble({
	name,
	text,
	own,
}: { name: string; text: string; own?: boolean }) {
	return (
		<div className={`flex ${own ? "justify-end" : "justify-start"}`}>
			<div
				className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow ${own ? "bg-primary text-primary-foreground" : "bg-muted"}`}
			>
				<div className="text-[11px] opacity-70">{name}</div>
				<div>{text}</div>
			</div>
		</div>
	);
}

function LogosBar() {
	return (
		<div className="py-6 opacity-80 grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
			{["TechCrunch", "Product Hunt", "Indie Hackers", "App Store"].map(
				(logo) => (
					<div
						key={logo}
						className="text-sm md:text-base text-muted-foreground"
					>
						{logo}
					</div>
				),
			)}
		</div>
	);
}

function FeatureGrid() {
	const items = [
		{
			icon: <ShieldCheck className="size-5" />,
			title: "Chiffrement de bout en bout",
			desc: "Vos messages restent entre vous et vos contacts, point.",
		},
		{
			icon: <Users className="size-5" />,
			title: "Groupes & chaînes",
			desc: "Discutez en privé, organisez des communautés, diffusez sans bruit.",
		},
		{
			icon: <Camera className="size-5" />,
			title: "Stories & multi-cam",
			desc: "Partagez en direct avec caméra avant + arrière pour ne rien manquer.",
		},
		{
			icon: <Fingerprint className="size-5" />,
			title: "Sécurité avancée",
			desc: "Vérification d'identité, verrouillage biométrique, anti-capture.",
		},
	];

	return (
		<section id="features" className="py-16">
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{items.map((it) => (
					<Card key={it.title} className="border-muted-foreground/20">
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-base">
								<span className="grid place-items-center size-8 rounded-xl bg-muted">
									{it.icon}
								</span>
								{it.title}
							</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-muted-foreground">
							{it.desc}
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}

function SplitFeature() {
	return (
		<section className="py-20">
			<div className="grid lg:grid-cols-2 gap-10 items-center">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="order-2 lg:order-1"
				>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
						Montrez tout avec le{" "}
						<span className="text-primary">mode multi‑caméra</span>.
					</h2>
					<p className="mt-3 text-muted-foreground max-w-xl">
						Diffusez en simultané l'avant et l'arrière. Parfait pour stories,
						vlogs et moments live avec vos amis.
					</p>
					<ul className="mt-6 space-y-3 text-sm">
						<li className="flex items-center gap-2">
							<Badge variant="outline">Nouveau</Badge> Stream HD stable
						</li>
						<li className="flex items-center gap-2">
							<Badge variant="outline">IA</Badge> Transcription audio → texte
						</li>
						<li className="flex items-center gap-2">
							<Badge variant="outline">Sécurité</Badge> Contrôles de
							confidentialité granulaire
						</li>
					</ul>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.98 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className="order-1 lg:order-2"
				>
					<div className="relative mx-auto w-full max-w-[520px]">
						<div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-3xl" />
						<img
							src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
							alt="demo"
							className="relative rounded-2xl ring-1 ring-border shadow-xl"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function SocialProof() {
	return (
		<section className="py-16">
			<div className="grid md:grid-cols-3 gap-6">
				{[1, 2, 3].map((i) => (
					<Card key={i}>
						<CardContent className="pt-6 text-sm">
							« La meilleure façon de lancer une app sociale. Design clean,
							onboarding rapide, on adore. »
							<div className="mt-4 flex items-center gap-3">
								<div className="size-9 rounded-full bg-muted" />
								<div>
									<div className="font-medium">Alex</div>
									<div className="text-muted-foreground text-xs">
										@alex_dsgn
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}

function HowItWorks() {
	const steps = [
		{
			n: 1,
			t: "Créez votre profil",
			d: "Choisissez un @handle, importez vos contacts en un clic.",
		},
		{
			n: 2,
			t: "Invitez vos amis",
			d: "Groupes, chaînes, ou DM — à vous de choisir.",
		},
		{
			n: 3,
			t: "Partagez & appelez",
			d: "Stories, messages vocaux, appels vidéo HD.",
		},
	];
	return (
		<section id="how" className="py-20">
			<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
				Comment ça marche
			</h2>
			<div className="mt-10 grid md:grid-cols-3 gap-6">
				{steps.map((s) => (
					<Card key={s.n}>
						<CardHeader>
							<CardTitle className="text-base flex items-center gap-2">
								<span className="size-8 grid place-items-center rounded-xl bg-primary/10 font-semibold">
									{s.n}
								</span>
								{s.t}
							</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-muted-foreground">
							{s.d}
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}

function CTASection() {
	return (
		<section className="py-20">
			<div className="mx-auto max-w-3xl text-center">
				<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
					Prêt à rejoindre Nova ?
				</h3>
				<p className="mt-2 text-muted-foreground">
					Rejoignez la beta privée et soyez notifié du lancement public.
				</p>
				<div className="mt-6 flex items-center gap-2 max-w-md mx-auto">
					<Input placeholder="votre@email.com" />
					<Button className="shrink-0">Notifiez‑moi</Button>
				</div>
				<p className="mt-3 text-xs text-muted-foreground">
					En vous inscrivant, vous acceptez notre politique de confidentialité.
				</p>
			</div>
		</section>
	);
}

function FAQSection() {
	const faqs = [
		{
			q: "L'app est-elle chiffrée de bout en bout ?",
			a: "Oui, les messages et appels sont chiffrés E2E par défaut.",
		},
		{
			q: "Y a‑t‑il une version web ?",
			a: "La version web est en développement et arrive bientôt.",
		},
		{
			q: "Quel est le modèle économique ?",
			a: "Freemium sans publicité, avec options premium discrètes.",
		},
	];
	return (
		<section id="faq" className="py-20 border-t">
			<div className="grid lg:grid-cols-2 gap-10 items-start">
				<div>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
						Questions fréquentes
					</h2>
					<p className="mt-2 text-muted-foreground max-w-prose">
						Voici les questions qu'on nous pose le plus souvent à propos de
						Nova. Si vous en avez d'autres, écrivez‑nous.
					</p>
				</div>
				<Accordion type="single" collapsible className="w-full">
					{faqs.map((f, i) => (
						<AccordionItem key={i} value={`item-${i}`}>
							<AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
							<AccordionContent className="text-sm text-muted-foreground">
								{f.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}

function SiteFooter() {
	return (
		<footer className="border-t py-10 text-sm">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
				<div className="flex items-center gap-2">
					<MessageSquare className="size-4 opacity-70" />
					<span className="opacity-70">
						© {new Date().getFullYear()} Nova. Tous droits réservés.
					</span>
				</div>
				<div className="flex items-center gap-4 opacity-80">
					<a href="#" className="hover:text-primary">
						Conditions
					</a>
					<a href="#" className="hover:text-primary">
						Confidentialité
					</a>
					<a href="#" className="hover:text-primary">
						Support
					</a>
				</div>
			</div>
		</footer>
	);
}