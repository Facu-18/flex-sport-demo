import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-flex-ice to-[#e9f3ff] p-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl overflow-hidden rounded-3xl border border-flex-navy/10 bg-white shadow-2xl shadow-flex-navy/10">
        <section className="hidden w-1/2 bg-flex-navy p-10 text-flex-ice md:flex md:flex-col md:justify-between">
          <div>
            <p className="inline-flex rounded-full border border-flex-lime/40 bg-flex-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-flex-lime">
              Demo comercial
            </p>
            <h1 className="mt-6 max-w-sm text-4xl font-extrabold leading-tight">
              FlexSport centraliza ventas, obras y cobranzas.
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/75">
              Accedé a una demo guiada con módulos enlazados de punta a punta.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
            <p className="font-semibold text-flex-lime">Credenciales demo</p>
            <p className="mt-2 text-white/80">Email: demo@flexsolution.com</p>
            <p className="text-white/80">Clave: demo1234</p>
          </div>
        </section>

        <section className="flex w-full items-center justify-center p-8 md:w-1/2">
          <div className="w-full max-w-sm space-y-6">
            <div>
              <Image
                src="/logo.svg"
                alt="FlexSport"
                width={180}
                height={36}
                className="h-auto w-[170px]"
                priority
              />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-flex-navy/60">
                FlexSport
              </p>
              <h2 className="mt-2 text-3xl font-bold text-flex-navy">Ingresar a la demo</h2>
              <p className="mt-1 text-sm text-flex-navy/70">Front-end de presentación comercial.</p>
            </div>

            <form className="space-y-4">
              <label className="block space-y-1">
                <span className="text-sm font-medium text-flex-navy">Email</span>
                <input
                  type="email"
                  defaultValue="demo@flexsolution.com"
                  className="w-full rounded-xl border border-flex-navy/20 bg-flex-ice px-4 py-3 outline-none ring-flex-lime transition focus:ring-2"
                  readOnly
                />
              </label>
              <label className="block space-y-1">
                <span className="text-sm font-medium text-flex-navy">Clave</span>
                <input
                  type="password"
                  defaultValue="demo1234"
                  className="w-full rounded-xl border border-flex-navy/20 bg-flex-ice px-4 py-3 outline-none ring-flex-lime transition focus:ring-2"
                  readOnly
                />
              </label>

              <Link
                href="/dashboard"
                className="inline-flex w-full items-center justify-center rounded-xl bg-flex-lime px-4 py-3 text-sm font-bold text-flex-navy transition hover:brightness-95"
              >
                Ingresar
              </Link>
            </form>

            <p className="text-xs text-flex-navy/60">
              Acceso de demostración. No requiere autenticación real.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
