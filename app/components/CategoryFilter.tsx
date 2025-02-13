export default function CategoryFilter() {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold">Filter by Category</h2>
            <select className="mt-2 p-2 border rounded-md">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Garden</option>
            </select>
        </div>
    );
}
