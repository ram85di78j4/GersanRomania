import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, email, projectType, location, budget, details } = body;

    // Validate required fields
    if (!name || !phone || !email || !projectType || !location || !details) {
      return NextResponse.json(
        { error: 'Toate câmpurile obligatorii trebuie completate.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresa de email nu este validă.' },
        { status: 400 }
      );
    }

    // Create email transporter
    // Using environment variables for SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'office@gersanromania.ro',
      subject: `Cerere nouă de ofertă - ${projectType} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #06b6d4 0%, #a855f7 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #06b6d4; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #06b6d4; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #06b6d4; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">GERSAN ROMANIA</h1>
              <p style="margin: 10px 0 0 0;">Cerere Nouă de Ofertă</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nume Complet:</div>
                <div class="value">${name}</div>
              </div>
              
              ${company ? `
              <div class="field">
                <div class="label">Companie:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Telefon:</div>
                <div class="value">${phone}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">Tip Proiect:</div>
                <div class="value">${projectType}</div>
              </div>
              
              <div class="field">
                <div class="label">Localitate:</div>
                <div class="value">${location}</div>
              </div>
              
              ${budget ? `
              <div class="field">
                <div class="label">Buget Estimativ:</div>
                <div class="value">${budget}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Detalii Proiect:</div>
                <div class="value">${details.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p><strong>GERSAN ROMANIA</strong> - Soluții Integrate LED & EV</p>
                <p>București, România | office@gersanromania.ro | +45 22295961</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
CERERE NOUĂ DE OFERTĂ - GERSAN ROMANIA

Nume Complet: ${name}
${company ? `Companie: ${company}\n` : ''}Telefon: ${phone}
Email: ${email}
Tip Proiect: ${projectType}
Localitate: ${location}
${budget ? `Buget Estimativ: ${budget}\n` : ''}
Detalii Proiect:
${details}

---
GERSAN ROMANIA - Soluții Integrate LED & EV
București, România | office@gersanromania.ro | +45 22295961
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Mesajul a fost trimis cu succes!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou.' },
      { status: 500 }
    );
  }
}
