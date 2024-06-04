import MainCard from "@/components/MainCard";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[800px] flex-col items-center justify-between">
      <div className="flex min-h-screen w-full">
        <MainCard />
      </div>
    </main>
  );
}
