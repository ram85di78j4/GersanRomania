import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_TIMEOUT_MS = 8000;

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

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      console.error('Telegram credentials not configured.');
      return NextResponse.json(
        { error: 'Serviciul de notificări nu este configurat. Vă rugăm contactați-ne direct.' },
        { status: 500 }
      );
    }

    const telegramMessage = `
🔔 <b>CERERE NOUĂ DE OFERTĂ - GERSAN ROMANIA</b>

👤 <b>Nume:</b> ${name}
${company ? `🏢 <b>Companie:</b> ${company}\n` : ''}📞 <b>Telefon:</b> ${phone}
📧 <b>Email:</b> ${email}

🔧 <b>Tip Proiect:</b> ${projectType}
📍 <b>Localitate:</b> ${location}
${budget ? `💰 <b>Buget:</b> ${budget}\n` : ''}
📝 <b>Detalii:</b>
${details}

⏰ <i>${new Date().toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' })}</i>
    `.trim();

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS);

    try {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: telegramMessage,
            parse_mode: 'HTML',
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      if (!telegramResponse.ok) {
        const errText = await telegramResponse.text();
        console.error('Telegram API error:', errText);
        return NextResponse.json(
          { error: 'A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou.' },
          { status: 500 }
        );
      }
    } catch (fetchError) {
      clearTimeout(timeout);
      console.error('Telegram fetch error:', fetchError);
      return NextResponse.json(
        { error: 'A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Mesajul a fost trimis cu succes!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou.' },
      { status: 500 }
    );
  }
}
