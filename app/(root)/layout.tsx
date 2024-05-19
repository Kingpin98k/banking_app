import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = {
		id: "423940932uruoiwe0r93u",
		firstName: "John",
		lastName: "Doe",
	};

	return (
		<main className="flex h-full w-full font-inter">
			<Sidebar user={loggedIn} />
			<div className=" flex size-full flex-col">
				<div className=" root-layout">
					<Image
						src="/icons/logo.svg"
						height={34}
						width={34}
						alt="Horizon Logo"
						className="size-[24px] max:xl:size-[14px]"
					/>
					<div>
						<MobileNavbar user={loggedIn} />
					</div>
				</div>
				{children}
			</div>
		</main>
	);
}
