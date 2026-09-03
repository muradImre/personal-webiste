import { RoutePainted } from "@/components/RoutePainted";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-enter">
      <RoutePainted>{children}</RoutePainted>
    </div>
  );
}
