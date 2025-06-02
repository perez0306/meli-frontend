import DetailPage from './components';
import { type Params } from 'next/dist/server/request/params';
import { getProduct } from '@/lib/api/services';
import { ProductDataI } from '@/types';

export default async function Page({ params }: { params: Params }) {

    const res: ProductDataI = await getProduct(params.id_product as string);

    if (!res) {
        return <div>Producto no encontrado</div>;
    }

    return <DetailPage product={res} />;
}