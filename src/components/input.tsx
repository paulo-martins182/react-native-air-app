import { TextInput, TextInputProps, View, Platform } from "react-native";
import clsx from "clsx";
import { colors } from "@/styles/colors";
type variants = "primary" | "secondary" | "tertiary";

type inputProps = {
  children?: React.ReactNode;
  variant?: variants;
};

function Input({ children, variant = "primary" }: inputProps) {
  return (
    <View
      className={clsx("w-full h-16 flex-row items-center gap-2", {
        "h-14 px-4 rounded-lg border border-zinc-800": variant !== "primary",
        "bg-zinc-950": variant === "secondary",
        "bg-zinc-900": variant === "tertiary",
      })}
    >
      {children}
    </View>
  );
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-zinc-100 text-lg font-regular"
      placeholderTextColor={colors.zinc[400]}
      cursorColor={colors.zinc[100]}
      selectionColor={Platform.OS === "ios" ? colors.zinc[100] : undefined}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };
