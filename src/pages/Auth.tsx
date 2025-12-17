import { useState, FormEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export default function Auth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Dummy credentials
  const DUMMY_CREDENTIALS = {
    email: "test@example.com",
    password: "password123",
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    // Simulate login with dummy credentials
    setTimeout(() => {
      if (
        email === DUMMY_CREDENTIALS.email &&
        password === DUMMY_CREDENTIALS.password
      ) {
        setMessage("Logged in successfully! (dummy)");
        // Direct to /home after login
        setTimeout(() => {
          navigate("/home");
        }, 700);
      } else {
        setMessage(
          "Invalid credentials. Please use test@example.com / password123."
        );
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to log in (use{" "}
            <span className="font-mono">test@example.com / password123</span>)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6" onSubmit={handleLogin}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                autoComplete="email"
                required
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                autoComplete="current-password"
                required
                disabled={loading}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full mt-2" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
            {message && (
              <div className="text-sm text-center mt-2 text-destructive">
                {message}
              </div>
            )}
          </form>
          {/* <div className="mt-4 text-center text-sm">
            {"Don't have an account? "}
            <Link to="/signup" className="underline ml-1">
              Sign up
            </Link>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
