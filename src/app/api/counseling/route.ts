import { Resend } from 'resend';

const resend = new Resend('re_8f95D33t_KuQo7kKTUhFZnJU3d9tAJZpg');

export async function POST(request: Request) {
    const { name, message, email, phone, branch, destination } = await request.json();

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // Paxi tapai le afno domain halna saknu hunxa
            to: 'prajwal8308@gmail.com', // Manager ko email
            subject: 'New Inquiry from Consultancy Web',
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Preferred Branch:</strong> ${branch}</p>
             <p><strong>Destination:</strong> ${destination}</p>
             <p><strong>Message:</strong> ${message}</p>`,
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}