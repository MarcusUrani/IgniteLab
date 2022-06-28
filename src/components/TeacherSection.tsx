interface TeacherSectionProps {
  avatarURL: string;
  bio: string;
  name: string;
}

export function TeacherSection(props: TeacherSectionProps) {
  return (
    <section className="flex items-center gap-4 mt-6">
      <img
        className="h-16 w-16 rounded-full border-2 border-blue-500"
        src={props.avatarURL}
        alt="Ícone de usuário do instrutor da aula"
      />
      <div className="leading-relaxed">
        <strong className="text-bold text-2xl block">{props.name}</strong>
        <span className="text-gray-200 text-sm">{props.bio}</span>
      </div>
    </section>
  );
}
