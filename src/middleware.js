import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isAccess = request.cookies.get("prospect");

    if (path === "/free_training/content" && !isAccess) {
        return NextResponse.redirect(new URL("/free_training", request.url));
    } else if (path === "/free_training" && isAccess) {
        return NextResponse.redirect(
            new URL("/free_training/content", request.url)
        );
    } else {
        return NextResponse.next();
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/", "/free_training", "/free_training/content"],
};