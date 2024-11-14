import { Link } from "react-router-dom";
import logopImg from "../../assets/logo.svg";
import { Contaier } from "../../components/container";
import { InputComponent } from "../../components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email("Insira um email válido")
    .min(1, "O campo email é obrigatório"),

  password: z.string().min(1, "O campo senha é obrigatório"),
});

type formData = z.infer<typeof schema>;

function Onsubmit(data: formData) {
  console.log(data);
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  return (
    <Contaier>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4 ">
        <Link to="/" className="mb-6 max-w-sm w-full">
          <img src={logopImg} alt="logo do site" className="w-full" />
        </Link>

        <form
          className="bg-white max-w-xl w-full p-4 rounded-lg"
          onSubmit={handleSubmit(Onsubmit)}
        >
          <div className="mb-3">
            <InputComponent
              type="email"
              placeholder="Digite seu email"
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>

          <div className="mb-3">
            <InputComponent
              type="password"
              placeholder="Digite sua senha"
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>
          <button
            className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium"
            type="submit"
          >
            Acessar
          </button>
        </form>
      </div>
    </Contaier>
  );
}
