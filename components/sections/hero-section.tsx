import Card from "@/components/ui/card";

export default function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-3 py-12 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
        </div>
      </div>

      <Card gradient="blue" className="mx-auto max-w-3xl px-8 py-12 mb-20">
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {description}
        </p>
      </Card>
    </>
  );
}
