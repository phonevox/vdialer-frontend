"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  className?: string;
}

const formSchema = z.object({
  username: z.string().min(1, { message: "Digite um usuário" }),
  password: z.string().min(1, { message: "Digite uma senha" }),
});

export function LoginForm({ className }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Faça algo com os valores do formulário.
    console.log(values);
  }

  return (
    <form className={className} >
      <Input type="username" placeholder="Usuario"></Input>
      <Input type="password" placeholder="Senha"></Input>
      <Button className="w-full" type="submit">
        Logar
      </Button>
    </form>
  );
}
