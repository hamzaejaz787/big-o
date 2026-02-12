"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SubmitButton = ({
  text,
  variant,
  className,
  disabled,
}: {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
  disabled?: string;
}) => {
  return (
    <Button
      variant={variant}
      type="submit"
      disabled={disabled === "executing" ? true : false}
      aria-disabled={disabled === "executing" ? true : false}
      className={cn(
        `bg-transparent text-white ${
          disabled === "executing" ? "cursor-not-allowed opacity-50" : ""
        }`,
        className
      )}
    >
      {disabled === "executing" ? `Please Wait...` : text}
    </Button>
  );
};

export default SubmitButton;
