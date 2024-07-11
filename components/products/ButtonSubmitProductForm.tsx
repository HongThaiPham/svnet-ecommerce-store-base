"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {
  text: string;
};

const ButtonSubmitProductForm: React.FC<Props> = ({ text }) => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </Button>
      ) : (
        <Button type="submit">{text}</Button>
      )}
    </>
  );
};

export default ButtonSubmitProductForm;
