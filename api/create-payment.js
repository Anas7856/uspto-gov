export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { amount, slug, owner, service } = req.body || {};
  const num = Number(amount);

  if (!num || num < 6 || num > 10000) {
    return res
      .status(400)
      .json({ error: "Amount must be between $6 and $10000" });
  }

  try {
    const r = await fetch("https://chain2pay.is/api/v2/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CHAIN2PAY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: num,
        currency: "USD",
        metadata: { slug, owner, service },
      }),
    });

    const json = await r.json();

    if (!r.ok) {
      return res
        .status(r.status)
        .json({ error: json?.error?.message || "Payment create nahi hui" });
    }

    return res.status(200).json({ checkout_url: json.checkout_url });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
