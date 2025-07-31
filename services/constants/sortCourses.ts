export type SortOption = { price: "asc" | "desc" } | { created: "asc" | "desc" };

export const sortCourses: Record<string, SortOption> = {
    "priceAsc": { price: "asc" },
    "priceDesc": { price: "desc" },
    "dateAsc": { created: "asc" },
    "dateDesc": { created: "desc" },
}

export const dataSortList: { label: string, value: string }[] = [
    {
        label: "جدید ترین",
        value: "dateDesc"
    },
    {
        label: "قدیمی ترین",
        value: "dateAsc"
    },
    {
        label: "ارزان ترین",
        value: "priceAsc"
    },
    {
        label: "گران ترین",
        value: "priceDesc"
    }
]