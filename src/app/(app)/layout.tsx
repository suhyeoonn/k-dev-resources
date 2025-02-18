import { AppSidebar } from '@/widgets/ui/app-sidebar/app-sidebar';
import { ModeToggle } from '@/shared/ui/mode-toggle';
import { Separator } from '@/shared/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/shared/ui/sidebar';

export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 justify-between items-center border-b px-4">
					<div className="flex items-center gap-2">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
					</div>
					<div>
						<ModeToggle />
					</div>
				</header>
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
