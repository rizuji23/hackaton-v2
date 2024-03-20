import { CaraouselBox } from "./CaraouselBox";

export default function Banner2() {
    return (
        <>
            <div className="flex flex-row w-full py-9">
                <div className="w-1/2">
                    <img src="/bg2.png" className="w-full" alt="" />
                </div>
                <div className="w-2/3 -ml-10 self-center">
                    <CaraouselBox />
                </div>
            </div>
        </>
    )
}