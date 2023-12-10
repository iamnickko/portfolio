import Image from "next/image";
export default function ProjectCard({
  src,
  title,
  tech,
  body,
  demoUrl,
  codeUrl,
  reverse
}) {

  const articleReverse = reverse ? 'md:flex-row-reverse' : ''
  const articleStyles = `bg-white rounded-xl overflow-clip mb-5 p-5 md:flex ${articleReverse}`
  const viewButtonReverse = reverse ? 'md:justify-start' : ''
  const viewButtonStyles = `flex gap-5 justify-end text-sm text-green font-body font-bold ${viewButtonReverse}`

  return (
    <article className={articleStyles}>
      <div className="rounded-lg overflow-clip md:w-3/5 transition hover:cursor-pointer hover:opacity-50 duration-300">
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <Image src={src} alt={title} width={800} height={800} />
        </a>
      </div>
      <div className="flex flex-col justify-between p-5 md:w-2/5">
        <div className="mb-9">
          <h3 className="font-title font-bold text-green text-2xl text-center pb-3 md:text-3xl">
            {title}
          </h3>
          <div className="font-body font-bold border border-green shadow-md rounded-lg py-2 px-1 mb-5 text-center text-green text-xs md:text-sm">
            <p>{tech}</p>
          </div>
          {body}
        </div>
        <div className={viewButtonStyles}>
          <a
            href={codeUrl}
            target="_blank"
            className="hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-2 after:content-['_↗']"
          >
            View the code
          </a>
          <a
            href={demoUrl}
            target="_blank"
            className="hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-2 after:content-['_↗']"
          >
            View the demo
          </a>
        </div>
      </div>
    </article>
  );
}
