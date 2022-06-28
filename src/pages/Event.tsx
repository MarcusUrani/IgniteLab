import { useParams } from "react-router-dom";
import { ComplementButtons } from "../components/ComplementButtons";
import { Header } from "../components/Header";
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
                <ComplementButtons />
              </section>
            </div>
          </section>
        )}
        <Sidebar />
      </main>
    </section>
  );
}
