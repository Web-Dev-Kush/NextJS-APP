import { connectionSource} from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const userId = content.params.userid;
  const filter = { _id: userId };
  const payload = await request.json();
  console.log(payload);
  await mongoose.connect(connectionSource);

  const result = await User.findOneAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  const userId = content.params.userid;
  const record = { _id: userId };
  await mongoose.connect(connectionSource);
  const result = await User.findById(record);
  return NextResponse.json({ result, success: true });
}

export async function DELETE(request, content) {
  const userId = content.params.userid;
  const record = { _id: userId };
  await mongoose.connect(connectionSource);
  const result = await User.deleteOne(record);
  return NextResponse.json({ result, success: true });
}
