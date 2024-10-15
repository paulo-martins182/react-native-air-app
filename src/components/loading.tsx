import { ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator className="flex-1 bg-zinc-950 items-center justify-center text-sky-300" />
  );
}
