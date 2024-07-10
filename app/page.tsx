import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Button asChild>
          <LoginLink>Login</LoginLink>
        </Button>
      </div>
    </div>
  );
}
