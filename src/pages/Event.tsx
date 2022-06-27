import { CaretRight, FileArrowDown } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <section className="flex-1 bg-blur bg-cover bg-no-repeat">
            <div className="flex flex-col justify-center items-center gap-4 mt-20">
              <h2 className="text-4xl">
                Bem vindo ao{" "}
                <strong className="text-bold text-green-500">Ignite Lab</strong>
              </h2>
              <section className="flex flex-col items-center justify-center">
                <span className="text-2xl">
                  Para adentrar o incrível mundo do React selecione uma aula ao
                  lado.
                </span>
                <section className="gap-8 mt-20 grid grid-cols-2 w-[95%]">
                  <a
                    href=""
                    className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
                  >
                    <div className="bg-green-700 h-full flex p-6 items-center">
                      <FileArrowDown size={40} />
                    </div>
                    <div className="py-6 leading-relaxed">
                      <strong className="text-2xl font-bold">
                        Material complementar
                      </strong>
                      <p className="text-sm text-gray-200 mt-2">
                        Acesse o material complementar para acelerar seu
                        desenvolvimento
                      </p>
                    </div>
                    <div className="h-full p-6 flex items-center">
                      <CaretRight size={24} />
                    </div>
                  </a>
                  <a
                    href=""
                    className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
                  >
                    <div className="bg-green-700 h-full flex p-6 items-center">
                      <FileArrowDown size={40} />
                    </div>
                    <div className="py-6 leading-relaxed">
                      <strong className="text-2xl font-bold">
                        Wallpapers exclusivos
                      </strong>
                      <p className="text-sm text-gray-200 mt-2">
                        Baixe wallpapers exclusivos do Ignite Lab para sua
                        máquina
                      </p>
                    </div>
                    <div className="h-full p-6 flex items-center">
                      <CaretRight size={24} />
                    </div>
                  </a>
                </section>
              </section>
            </div>
          </section>
        )}
        <Sidebar />
      </main>
    </section>
  );
}
