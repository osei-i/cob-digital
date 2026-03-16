import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST ( req : Request,) {
    if ( req.method === 'POST') {
        const { first_name, 
            last_name, 
            email, 
            
            
            company_name,
            services,
            help,
            info,
            
        } = await req.json();

        try {
      // Create a Nodemailer transport object (configure with your email provider)
      const transporter = nodemailer.createTransport( {
 
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth : {
            user: 'oseiosoikhia@gmail.com',
            pass: 'kqlpzqdhvltqncdn'
        }
    } );
    




      const mailOptions = {
        from: email, 
        to: 'oseiosoikhia@gmail.com',
        subject: 'Contact Form Submission',
        html: `
        <h2>Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Company Name:</strong> ${company_name}</p>
        <p><strong>Services:</strong> ${services}</p>
        <p>Help: ${help}</p>

        <p>Info: ${info}</p>

      `,
    };





      // Send the email
      await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email has been sent' });
  
    } catch (error) {
      console.error(error);

        return NextResponse.json({message: 'Error sending email'});

    }
  } else {
    
    return NextResponse.json({message: 'Method not allowed'});
    }
}