import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-md bg-gray-200/80", className)}
      {...props}
    >
      <div className="animate-shimmer absolute inset-0" />
    </div>
  );
}

export { Skeleton }; 