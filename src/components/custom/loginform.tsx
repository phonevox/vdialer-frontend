"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"

import axios from "axios";

interface Props {
  className?: string;
}

const formSchema = z.object({
  username: z.string().min(1, { message: "Digite um usuário" }),
  password: z.string().min(1, { message: "Digite uma senha" }),
});

export function LoginForm({ className }: Props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post(
        "http://interno.falevox.com.br:21312/vdialer/auth/login",
        {
          username: data.username,
          password: data.password,
        }
      );

      console.log("Response:", response.data);

      // Verifique se a resposta tem o status de sucesso
      if (response.status === 200) {
        console.log("Login realizado com sucesso:", response.data);

        // Armazene os tokens de forma segura
        sessionStorage.setItem("access_token", response.data.data.access_token);
        sessionStorage.setItem(
          "refresh_token",
          response.data.data.refresh_token
        );

        // Agora os tokens podem ser usados para autenticação em requisições futuras
        router.push("/dashboard");
        toast.success('Login bem sucedido!');
      } else {
        toast.error('Usuário ou senha incorreta!');
        // Trate o caso onde o status não é 200
        console.error("Login falhou com status:", response.status);
        setError("root.serverError", { message: "Erro ao realizar login" });
      }
    } catch (err) {
      toast.error('Erro ao realizar login!');
      console.error("Erro ao realizar login:", err);
      setError("root.serverError", { message: "Erro ao realizar login" });
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-5 gap-1">
        <Input
          disabled={isSubmitting}
          type="username"
          placeholder="Usuario"
          {...register("username", { required: true })}
        ></Input>
        {errors.username && (
          <p className="text-xs text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col mb-5 gap-1">
        <Input
          disabled={isSubmitting}
          type="password"
          placeholder="Senha"
          {...register("password", { required: true })}
        ></Input>
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="flex justify-center">
        <Button disabled={isSubmitting} className="w-full" type="submit">
          {isSubmitting ? "Processando..." : "Entrar"}
        </Button>
      </div>
    </form>
  );
}
