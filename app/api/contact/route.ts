import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      hairloss,
      age,
      hairlossSince,
      fullName,
      phone,
      country,
      timestamp
    } = body

    await resend.emails.send({
      from: "Weboldal <noreply@domain.hu>",
      to: [process.env.CONTACT_EMAIL!],
      subject: "Új árajánlat kérés érkezett",
      html: `
        <h2>Új érdeklődő</h2>
        <p><strong>Név:</strong> ${fullName}</p>
        <p><strong>Telefonszám:</strong> ${phone}</p>
        <p><strong>Ország:</strong> ${country}</p>
        <hr />
        <p><strong>Hajhullás állapota:</strong> ${hairloss}</p>
        <p><strong>Életkor:</strong> ${age}</p>
        <p><strong>Mióta:</strong> ${hairlossSince} éve</p>
        <p><strong>Beküldve:</strong> ${new Date(timestamp).toLocaleString("hu-HU")}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: "Email küldési hiba" },
      { status: 500 }
    )
  }
}
