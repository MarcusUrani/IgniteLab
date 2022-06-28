import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, Lightning } from "phosphor-react";
import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Loading } from "./Loading";
import { ComplementButtons } from "./ComplementButtons";
import { TeacherSection } from "./TeacherSection";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
    fetchPolicy: "no-cache",
  });

  if (!data || !data.lesson) {
    return (
      <section className="flex-1">
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      </section>
    );
  }

  return (
    <section className="flex-1">
      <section className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} cookies={true} />
            <DefaultUi />
          </Player>
        </div>
      </section>
      <section className="p-8 max-w-[1100px] mx-auto">
        <section className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <TeacherSection
                avatarURL={data.lesson.teacher.avatarURL}
                bio={data.lesson.teacher.bio}
                name={data.lesson.teacher.name}
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://discord.com/invite/rocketseat"
              target={"_blank"}
              rel="noreferrer"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>
            <a
              href="/"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </section>
        <ComplementButtons />
      </section>
    </section>
  );
}
