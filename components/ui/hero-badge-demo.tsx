import HeroBadge from "@/components/ui/hero-badge";
import { Icons } from "@/components/ui/icons";

function HeroBadgeBasic() {
  return (
    <div className="flex w-full items-center justify-center">
      <HeroBadge
        href="#waitlist"
        text="Track your brand in AI search"
        icon={
          <Icons.zap className="h-4 w-4" />
        }
        endIcon={<Icons.chevronRight className="h-4 w-4" />}
      />
    </div>
  );
}

export { HeroBadgeBasic }; 