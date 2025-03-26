import Link from "next/link";
import {Button} from "@/components/ui/button";

const EmailContactButton = () => {
    return (
        <Link href={"/contact-us"}>
            <Button className="text-[12px] md:text-[16px] font-medium font-outfit" variant={"transparent"}>Email Contact</Button>
        </Link>
    );
};

export default EmailContactButton;