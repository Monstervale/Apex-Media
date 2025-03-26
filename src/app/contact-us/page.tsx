import ContactUsForm from "@/components/ContactUsForm";
import Image from "next/image";

const ContactUsPage = () => {
    return (
        <div
            className="relative flex flex-col gap-12 bg-neutral-950 max-w-[2140px] min-h-screen m-auto"
        >
            <div className="absolute">
                <Image src={"/yellow-shad-r.svg"} className="w-full h-full" alt={"shad"} width={0} height={0}/>
            </div>
            <ContactUsForm/>
        </div>
    );
};

export default ContactUsPage;