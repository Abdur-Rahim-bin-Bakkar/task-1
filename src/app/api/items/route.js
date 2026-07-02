import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const items = await request.json();

        if (!Array.isArray(items)) {
            return NextResponse.json(
                {
                    message: "Items must be an array.",
                },
                {
                    status: 400,
                }
            );
        }

        const total = items.reduce((sum, item) => sum + Number(item.price), 0);

        const mostExpensive = items.reduce((prev, current) =>
            Number(current.price) > Number(prev.price) ? current : prev
        );

        return NextResponse.json({
            total,
            mostExpensive,
        });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}