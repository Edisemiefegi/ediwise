import { redirect } from "next/navigation";

export default function Home() {
redirect('/auth')

  return (
   <div className="text-primary text-4xl">Ediwise
   <i className="pi pi-check"></i>
   
   </div>
  );
}
