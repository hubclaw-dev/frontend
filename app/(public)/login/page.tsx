"use client";

import { useAuthStore } from "@/app/store/authStore";
import { signInWithGoogle, useAuth } from "../../../hooks/useAuth";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/app/schemas/schema";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import Loading from "@/components/ui/Loading";

export default function LoginPage() {
  const { loading } = useAuth();
  const { user, setUser } = useAuthStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  console.log("zustand user:: ", user);

  if (loading) return <Loading />;
  if (user) {
    router.push("/");
    return null;
  }

  const onEmailSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      setUser(userCredential.user);
      reset();

      router.push("/dashboard");
    } catch (error: any) {
      setServerError(null);

      let description = "Counldn't log in";

      switch (error.code) {
        case "auth/invalid-credential":
        case "auth/user-not-found":
          description = "user wasn't found";
        case "auth/wrong-password":
          description = "Wrong email or password. Register or try again";
          break;
        case "auth/invalid-email":
          description = "Incorrect format of email";
          break;
        default:
          description = error.message || "Unknown error";
      }

      setServerError(description);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl font-bold">
            Log in
          </CardTitle>
          <CardDescription className="text-center">
            Log in with Google or with email and password
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Google */}
          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={() => signInWithGoogle()}
            disabled={isLoading}
          >
            {/* <Google className="h-5 w-5" /> */}
            Login with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background text-muted-foreground px-2">
                or
              </span>
            </div>
          </div>

          {/* Форма email + password */}
          <form onSubmit={handleSubmit(onEmailSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...register("email")}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-destructive text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                disabled={isLoading}
              />
              {errors.password && (
                <p className="text-destructive text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="mt-2 w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </Button>

            {serverError && (
              <div className="bg-destructive/15 text-destructive mt-4 rounded-md p-3 text-sm">
                {serverError}
              </div>
            )}
          </form>
        </CardContent>

        <CardFooter className="text-muted-foreground flex flex-col items-center justify-center space-y-2 pt-2 text-sm">
          <p>
            No account?{" "}
            <a href="/register" className="text-primary hover:underline">
              Register
            </a>
          </p>
          {/* <a
            href="/forgot-password"
            className="text-primary hover:underline text-xs"
          >
            Forgot your password?
          </a> */}
        </CardFooter>
      </Card>
    </div>
  );
}
