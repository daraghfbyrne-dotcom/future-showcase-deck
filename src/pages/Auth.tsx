import { useState, FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const SHARED_PASSWORD = "SoftCo2026!";
export const STORAGE_KEY = "softco_access_granted";

export default function Auth() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "/";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === SHARED_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      toast.success("Access granted");
      navigate(from, { replace: true });
    } else {
      toast.error("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">SoftCo 2026 Strategy</h1>
          <p className="text-sm text-muted-foreground">Enter the access password to continue.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
          </div>
          <Button type="submit" className="w-full">Unlock</Button>
        </form>
      </Card>
    </div>
  );
}