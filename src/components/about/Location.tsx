
import LocationMap from "./LocationMap";

const Location = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Location
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are located at Maraning, Purok Lemon, near North Central
                Mindanao College.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
