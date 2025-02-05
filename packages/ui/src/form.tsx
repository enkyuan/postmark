import { Icon } from "@iconify/react";

import { cn } from "@monorepo/utils/styles";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

export function Form({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <Icon
                  icon="solar:notebook-minimalistic-bold-duotone"
                  className="size-8"
                />
              </div>
              <span className="sr-only">Postmark</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Postmark</h1>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/auth/signup" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="rounded-xl"
                required
              />
              <Label htmlFor="email">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="must be at least 8 characters"
                className="rounded-xl"
                required
              />
            </div>
            <Button type="submit" className="w-full rounded-xl">
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
