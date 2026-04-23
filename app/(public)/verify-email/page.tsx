"use client";

import { useAuth } from "@/shared/hooks/useAuth";
import { sendEmailVerification } from "firebase/auth";
import { Button } from "@/shared/components/ui/button";

export default function VerifyEmailPage() {
  const { user } = useAuth();

  const resendVerification = async () => {
    if (!user) return;

    try {
      await sendEmailVerification(user);
    } catch (err) {}
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Please, register or log in
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-8 text-center">
        <h1 className="mb-4 text-2xl font-bold">Verify email</h1>
        <p className="mb-6">
          We have sent a letter at <strong>{user.email}</strong>.<br />
          Check your email (and Spam folder). Update the page after verifiying.
        </p>

        <Button onClick={resendVerification} variant="outline">
          Send email again
        </Button>
      </div>
    </div>
  );
}
