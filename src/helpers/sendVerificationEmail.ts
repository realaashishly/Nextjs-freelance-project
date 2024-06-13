import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { Apiresponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<Apiresponse> {
    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: email,
            subject: "Verification code",
            react: VerificationEmail({username, verifyCode}),
        });
        return {
            success: true,
            message: "Verification email sent successfully",
        };
    } catch (error) {
        console.error("Error sending verification email", error);
        return { success: false, message: "Failed to send verification email" };
    }
}
