import { NextResponse, NextRequest } from "next/server"

export async function GET(req) {

    const url = new URL(req.url);
    const queryParams = url.searchParams; // `URLSearchParams`
    const keyword = queryParams.get('keyword');
    const count = queryParams.get('count');
    const category = queryParams.get('category');
    const geo = queryParams.get('geo');

    const params = {
        count: count,
        tag: keyword || category,
        industry: category,
        geo: geo,
    }

    if (geo === null) {
        delete params.geo;
    }

    const response = await fetch('https://jobicy.com/api/v2/remote-jobs?' + new URLSearchParams(params));

    const data = await response.json();
    if (response.status === 200) {
        return NextResponse.json(data);
    } else {
        return NextResponse.error.json({ message: 'Failed to fetch jobs' });
    }
}