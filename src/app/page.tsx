import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/custom/loginform";

export default function Home() {
  const MAIN_COLOR = "zinc";
  const MAIN_COLOR_INT = "900";
  const BORDER = "none";
  return (
    <div className="flex bg-violet-700 bg-gradient-to-tl from-white via-violet-400 to-violet-700 xfrom-zinc-50 xvia-purple-500 xto-purple-900">
      {/* background img - será ocultada no sm (mobile) */}
      <div className={`hidden lg:block w-2/3 h-screen`}>
        <div className="flex items-center justify-center h-screen">
          <div className="flex items-center justify-center">
            <Image
              src="/testone.svg"
              className="max-w-[500px]"
              width={1920}
              height={1080}
              alt="Logo da Phonevox"
            />
          </div>
        </div>
      </div>

      {/* main content - será mostrado sempre */}
      <div className="w-full lg:w-1/3 h-screen shadow-md">
        <div
          className={`flex flex-col relative justify-center h-full px-5 rounded-none bg-zinc-50`}
        >
          {/** Posiciono um pouco pra cima */}
          <div className={`mb-20 `}>
            <div className={`flex items-center justify-center`}>
              <Image
                className="max-w-sm lg:max-w-[250px]"
                src="/pg-transparent.png"
                width={1920}
                height={1080}
                alt="Logo da Phonevox"
              />
            </div>
            <div className={`flex flex-col items-center mb-5`}>
              <p className="text-1xl md:text-2xl lg:text-3xl font-extrabold">
                bem-vindo de volta!
              </p>
              <p className="text-xs md:text-sm lg:text-sm text-muted-foreground italic">
                por favor, realize login com suas credenciais
              </p>
            </div>
            <div>
              <LoginForm className={`space-y-5 mx-20 lg:mx-0`} />
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center">
            <a
              target="_blank"
              href="https://github.com/adriankubinyete"
              className="text-xs md:text-xs lg:text-sm italic"
            >
              © Adrian Kubinyete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
