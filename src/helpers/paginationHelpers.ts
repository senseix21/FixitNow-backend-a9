
type IOptions = {
    page?: number;
    size?: number;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
};

type IOptionsResult = {
    page: number;
    size: number;
    minPrice: number;
    maxPrice: number;
    skip: number;
    sortBy: string;
    sortOrder: "asc" | "desc";
};

const calculatePagination = (options: IOptions): IOptionsResult => {
    const page = Number(options.page || 1);
    const size = Number(options.size || 10);
    const minPrice = Number(options.minPrice || 20000);
    const maxPrice = Number(options.maxPrice || 70000);
    const skip = (page - 1) * size;
    const sortBy = options.sortBy || 'createdAt';
    const sortOrder = options.sortOrder || 'desc';

    return {
        page,
        size,
        skip,
        sortBy,
        sortOrder,
        minPrice,
        maxPrice,
    };
};

export const paginationHelpers = {
    calculatePagination,
};
