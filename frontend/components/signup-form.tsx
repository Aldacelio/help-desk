'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Chrome } from "lucide-react"

export function SignUpForm() {
  return (
    <div className="flex min-h-screen">
      {/* Lado esquerdo - Imagem */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-100 items-center justify-center">
        <Image
          src="/imagem.svg"
          alt="Ilustração de cadastro"
          width={500}
          height={500}
          priority
        />
      </div>

      {/* Lado direito - Formulário */}
      <div className="w-full lg:w-1/2 p-8">
        <form className="max-w-md mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Criar conta</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-md"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">Senha</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-md"
                placeholder="********"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirmar Senha</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 border rounded-md"
                placeholder="********"
              />
            </div>
          </div>

          <Button className="w-full cursor-pointer" type="submit">
            Cadastrar
          </Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background">ou continue com</span>
            </div>
          </div>

          <Button variant="outline" className="w-full cursor-pointer">
            <Chrome className="mr-2 h-5 w-5" />
            Google
          </Button>
        </form>
      </div>
    </div>
  )
}