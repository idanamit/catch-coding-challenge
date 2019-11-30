export interface ServerData {
    metadata: Metadata;
    results: Product[];
}

export interface Metadata {
    query: string;
    total: number;
    page: number;
    pages: number;
}

export interface Product {
    id: string;
    name: string;
    salePrice: number;
    retailPrice: number;
    imageUrl: string;
    quantityAvailable: number;
}
