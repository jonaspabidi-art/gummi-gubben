import { type NextRequest } from "next/server";

interface BiluppgifterResponse {
  data?: {
    basic?: {
      make?: string;
      model?: string;
      vehicle_year?: string;
      color?: string;
    };
  };
  error?: string;
}

export async function GET(request: NextRequest) {
  const regnr = request.nextUrl.searchParams.get("regnr");

  if (!regnr || regnr.trim().length < 2) {
    return Response.json({ error: "Ogiltigt registreringsnummer" }, { status: 400 });
  }

  const apiKey = process.env.BILUPPGIFTER_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API-nyckel saknas" }, { status: 500 });
  }

  const normalized = regnr.replace(/\s/g, "").toUpperCase();

  const upstream = await fetch(
    `https://api.biluppgifter.se/api/v1/vehicle/regno/${encodeURIComponent(normalized)}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
    }
  );

  if (!upstream.ok) {
    if (upstream.status === 404) {
      return Response.json({ error: "Fordonet hittades inte" }, { status: 404 });
    }
    return Response.json({ error: "Fel vid hämtning av fordonsuppgifter" }, { status: 502 });
  }

  const json: BiluppgifterResponse = await upstream.json();
  const basic = json.data?.basic;

  if (!basic?.make) {
    return Response.json({ error: "Inga uppgifter hittades för det registreringsnumret" }, { status: 404 });
  }

  return Response.json({
    make: basic.make,
    model: basic.model ?? "",
    year: basic.vehicle_year ?? "",
    color: basic.color ?? "",
  });
}
