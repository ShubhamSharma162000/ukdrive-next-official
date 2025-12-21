import { Suspense } from "react";
import SignupClient from "./SignupClient";

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <SignupClient />
    </Suspense>
  );
}
