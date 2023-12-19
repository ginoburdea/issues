export default function AuthLayout({
    children,
    props,
}: {
    children: React.ReactNode
    props: any
}) {
    return (
        <div className="min-h-screen p-4 flex justify-center items-center">
            <div
                className="p-3 bg-gray-100 w-full sm:w-1/2 lg:w-1/3"
                bg-gray-300>
                {children}
            </div>
        </div>
    )
}
