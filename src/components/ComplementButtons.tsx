import { CaretRight, FileArrowDown } from "phosphor-react";

export function ComplementButtons() {
  return (
    <section className="gap-8 mt-20 grid grid-cols-2 w-[95%]">
      <a
        href=""
        className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
      >
        <div className="bg-green-700 h-full flex p-6 items-center">
          <FileArrowDown size={40} />
        </div>
        <div className="py-6 leading-relaxed">
          <strong className="text-2xl font-bold">Material complementar</strong>
          <p className="text-sm text-gray-200 mt-2">
            Acesse o material complementar para acelerar seu desenvolvimento
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
          <strong className="text-2xl font-bold">Wallpapers exclusivos</strong>
          <p className="text-sm text-gray-200 mt-2">
            Baixe wallpapers exclusivos do Ignite Lab para sua máquina
          </p>
        </div>
        <div className="h-full p-6 flex items-center">
          <CaretRight size={24} />
        </div>
      </a>
    </section>
  );
}
