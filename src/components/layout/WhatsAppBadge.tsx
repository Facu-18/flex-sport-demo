import Image from "next/image";

export function WhatsAppBadge() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-black/25 ring-2 ring-white"
    >
      <Image src="/wsp.png" alt="" width={30} height={30} className="h-7 w-7" />
    </div>
  );
}
