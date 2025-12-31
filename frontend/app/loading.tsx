export default function LoadingPage() {
  return (
    <>
      {/* Loading */}
      <section className="h-svh w-full grid place-items-center">
        <div className="flex-col gap-4 w-full flex items-center justify-center h-svh">
          <div className="w-20 h-20 border-4 border-transparent text-blue-500 text-4xl animate-spin flex items-center justify-center border-t-blue-500 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-red-500 text-2xl animate-spin flex items-center justify-center border-t-red-500 rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
}
