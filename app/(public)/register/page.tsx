"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/app/store/authStore";
import { RegisterFormValues, registerSchema } from "@/app/schemas/schema";
import Link from "next/link";
import { HUBCLAW_PROD } from "@/app/consts";

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuthStore();
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      setUser(userCredential.user);
      const redirectUrl = `${HUBCLAW_PROD}/dashboard?email=${encodeURIComponent(userCredential.user.email || "")}`;

      await sendEmailVerification(userCredential.user, {
        url: redirectUrl,
      });

      reset();
      router.push("/verify-email");
    } catch (error: any) {
      console.error(error);
      setServerError(null);

      let description = "Couldn't create an account, try later.";

      switch (error.code) {
        case "auth/email-already-in-use":
          description = "This  email is already registered";
          break;
        case "auth/invalid-email":
          description = "Incorrect format of email";
          break;
        case "auth/weak-password":
          description = "Password is too weak";
          break;
        case "auth/operation-not-allowed":
          description = "Operation is not allowed in Firebase";
          break;
        default:
          description = error.message || "Unknown error";
      }

      setServerError(description);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-muted/40 flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Register with your email and password
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-destructive text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Пароль */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-destructive text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Подтверждение пароля */}
            <div className="space-y-2">
              <Label htmlFor="passwordConfirm">Repeat password</Label>
              <Input
                id="passwordConfirm"
                type="password"
                placeholder="••••••••"
                {...register("passwordConfirm")}
              />
              {errors.passwordConfirm && (
                <p className="text-destructive text-sm">
                  {errors.passwordConfirm.message}
                </p>
              )}
            </div>

            <Button type="submit" className="mt-6 w-full" disabled={isLoading}>
              {isLoading ? "Creating an account..." : "Register"}
            </Button>

            {serverError && (
              <div className="bg-destructive/15 text-destructive mt-4 rounded-md p-3 text-sm">
                {serverError}
              </div>
            )}
          </form>
        </CardContent>

        <CardFooter className="text-muted-foreground flex flex-col items-center justify-center text-sm">
          <p>
            Already registered?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
