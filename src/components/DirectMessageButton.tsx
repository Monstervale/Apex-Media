import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const DirectMessageButton = () => {
    return (
        <Link href={"https://t.me/apex_goku"} target="_blank" rel="noopener noreferrer">
            <Button variant={"transparent"} className="text-[12px] md:text-[16px] font-outfit font-medium">
                <div className="flex items-center justify-between gap-2 md:gap-4">
                    <Image src={'/svg/Arrow 8.svg'} alt={"arrow"} width={12.971} height={0}/>
                    <span>Direct Message</span>
                </div>
            </Button>
        </Link>
    );
};

export default DirectMessageButton;