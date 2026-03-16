import { ObraHeader } from "@/components/modules/obras/ObraHeader";
import { ObraTabs } from "@/components/modules/obras/ObraTabs";
import { cuotas } from "@/data/cuotas";
import { obras } from "@/data/obras";
import { ordenesCompra } from "@/data/ordenes-compra";
import { productos } from "@/data/productos";

export default async function ObraDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const obra = obras.find((item) => item.id === id);

  if (!obra) {
    return (
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-8 text-flex-navy">
        Obra no encontrada.
      </section>
    );
  }

  const cuotasObra = cuotas.filter((item) => item.contratoId === obra.contratoId);
  const comprasObra = ordenesCompra.filter((item) => item.obraId === obra.id);
  const productosObra = productos.filter((item) => item.obraAsignada === obra.nombre);

  return (
    <div className="space-y-5">
      <ObraHeader obra={obra} />
      <ObraTabs obra={obra} cuotas={cuotasObra} compras={comprasObra} productos={productosObra} />
    </div>
  );
}
