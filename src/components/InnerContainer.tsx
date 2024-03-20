export default function InnerContainer({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <>
            <div className="px-[113px]">
                {children}
            </div>
        </>
    )
}