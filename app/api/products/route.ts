import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Handle GET requests (fetch all products)
export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
