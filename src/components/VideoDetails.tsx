export function VideoDetails() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">Aula 01 - Abertura do Ignite Lab</h1>
      <p className="mt-4 text-gray-200 leading-relaxed">
        Nessa aula vamos dar início ao projeto criando a estrutura base da
        aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar
        o setup do nosso projeto no GraphCMS criando as entidades da aplicação e
        integrando a API GraphQL gerada pela plataforma no nosso front-end
        utilizando Apollo Client.
      </p>
      <section className="flex items-center gap-4 mt-6">
        <img
          className="h-16 w-16 rounded-full border-2 border-blue-500"
          src="https://github.com/diego3g.png"
          alt="Ícone de usuário do instrutor da aula"
        />
        <div className="leading-relaxed">
          <strong className="text-bold text-2xl block">Diego Fernandes</strong>
          <span className="text-gray-200 text-sm">CTO at RocketSeat</span>
        </div>
      </section>
    </div>
  );
}
