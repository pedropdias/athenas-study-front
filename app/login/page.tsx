// Essa deverá ser a página de login da aplicação

"use client"

import { useEffect, useState } from "react";

export default function Login() {
  const [numero, setNumero]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(60);

  useEffect(() => {
    setNumero(Math.floor(Math.random() * 20));

  }, [])
  const hashtags = [
    '#KeepLearning',
    '#React>Angular?',
    '#KeepCalmAndDrinkCoffee',
    '#Print("Hello World")',
    '#InovaçãoEducativa',
    '#EnsinoTecnológico',
    '#BabyCoin',
    '#CCOMP',
    '#Ti=TecnicoDeInformatica',
    '#AprendizagemDigital',
    '#EducaçãoConectada',
    '#TecnologiaParaEducação',
    '#EducaçãoTecnológica',
    '#EducaçãoInclusiva',
    '#DigitalLearning',
    '#PoweredByCoffee',
    '#MdCoin',
    '#TecnologiaEDucação',
    '#EducaçãoTech',
    '#InovaçãoNaEducação'
  ];
  return (
    <main className="flex">
      <div className="min-w-[30rem] max-md:min-w-[100%]">
        <div className="bg-[#121212] p-10 rounded-lg  h-screen flex items-center justify-center flex-col">
          <h1 className="mb-10 text-2xl">Athenas <span className="text-sky-500">Academy</span></h1>
          <form action="" className="flex flex-col gap-2 w-[16rem]">
            E-mail
            <input type="email" required className=" bg-transparent border-2 border-white-500 rounded-md p-[0.2rem]" />
            Senha
            <input type="password" required className=" bg-transparent border-2 border-white-500 rounded-md p-[0.2rem]" />
            <button className="bg-sky-500 rounded-md mt-5 p-1  hover:bg-sky-600 duration-200"><strong>Entrar</strong></button>
            <p className="text-center">ou</p>
            <button className="bg-sky-500 rounded-md  p-1 hover:bg-sky-600 duration-200"><strong>Criar conta</strong></button>
          </form>
          <a href="" className="mt-5 text-sm">Esqueci minha senha</a>
        </div>

      </div>
      <div className="max-md:hidden bg-gradient-to-tr from-cyan-500 to-blue-500 w-screen flex justify-center items-center">
        <h1 className="text-2xl animate-pulse duration-300">{hashtags[numero]}</h1>

      </div>
    </main>
  );
}
