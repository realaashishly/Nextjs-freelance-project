import * as React from "react";
import {
    Html,
    Head,
    Font,
    Body,
    Preview,
    Section,
    Row,
    Heading,
    Text,
} from "@react-email/components";

interface VerificationEmailProps {
    username: string;
    verifyCode: string;
}

export default function VerificationEmail({
    username,
    verifyCode
}: VerificationEmailProps) {
    return (
        <Html lang='en'>
            <Head>
                <Font
                    fontFamily='Roboto'
                    fallbackFontFamily='Verdana'
                    webFont={{
                        url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle='normal'
                />
            </Head>
            <Body>
                <Preview>
                    Here&apos;s your verification code: {verifyCode}
                </Preview>
                <Section>
                    <Row>
                        <Heading as='h2'>Hello {username},</Heading>
                    </Row>
                    <Row>
                        <Text>
                            Thank you for signing up for Resend. To confirm your
                            account, please following verification code below to
                            complete your registration.
                        </Text>
                    </Row>
                    <Row>
                        <Text>{verifyCode}</Text>
                    </Row>
                    <Row>
                        <Text>
                            If you didn&apos;t sign up for Resend, please ignore
                            this email.
                        </Text>
                    </Row>
                </Section>
            </Body>
        </Html>
    );
}
