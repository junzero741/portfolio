export default function HeroSection({ title }: { title: string }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-3 py-12 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        </div>
      </div>
    </>
  );
}
