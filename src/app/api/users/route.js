import { connectionSource } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionSource);
    data = await User.find();
    console.log("data from db", data);
  } catch (error) {
    data = { success: false };
  }
  return NextResponse.json({ result: data, success: true });
}

export async function POST(request) {
  const payload = await request.json();
  console.log(payload);
  await mongoose.connect(connectionSource);
  let user = new User(payload);
  const result = await user.save();
  return NextResponse.json({ result, success: true });
}
