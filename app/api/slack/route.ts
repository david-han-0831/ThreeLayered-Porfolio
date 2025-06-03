import { NextResponse } from 'next/server';

interface SlackRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  categories: string[];
  hearAboutUs?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: SlackRequestBody = await request.json();
    
    // Format the message for Slack
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🌟 New Contact Form Submission 🌟",
            emoji: true
          }
        },
        {
          type: "divider"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*Contact Information*"
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `👤 *Name*\n${body.firstName} ${body.lastName}`
            },
            {
              type: "mrkdwn",
              text: `📧 *Email*\n${body.email}`
            }
          ]
        },
        {
          type: "divider"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*Additional Information*"
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `🏢 *Company*\n${body.company || 'Not provided'}`
            },
            {
              type: "mrkdwn",
              text: `🏷️ *Categories*\n${body.categories.map(cat => `• ${cat}`).join('\n')}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `💡 *How did you hear about us*\n${body.hearAboutUs || 'Not provided'}`
            }
          ]
        },
        {
          type: "divider"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*Message Content*"
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `💬 *Message*\n${body.message}`
          }
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `🕒 Submitted at: ${new Date().toLocaleString()}`
            }
          ]
        }
      ]
    };

    // Send message to Slack
    const response = await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Slack');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 