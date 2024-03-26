import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Server session : {session?.user?.name 
      ? <>{session?.user?.name}</>
      : <> Not logged in </>
    }
    </main>
  );
}
