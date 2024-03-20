import { Card, CardContent } from "./ui/card";

export default function CityBox() {
    return (
        <>
            <Card className="bg-[#96c0ff]">
                <CardContent className="p-5">
                    <div className="flex flex-col gap-3">
                        <div>
                            <h4 className="font-bold text-xl">Semarang</h4>
                            <p className="font-medium text-sm mt-3">366 Properti</p>
                        </div>

                        <div className="flex justify-end pt-5">
                            <img src="/k1.png" className="w-[160px]" alt="" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}