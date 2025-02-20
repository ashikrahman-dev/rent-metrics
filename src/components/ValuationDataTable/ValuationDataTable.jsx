import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/Table";

const initialData = [
    {
        asset: "Bellpark Place",
        values: [
            72069567, 40272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
    {
        asset: "Canterbury Park",
        values: [
            12069567, 68272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
    {
        asset: "Townhouses & Villas",
        values: [
            36069567, 68272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
    {
        asset: "Single-Family Homes",
        values: [
            42069567, 68272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
    {
        asset: "Luxury Properties",
        values: [
            72069567, 68272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
    {
        asset: "Agricultural Land",
        values: [
            72069567, 68272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
    {
        asset: "Hotels & Resorts",
        values: [
            72069567, 68272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
    {
        asset: "Golf Courses",
        values: [
            72069567, 68272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
    {
        asset: "Bellpark Place",
        values: [
            72069567, 68272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
    {
        asset: "Vacant Land",
        values: [
            72069567, 68272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
    {
        asset: "Subdivisions & Planned",
        values: [
            72069567, 68272675, 70898906, 65750567, 72069567, 68272675,
            70898906, 65750567, 72069567, 68272675,
        ],
    },
];

const totals = initialData[0].values.map((_, colIndex) =>
    initialData.reduce((sum, row) => sum + row.values[colIndex], 0)
);

export default function ValuationDataTable() {
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSort = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const filteredData = initialData
        .filter((row) => row.asset.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) =>
            sortOrder === "asc"
                ? a.asset.localeCompare(b.asset)
                : b.asset.localeCompare(a.asset)
        );

    return (
        <div className="p-6 bg-white rounded-lg">
            <div className="border border-dark-5 rounded-xl overflow-hidden">
                <Table className="font-red-hat-display">
                    <TableHeader className="">
                        <TableRow className="border-b border-dark-3">
                            <TableHead
                                onClick={handleSort}
                                className="cursor-pointer flex items-center gap-1 font-bold text-dark-2 pt-7.5 pl-6"
                            >
                                ASSET{" "}
                                {sortOrder === "asc"
                                    ? // <ArrowUp size={14} /> ^
                                      "^"
                                    : // <ArrowDown size={14} />
                                      "v"}
                            </TableHead>
                            {Array.from({ length: 10 }, (_, i) => (
                                <TableHead
                                    key={i}
                                    className="font-bold text-dark-2 px-5 py-6"
                                >
                                    T3A {4.75 - i * 0.25}%
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        {filteredData.map((row, index) => (
                            <TableRow
                                key={index}
                                className="border-b border-[#E6E6EC] text-dark-2 font-red-hat-display text-sm font-medium leading-[1.3]"
                            >
                                <TableCell className=" py-4 px-6">
                                    {row.asset}
                                </TableCell>
                                {row.values.map((value, i) => (
                                    <TableCell key={i}>
                                        ${value.toLocaleString()}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className="border-t border-dark-2">
                        <TableRow className="bg-main-shade text-sm font-medium">
                            <TableCell>Total</TableCell>
                            {totals.map((total, i) => (
                                <TableCell
                                    key={i}
                                    className="text-sm font-medium"
                                >
                                    ${total.toLocaleString()}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    );
}
