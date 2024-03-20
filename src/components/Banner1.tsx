import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import InputGroup from "./InputGroup";
import { Search } from "lucide-react";


export default function Banner1({ className = "" }: { className?: string }) {
    return (
        <>
            <div className="w-screen h-screen relative bg-[url('/banner1.png')] bg-cover bg-center">
                <div className="absolute top-0 left-0">
                    <div className="grid place-content-center w-screen h-screen">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-6 text-center">
                                <h1 className="text-5xl font-bold text-white">Temukan Rumah Impian Anda Hanya di Homespot </h1>
                                <p className="text-2xl font-bold text-white">Solusi rumah impian anda</p>
                            </div>
                            <div className="flex justify-center">
                                <Card className="bg-card/50 border-0 min-w-[85%]">
                                    <CardContent className="p-5">
                                        <div className="flex justify-between gap-3">
                                            <div>
                                                <Select>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select a fruit" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Fruits</SelectLabel>
                                                            <SelectItem value="apple">Apple</SelectItem>
                                                            <SelectItem value="banana">Banana</SelectItem>
                                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                                            <SelectItem value="grapes">Grapes</SelectItem>
                                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="flex-1">
                                                <InputGroup placeholder="Cari Lokasi dan nama properti" icon={<Search className="text-primary" />} className="w-full" />
                                            </div>
                                            <div>
                                                <Button className="w-full px-10">Cari</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}