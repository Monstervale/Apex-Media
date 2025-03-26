export type ContactFormFields = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    subject: "WEB3" | "INFLUENCER" | "INVESTMENT" | "FUNDRAISING" |"OTHER",
    message: string
}