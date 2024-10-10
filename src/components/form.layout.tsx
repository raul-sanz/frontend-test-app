import Header from "@/components/header.component";

export default function FormLayout({title, children }:{title: string, children: React.ReactNode}) {
  return (
    <>
      <Header />
      <section className="h-full pt-20">
        <div className="flex min-h-full flex-1 flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
          <div className="w-11/12 md:w-8/12">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              alt="Your Company"
              src="https://getonbrd-prod.s3.amazonaws.com/uploads/users/logo/2893/logo.png"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {title}
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            {children}
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
