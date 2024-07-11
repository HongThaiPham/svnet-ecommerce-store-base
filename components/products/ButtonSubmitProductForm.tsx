import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {};

const ButtonSubmitProductForm: React.FC<Props> = ({}) => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </Button>
      ) : (
        <Button type="submit">Create Product</Button>
      )}
    </>
  );
};

export default ButtonSubmitProductForm;
