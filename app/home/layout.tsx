import EmotionRegistry from "../EmotionRegistry";
import StoreClientLayout from "./store-client-layout";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EmotionRegistry>
      <StoreClientLayout>{children}</StoreClientLayout>
    </EmotionRegistry>
  );
}
