import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("isLoggedIn", "true");

      toast({
        title: "Login successful",
        description: "Welcome back to Contractor+",
      });

      navigate("/compare");
    }, 1500);
  }

  return (
    <div className="bg-card w-full max-w-md space-y-6 rounded-lg border p-6 shadow-sm">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-aliceBlue text-sm">
          Enter your credentials to continue using MaterialCompare
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <Link
                    to="/forgot-password"
                    className="text-primary text-xs hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>

      <div className="flex items-center gap-2 py-2">
        <Separator className="flex-grow" />
        <span className="text-aliceBlue text-xs">OR</span>
        <Separator className="flex-grow" />
      </div>

      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full"
          type="button"
          disabled={isLoading}
        >
          Continue with Google
        </Button>

        <div className="text-center text-sm">
          <span className="text-aliceBlue">Don't have an account? </span>
          <Link to="/signup" className="text-primary hover:underline">
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}
